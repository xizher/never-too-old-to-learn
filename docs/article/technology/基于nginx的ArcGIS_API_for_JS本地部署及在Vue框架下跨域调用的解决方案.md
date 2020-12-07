# 基于nginx的ArcGIS API for JS本地部署及在Vue框架下跨域调用的解决方案

[[TOC]]

## 1. nginx服务器安装配置

​		在[nginx下载地址(官网)](https://nginx.org/en/download.html)中下载Windows版本的压缩包[nginx/Windows-1.17.10](https://nginx.org/download/nginx-1.17.10.zip)，通过解压后启动nginx.exe即可启动nginx服务器。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513194414.png)

​		可在`Git Bash命令行工具`中使用命令`./nginx.exe`启动nginx服务器，也可使用命令`./nginx.exe >/dev/null 2>&1 &`实现后台启动。然后在浏览器中访问localhost地址即可查看到nginx服务器内容。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513203411.png)

​		另外，当需要对nginx服务器进行配置调整的时候（通常情况下，是对nginx根目录下的**conf/nginx.conf**文件进行配置），可在`Git Bash`中使用命令`ps -ef | grep nginx`查看当前nginx服务器的进程号，然后使用命令`kill 【进程号】`关闭nginx服务器，并使用启动命令重新启动nginx服务器以更新nginx服务器配置。

## 2. ArcGIS API for JavaScript本地部署

​		在[ArcGIS API for JavaScript官网下载地址](https://developers.arcgis.com/downloads/apis-and-sdks?product=javascript)中按需选择对应版本的API和SDK进行下载。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513204437.png)

​		以下分别是解压好的API和SDK文件目录树。

```
| arcgis_js_v415_api
	| arcgis_js_api
		| library
			| 4.15 	// 主要文件
				| ...
			| downloads
				| ...
	| legal
	| insall.html
| arcgis_js_v415_sdk
	| arcgis_js_api
		| sdk 		// 主要文件
			| ...
	| legal
	| install.html
```

​		将其中API的【4.15】文件夹和SDK的【sdk】文件夹统一规整（我是复制到了本机的【C:\wxz\src\ArcGIS\arcgis_api_js】该目录下）。

```
| arcgis_api_js
	| api
		| 4.15 // 原API中的【4.15】文件夹，内含init.js、dojs等文件（夹）
	| sdk
		| 4.15 // 原SDK中的【sdk】文件夹，内含asset、index.html等文件（夹）
```

​		然后对nginx服务器根目录下的【./conf/nginx.conf】配置文件进行修改。`location /arcgis/api`是对API进行配置，其中**alias**后面指向的是先前存放API的全路径，**index**后面对应其目录下的dojo/dojs.js文件。`location /arcgis/sdk`是对SDK进行配置，其中的**alias**与API同理，`index`后面跟index.html文件。保存该配置文件后重新启动nginx服务器，在浏览器中访问http://localhost/arcgis/sdk/4.15地址即可打开ArcGIS API for JS帮助文档，即SDK，说明SDK本机部署完成。但API的本机部署还未完。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513210124.png)

​		对API的本机部署还需要在api的根目录（C:\wxz\src\ArcGIS\arcgis_api_js\api\4.15）下的【init.js】和【dojo/dojo.js】文件进行修改。对这*两个*文件中[HOSTNAME_AND_PATH_TO_JSAPI]`所指的地址修改为与本机nginx服务器配置好的API对应匹配的地址。保存修改后，API的本机部署也完成了。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513212443.png)

​		接下来测试API本机部署是否成功。将一下代码保存成html文件，并将其放置在nginx服务器根目录下的**html**文件夹下，随后在浏览器中访问地址http://localhost/xxx.html查看网页请求的API接口是否为本机地址。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no" />
    <title>Test Map</title>
    <link rel="stylesheet" href="http://localhost/arcgis/api/4.15/dijit/themes/claro/claro.css" />
    <link rel="stylesheet" href="http://localhost/arcgis/api/4.15/esri/themes/light/main.css" />
    <script src="http://localhost/arcgis/api/4.15/dojo/dojo.js"></script>
    <style>
      html, body, #viewDiv {
        margin: 0; padding: 0; width: 100%; height: 100%;
      }
    </style>
    <script>
      var myMap, view;
      require([
        "esri/Basemap", "esri/layers/TileLayer", "esri/Map", "esri/views/MapView"
      ], function (Basemap, TileLayer, Map, MapView){
        var layer = new TileLayer({
          url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        });
        var customBasemap = new Basemap({
          baseLayers: [layer],
          title: "Custom Basemap",
          id: "myBasemap"
        });
        myMap = new Map({
          basemap: customBasemap
        });
        view = new MapView({
          center: [-111.87, 40.57], // long, lat
          container: "viewDiv",
          map: myMap,
          zoom: 6
        });
      });
    </script>
  </head>
  <body class="claro">
    <div id="viewDiv"></div>
  </body>
</html>
```

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513213731.png)

​		以上，说明API本机部署成功。

## 3. 在Vue项目中调用本机API进行开发

​		在已有`node`和`npm`的环境下安装Vue脚骨架。在`Git Bash命令行工具`中使用命令`npm install -g @vue/cli`和`npm install -g @vue/cli-init`完成Vue脚骨架的安装。

​		使用命令`vue init webpack 【项目名】`初始化Vue项目，并在项目目录下使用命令`npm install esri-loader --save`安装esri-loader中间件。然后对项目中的**src/App.vue**文件进行修改，调整成一下代码。

```vue
<template><div id="map-view"></div></template>
<script>
import { loadModules } from 'esri-loader';
import { ARCGIS_API_ROOTURL } from './config/arcgis_js_api'
export default {
    methods: {
        createMapView() {
            console.log('running')
            const _self = this;
            const option = {
                url: `${ARCGIS_API_ROOTURL}/init.js`,
                css: `${ARCGIS_API_ROOTURL}/esri/themes/light/main.css`
            };
            loadModules([
                'esri/Map', 'esri/views/MapView'
            ], option).then(([Map, MapView]) => {
                const map = new Map({ basemap: "streets" });
                const view = new MapView({
                    container: "map-view",
                    map: map,
                    zoom: 11, 
                    center: [104.072044,30.663776]
                });
                view.ui.components = [];
            }).catch((err) => {  _self.$message('地图创建失败，' + err); });
        }
    },
    mounted() { this.createMapView(); }
}
</script>
<style scoped>
#map-view {
    min-height: 100vh;
    width: 100%;
}
</style>
```

​		其中【./config/arcgis_js_api】所指的文件如下图，作用是声明并输出一个指向API本机部署的地址，可以根据实际情况进行修改。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513215242.png)

​		对项目根目录下的【index.html】添加上清除浏览器默认样式的嵌入式css标签。随后使用命令`npm run dev`启动Vue项目，Vue项目端口默认为8080，在浏览器中访问地址http://localhost:8080打开Vue项目，同时，在浏览器控制台中会发现下图报错信息，意思大致是当前网页不允许对本机部署的API进行跨域访问。因此，我们需要对nginx的配置文件进行修改以实现跨域访问。


​		在nginx根目录下的conf/nginx.conf文件相应位置上添加一下代码，以实现跨域访问。其中【http://localhost:8080】是指本机部署的API能够被该地址域（Vue项目地址）访问到。保存修改重新启动nginx服务器，并在浏览器中使用【清除缓存并进行硬刷新】的方式重新打开Vue项目地址，其控制台中就不会出现不允许跨域请求的报错信息了。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513220347.png)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200513221157.png)