(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(t,v,a){"use strict";a.r(v);var _=a(6),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"矢量切片与栅格切片的认知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矢量切片与栅格切片的认知"}},[t._v("#")]),t._v(" 矢量切片与栅格切片的认知")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#栅格切片-瓦片"}},[t._v("栅格切片（瓦片）")]),a("ul",[a("li",[a("a",{attrs:{href:"#定义"}},[t._v("定义")])]),a("li",[a("a",{attrs:{href:"#优点"}},[t._v("优点")])]),a("li",[a("a",{attrs:{href:"#缺点"}},[t._v("缺点")])]),a("li",[a("a",{attrs:{href:"#特点"}},[t._v("特点")])])])]),a("li",[a("a",{attrs:{href:"#矢量切片"}},[t._v("矢量切片")]),a("ul",[a("li",[a("a",{attrs:{href:"#定义"}},[t._v("定义")])]),a("li",[a("a",{attrs:{href:"#优点"}},[t._v("优点")])]),a("li",[a("a",{attrs:{href:"#缺点"}},[t._v("缺点")])]),a("li",[a("a",{attrs:{href:"#特点"}},[t._v("特点")])])])])])]),a("p"),t._v(" "),a("blockquote",[a("p",[t._v("矢量数据，用点、线、面表示，有具体的经纬度坐标可以表示实际位置。比如道路、绿地、以及POI数据等。\n而栅格数据，是以像素为单位，组织成图片的形式来进行表达。例如卫星影像数据、DEM数据等。")])]),t._v(" "),a("h2",{attrs:{id:"栅格切片-瓦片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栅格切片-瓦片"}},[t._v("#")]),t._v(" 栅格切片（瓦片）")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("ul",[a("li",[t._v("是针对Web优化大小图像；")]),t._v(" "),a("li",[t._v("地图框架和SDK会以正确的顺序放置栅格地图图块，从而生成地图；")])]),t._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("加载时间成本低，适用于所有类型的设备（台式机和移动设备）以及所有浏览器；")]),t._v(" "),a("li",[t._v("在服务器上渲染的栅格地图图块不会在客户端站点上产生性能负载")])]),t._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("无法在客户端站点上自定义或添加新样式；")]),t._v(" "),a("li",[t._v("无法更改标签，在客户端应用程序中显示/隐藏对象；")]),t._v(" "),a("li",[t._v("在一段时间内，您可以在地图移动/缩放屏幕上看到空白区域。也就是说，加载所需的瓦片需要花费一些时间；")])]),t._v(" "),a("blockquote",[a("p",[t._v("在数据量比较小的时候并没有什么大问题，但是在数据量比较大时（例如全国的详细街区数据）存在以下几个问题：")]),t._v(" "),a("ul",[a("li",[t._v("首先，同一套数据的展示在不同的需求下可能需要不同的样式（例如，白天和夜间模式）而对于传统栅格切片对此需求必须重新进行切片；")]),t._v(" "),a("li",[t._v("第二，由于切片的分辨率固定，分辨率过高切片体积过大，分辨率过低高清屏无法清晰显示；")]),t._v(" "),a("li",[t._v("第三，矢量数据的请求如果是按需请求每次都向服务器请求数据加重服务器压力，如果一次请求按需展示，当矢量数据过大时（例如全国的水系数据）对于前端的压力过大")])])]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("h2",{attrs:{id:"矢量切片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矢量切片"}},[t._v("#")]),t._v(" 矢量切片")]),t._v(" "),a("h3",{attrs:{id:"定义-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-2"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("ul",[a("li",[t._v("与栅格图块相比，矢量图块不是图像，而是二进制文件。它们包含在客户端生成映射所需的所有必需信息；")]),t._v(" "),a("li",[t._v("矢量图块可快速提供巨大的地图，同时提供充分的设计灵活性。它们相当于用于Web映射的图块的矢量数据，将平铺的优势（为快速缓存，缩放和快速提供地图图像而开发）应用于矢量数据;")])]),t._v(" "),a("h3",{attrs:{id:"优点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("可以在客户端应用程序中即时更改地图和标签样式（"),a("u",[t._v("自由渲染")]),t._v("）；")]),t._v(" "),a("li",[t._v("磁贴的尺寸非常小，非常适合流式和离线地图；")]),t._v(" "),a("li",[t._v("可以平滑地移动地图，放大/缩小地图，而不会延迟渲染；")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("与完全渲染的图像图块相比，矢量图块具有两个重要优点：\n"),a("strong",[t._v("样式")]),t._v("：作为矢量，可以根据要求设置图块的样式，从而允许在全局数据上使用多种地图样式")]),t._v(" "),a("li",[a("strong",[t._v("大小")]),t._v("：向量图块非常小，可启用全局高分辨率地图，快速地图加载和有效的缓存")])])]),t._v(" "),a("h3",{attrs:{id:"缺点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("渲染发生在客户端，这可能会在速度较慢的设备上造成性能问题；")]),t._v(" "),a("li",[t._v("数据量大，访问时会给前端带来太大压力。一般会通过对数据字段进行删减或者对数据进行抽稀，来减少数据的大小（"),a("u",[t._v("字段删减")]),t._v("、"),a("u",[t._v("数据抽稀")]),t._v("）;")]),t._v(" "),a("li",[t._v("并非所有的矢量地图SDK都具有移动版本。碰巧某些设备上的可视化效果不正确或太慢；")]),t._v(" "),a("li",[a("s",[t._v("目前尚无标准")]),t._v("，尚未将您绑定到地图提供者SDK（"),a("strong",[t._v("有待考证")]),t._v("）；")]),t._v(" "),a("li")]),t._v(" "),a("h3",{attrs:{id:"特点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("矢量切片底图可以将基础底图和工作数据进行融合，扩展底图的交互性；")]),t._v(" "),a("li",[t._v("动态的赋予基础底图样式以及通过配合可交互的工作数据来设计底图样式，根据内容进行智能制图和实时分析并展示在基础地图上；")])])])}),[],!1,null,null,null);v.default=r.exports}}]);