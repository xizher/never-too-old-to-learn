# ArcGIS REST API操作要素服务
[[TOC]]

## - 前提
- 使用`axios`库进行Ajax请求；
- 使用ES6 class语法对要素服务的操作进行封装；

## - 实现

### 1. 类定义

要素服务操作类定义为`FeatureHandle`，`contstructor`为类的构造函数。其中，featureUrl参数为要素服务的地址，为http://xxxxx/FeatureServer/0的形式，options为一些配置参数（下面会讲到），默认为空对象。

```javascript
const FeatureHandle = class {
    constructor (featureUrl, options = {}) {
        // ...
    }
};
```

### 2.  类属性

构造函数中定义了两个<u>私有变量</u>，分别是记录要素服务地址的`_featureUrl`和记录配置信息的`_options`，其中，`_options.f`为请求后响应数据的格式，默认为`json`；`_options.gdbVersion`为操作要素服务的数据库版本，默认为空，及对当前版本进行要素操作；`_options.rollbackOnFailure`为是否仅在所有提交的编辑成功后才应用编辑，默认为`true`。`Object.keys...`语句起覆盖配置参数默认项作用。

```javascript
constructor (featureUrl, options = {}) {
    const _featureUrl = featureUrl;
    const _options = {
        f: 'json',
        gdbVersion: '',
        rollbackOnFailure: true
    }
    Object.keys(options).map(key => _options[key] = options[key]);
    // ...
}
```

### 3. 编写要素操作方法

#### 3.1 集成私有方法

- `_axiosGet`集成`axios`的`get`方法
- `_axiosPost`集成`axios`的`post`方法
- `_stringfy`负责格式化`JSON`参数为<u>key=val&key=val</u>的形式
- `_checkObjectID`检查`features`对象中的属性时候函数`ObjectID`字段属性

```javascript
function _axiosGet(url, options) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
        	params: options
        }).then(res => {
            if (res.status == 200) {
            	resolve(res.data);
            } else {
                console.warn(res);
                reject('网络异常，请求失败');
            }
        }).catch(err => {
            console.warn(err);
            reject('网络异常，请求失败');
        })
    });
}

function _axiosPost(url, options) {
    return new Promise((resolve, reject) => {
        axios.post(url, _stringfy(options), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                console.warn(res);
                reject('网络异常，请求失败');
            }
        }).catch(err => {
            console.warn(err);
            reject('网络异常，请求失败');
        })
    });
}
function _stringfy(options) {
    let str = '';
    for (var key in options) {
        let val = options[key];
        if (typeof options[key] == 'object') {
            val = JSON.stringify(options[key]);
        }
        if (val) {
            str = str + `${key}=${val}&`;
        }
    }
    str = str.substring(0, str.length - 1);
    return str;
}
function _checkObjectID(features) {
    for (let i = 0; i < features.length; i++) {
        const feat = features[i];
        if (!(feat.attributes && feat.attributes.OBJECTID)) {
            return false;
        }
    }
    return true;
}
```

#### 3.2 要素查询

```javascript
this.query = opts => {
    return new Promise((resolve, reject) => {
        const {
            where = '1=1',
            outFields = '*',
            returnGeometry = true,
            geometry = null,
            geometryType = 'esriGeometryEnvelope',
            inSR = null,
            spatialRel = 'esriSpatialRelIntersects',
            outSR = null,
            returnCountOnly = false,
        } = opts || {};
        _axiosGet(`${_featureUrl}/query`, {
            where, outFields, returnGeometry, geometry, geometryType, inSR, spatialRel, outSR, returnCountOnly,
            f: _options.f
        }).then(res => resolve(res)).catch(err => reject(err));
    });
};
```

#### 3.3 要素添加

```javascript
this.add = features => {
    return new Promise((resolve, reject) => {
        if (typeof features != 'object') {
            reject('添加要素格式有误')
        } else {
            if (!js.ext.isArray(features)) {
                features = [features];
            }
            _axiosPost(`${_featureUrl}/addFeatures`, {
                features, ..._options
            }).then(res => resolve(res)).catch(err => reject(err));
        }
    });
};
```

#### 3.4 要素删除

```javascript
this.delete = opts => {
    return new Promise((resolve, reject) => {
        const {
            objectIds,
            where,
            geometry,
            geometryType = 'esriGeometryEnvelope',
            inSR = null,
            spatialRel = 'esriSpatialRelIntersects',
        } = opts || {};
        _axiosPost(`${_featureUrl}/deleteFeatures`, {
            objectIds, where, geometry, geometryType, inSR, spatialRel, ..._options
        }).then(res => resolve(res)).catch(err => reject(err));
    });
};
```

#### 3.5 要素更新

```javascript
this.update = features => {
    return new Promise((resolve, reject) => {
        if (typeof features != 'object') {
            reject('添加要素格式有误')
        } else {
            if (!js.ext.isArray(features)) {
                features = [features];
            }
            if (!_checkObjectID(features)) {
                reject('存在未指定要更新的要素');
            } else {
                _axiosPost(`${_featureUrl}/updateFeatures`, {
                    features, ..._options
                }).then(res => resolve(res)).catch(err => reject(err));
            }
        }
    });
};
```

## - 后记

### 参考

[https://blog.csdn.net/wuwenjinwuwenjin/article/details/37722661](https://blog.csdn.net/wuwenjinwuwenjin/article/details/37722661)

[https://gis.stackexchange.com/questions/34735/invalid-parameters-on-arcgis-rest-api-used-from-silverlight](https://gis.stackexchange.com/questions/34735/invalid-parameters-on-arcgis-rest-api-used-from-silverlight)

### 完整代码

```javascript
/**
 * @class FeatureHandle
 * @description 要素服务操作类
 * @param {String} featureUrl 要素服务地址
 * @returns {FeatureHandle} 要素服务操作类
 * @requires {@link namespace}
 * @requires {@link js.ext}
 * @example
 *  const featureHandle = new FeatureHandle('http://xxx/FeatureServer/0');
    
    // 要素查询
    featureHandle.query().then(res => {
        // 请求成功后执行
    }).catch(err => {
        // 请求失败执行
    });

    // 要素添加
    featureHandle.add( {
        'geometry': { x: 715563.5969000032, y: 2541615.1215033004 },
        'attributes': { 'XMLXMC': '测试添加' }
    }).then(res => {
        // 请求成功后执行
    }).catch(err => {
        // 请求失败执行
    });

    // 要素删除
    featureHandle.delete({
        objectIds: 128
    }).then(res => {
        // 请求成功后执行
    }).catch(err => {
        // 请求失败执行
    });

    // 要素更新
    featureHandle.update({
        'attributes': { OBJECTID: 321, SBDW: '测试更新' }
    }).then(res => {
        // 请求成功后执行
    }).catch(err => {
        // 请求失败执行
    });

 */
FSSG.FeatureHandle = class {
    //#region 构造函数
    constructor(featureUrl, options = {}) {
        /**
         * 要素服务地址
         * @type {String}
         * @memberof FeatureHandle
         * @instance
         * @name _featureUrl
         */
        const _featureUrl = featureUrl;

        /**
         * 参数初始化设置
         * @type {object}
         * @memberof FeatureHandle
         * @instance
         */
        const _options = {
            f: 'json', // 响应格式，默认为json
            gdbVersion: '', // 要查询的地理数据库版本，如果未指定gdbVersion，则该查询将应用于已发布地图的版本
            rollbackOnFailure: true, // ，用于指定是否仅在所有提交的编辑成功后才应用编辑，默认为true
        };

        // 获取设置的参数
        Object.keys(options).map(key => _options[key] = options[key]);

        //#region 在构造函数中扩展方法，以便访问私有数据和方法
        /**
         * 要素查询
         * @param {Object} opts 查询参数
         * @param {String} opts.where 过滤WHERE，默认为1=1，全部输出
         * @param {String} opts.outFields 插入输入字段，默认为*，全部输出
         * @param {Boolean} opts.returnGeometry 是否输出几何，默认为true
         */
        this.query = opts => {
            return new Promise((resolve, reject) => {
                const {
                    where = '1=1',
                    outFields = '*',
                    returnGeometry = true,
                    geometry = null,
                    geometryType = 'esriGeometryEnvelope',
                    inSR = null,
                    spatialRel = 'esriSpatialRelIntersects',
                    outSR = null,
                    returnCountOnly = false,
                } = opts || {};
                _axiosGet(`${_featureUrl}/query`, {
                    where, outFields, returnGeometry, geometry, geometryType, inSR, spatialRel, outSR, returnCountOnly,
                    f: _options.f
                }).then(res => resolve(res)).catch(err => reject(err));
            });
        };
        /**
         * 要素添加
         * @param {Array|Object} features 添加的要素(s)
         * @return {Promise}
         */
        this.add = features => {
            return new Promise((resolve, reject) => {
                if (typeof features != 'object') {
                    reject('添加要素格式有误')
                } else {
                    if (!js.ext.isArray(features)) {
                        features = [features];
                    }
                    _axiosPost(`${_featureUrl}/addFeatures`, {
                        features, ..._options
                    }).then(res => resolve(res)).catch(err => reject(err));
                }
            });
        };
        /**
         * 要素删除
         * @param {Object} opts 删除参数
         * @return {Promise}
         */
        this.delete = opts => {
            return new Promise((resolve, reject) => {
                const {
                    objectIds,
                    where,
                    geometry,
                    geometryType = 'esriGeometryEnvelope',
                    inSR = null,
                    spatialRel = 'esriSpatialRelIntersects',
                } = opts || {};
                _axiosPost(`${_featureUrl}/deleteFeatures`, {
                    objectIds, where, geometry, geometryType, inSR, spatialRel, ..._options
                }).then(res => resolve(res)).catch(err => reject(err));
            });
        };
        /**
         * 要素更新
         * @param {Object|Array} features 更新的要素
         * @return {Promise}
         */
        this.update = features => {
            return new Promise((resolve, reject) => {
                if (typeof features != 'object') {
                    reject('添加要素格式有误')
                } else {
                    if (!js.ext.isArray(features)) {
                        features = [features];
                    }
                    if (!_checkObjectID(features)) {
                        reject('存在未指定要更新的要素');
                    } else {
                        _axiosPost(`${_featureUrl}/updateFeatures`, {
                            features, ..._options
                        }).then(res => resolve(res)).catch(err => reject(err));
                    }
                }
            });
        };
        //#endregion

        //#region 私有方法
        /**
         * Ajax（Get）请求
         * @param {String} url 请求地址
         * @param {Object} options 请求参数
         * @return {Promise}
         */
        function _axiosGet(url, options) {
            return new Promise((resolve, reject) => {
                axios.get(url, {
                    params: options
                }).then(res => {
                    if (res.status == 200) {
                        resolve(res.data);
                    } else {
                        console.warn(res);
                        reject('网络异常，请求失败');
                    }
                }).catch(err => {
                    console.warn(err);
                    reject('网络异常，请求失败');
                })
            });
        }
        /**
         * Ajax（Post）请求
         * @param {String} url 请求地址
         * @param {Object} options 请求参数
         * @return {Promise}
         */
        function _axiosPost(url, options) {
            return new Promise((resolve, reject) => {
                axios.post(url, _stringfy(options), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(res => {
                    if (res.status == 200) {
                        resolve(res.data);
                    } else {
                        console.warn(res);
                        reject('网络异常，请求失败');
                    }
                }).catch(err => {
                    console.warn(err);
                    reject('网络异常，请求失败');
                })
            });
        }
        /**
         * 请求数据格式化
         * @param {Object} options 请求参数
         * @return {String} 格式化参数
         */
        function _stringfy(options) {
            let str = '';
            for (var key in options) {
                let val = options[key];
                if (typeof options[key] == 'object') {
                    val = JSON.stringify(options[key]);
                }
                if (val) {
                    str = str + `${key}=${val}&`;
                }
            }
            str = str.substring(0, str.length - 1);
            return str;
        }
        /**
         * 检查要素s是否含有OBJECTID属性值
         * @param {Array} features 要素s
         */
        function _checkObjectID(features) {
            for (let i = 0; i < features.length; i++) {
                const feat = features[i];
                if (!(feat.attributes && feat.attributes.OBJECTID)) {
                    return false;
                }
            }
            return true;
        }
        //#endregion
    }
    //#endregion

}

```

