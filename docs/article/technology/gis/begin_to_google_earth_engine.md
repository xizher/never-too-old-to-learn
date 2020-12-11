# GoogleEarthEngine学习笔记
## 一、GEE基本概念

![image-20200316130841542](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/image-20200316130841542.png)

## 二、信息打印

在GEE(地球引擎编辑器 - JavaScript)中可以使用**print()**函数代替**console.log()**函数对传入参数进行打印。

```
print('Good Luck!'); // or console.log('Good Luck!');
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318'); // 根据Id值获取影像
print(image); // 打印影像信息
```

![image-20200316130940242](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/image-20200316130940242.png)

## 三、数据查询与添加

单幅影像数据可通过**ee.Image()**函数获取， 然后利用**Map.addLauer()**函数把获取的影像添加至地图中， 可利用**Map.centerObject()**函数来将地图定位到影像中心位置

```
// 获取影像对象同时将其添加到地图上的函数
var GetImage = function(obj){ 
    var id = obj.id; // 影像Id值
    var name = obj.name; // 影像的图层名
    if(id){
        var image = ee.Image(id); // 获取影像对象
        // 添加影像至地图并将地图视窗定位到影像中心位置
        Map.centerObject(image, 9); // 第2个参数为地图视窗的缩放等级
        Map.addLayer(image, {}, name);
        return image; // 返回获取的影像对象
    }
};
```

对获取到的影像未加修饰的添加的地图上可能在显示效果上不大好， 因此通常需要进行一些可视化操作， 比如，波段的排列组合显示

```
// 改进GetImage()函数
var GetImage = function(obj){
    var id = obj.id;
    var name = obj.name;
    var vizParams = {
        bands: obj.bands, // 波段组合
        min: obj.min || 5000,
        max: obj.max || 15000,
        gamma: obj.gamma1 || 1.3 // 伽马值
    };
    if(id){
        var image = ee.Image(id);
        Map.centerObject(image, 9);
        Map.addLayer(image, vizParams, name);
        return image;
    }
}; 
```

![image-20200316131102426](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/image-20200316131102426.png)

在这里要注意波段标识的指向， 例如，Landsat4/5和Landsat8中真/假彩色对应表示的波段

**TM传感器**

| 波段 | 范围        | 分辨率 |
| ---- | ----------- | ------ |
| 1    | 0.45~0.52   | 30m    |
| 2    | 0.52~0.60   | 30m    |
| 3    | 0.63~0.69   | 30m    |
| 4    | 0.76~0.90   | 30m    |
| 5    | 1.55~1.75   | 30m    |
| 6    | 10.40~12.50 | 120m   |
| 7    | 2.08~2.35   | 30m    |

**OLI传感器**

| 波段 | 类型         | 范围        | 分辨率 |
| ---- | ------------ | ----------- | ------ |
| 1    | 蓝绿波段     | 0.433~0.453 | 30m    |
| 2    | 蓝绿波段     | 0.450~0.515 | 30m    |
| 3    | 绿波段       | 0.525~0.600 | 30m    |
| 4    | 红波段       | 0.630~0.680 | 30m    |
| 5    | 近红外       | 0.845~0.885 | 30m    |
| 6    | 中红外       | 1.560~1.660 | 120m   |
| 7    | 中红外       | 2.100~2.300 | 30m    |
| 8    | 微米全色     | 0.500~0.680 | 15m    |
| 9    | 短波红外波段 | 1.360~1.390 | 30m    |

利用**ee.ImageCollection()**函数能够获取影像集， 使用该函数时可以结合使用过滤器筛选影像

```
/* 定义获取影像集函数 */
var GetImageList = function(obj){
    var id = obj.id; // 影像集Id值
    var geometry = obj.geometry; // 过滤条件：范围
    var startTime = obj.startTime; // 过滤条件：开始时间
    var endTime = obj.endTime; // 过滤条件： 结束时间
    var sortField = obj.sortField; // 影像排序字段
    var isAes = obj.isAes; // 影像排序方式：是否为升序
    if(id){
        var imageCollection = ee.ImageCollection(id)
            .filterBounds(geometry)
            .filterDate(startTime, endTime)
            .sort(sortField, isAes);
        print(imageCollection);
        return imageCollection;
    }  
};
```

![image-20200316131452703](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/image-20200316131452703.png)

| 卫星系列                           | 开始时间   | 结束时间   | ImageCollectionID       |
| ---------------------------------- | ---------- | ---------- | ----------------------- |
| Landsat4 TM Tier 1 Row Scenes      | 1982-08-22 | 1993-12-14 | LANDSAT/LT04/C01/T1     |
| Landsat4 TM Tier 1 TOA Reflectance | 1982-08-22 | 1993-12-14 | LANDSAT/LT04/C01/T1_TOA |
| Landsat4 TM Tier 2 Row Scenes      | 1982-08-22 | 1993-12-14 | LANDSAT/LT04/C01/T2     |
| Landsat4 TM Tier 2 TOA Reflectance | 1982-08-22 | 1993-12-14 | LANDSAT/LT04/C01/T2_TOA |
| Landsat5 TM Tier 1 Row Scenes      | 1984-01-01 | 2012-05-05 | LANDSAT/LT05/C01/T1     |
| Landsat5 TM Tier 1 TOA Reflectance | 1984-01-01 | 2012-05-05 | LANDSAT/LT05/C01/T1_TOA |
| Landsat5 TM Tier 2 Row Scenes      | 1984-01-01 | 2012-05-05 | LANDSAT/LT05/C01/T2     |
| Landsat5 TM Tier 2 TOA Reflectance | 1984-01-01 | 2012-05-05 | LANDSAT/LT05/C01/T2_TOA |