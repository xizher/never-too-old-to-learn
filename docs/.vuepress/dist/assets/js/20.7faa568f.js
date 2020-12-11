(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{203:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"r语言实现栅格块统计算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r语言实现栅格块统计算法"}},[t._v("#")]),t._v(" R语言实现栅格块统计算法")]),t._v(" "),a("h2",{attrs:{id:"一、块统计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、块统计原理"}},[t._v("#")]),t._v(" 一、块统计原理")]),t._v(" "),a("blockquote",[a("p",[t._v("源自自"),a("a",{attrs:{href:"https://desktop.arcgis.com/zh-cn/arcmap/latest/tools/spatial-analyst-toolbox/block-statistics.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("块统计—帮助|文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("将输入分割放入非重叠块中，然后计算每个块中值的统计数据。在输出中，将值分配给每个块中的所有像元。")]),t._v(" "),a("p",[t._v("块统计工具所执行的邻域运算可为一组固定的非重叠窗口或邻域中的输入像元计算统计数据。包括每个邻域内的所有输入像元的统计数据（如最大值、最小值、平均值或总和）。为单个邻域或块生成的值会分配给包含在指定邻域的最小外接矩形中的所有像元。")]),t._v(" "),a("p",[t._v("由于各邻域间不重叠，所以只会将一个块的任何特定像元包括在计算中。")]),t._v(" "),a("p",[t._v("邻域内可以计算的统计量有均值、众数、最大值、中值、最小值、少数、范围、标准差、总和以及变异度。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428134828.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"二、算法实现-r语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、算法实现-r语言"}},[t._v("#")]),t._v(" 二、算法实现（R语言）")]),t._v(" "),a("h3",{attrs:{id:"_1-创建算法测试矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建算法测试矩阵"}},[t._v("#")]),t._v(" 1. 创建算法测试矩阵")]),t._v(" "),a("p",[t._v("栅格数据本质上是一种矩阵，因此，对栅格的处理即为对矩阵的运算处理。首先创建一个测试矩阵"),a("strong",[t._v("M")]),t._v("，并假设统计块域为2*2的矩形区域，即统计边长"),a("strong",[t._v("A")]),t._v("为2。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428135654.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_2-遍历统计块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-遍历统计块"}},[t._v("#")]),t._v(" 2. 遍历统计块")]),t._v(" "),a("p",[t._v("首先对整体矩阵结合统计块大小进行均匀切割，对切割后的生成各个统计块进行遍历，这是第一层遍历。然后对每个统计块中的矩阵元素进行遍历统计，这是第二层循环。在第二层循环结束后，在同一层级循环体下再进行一次循环，将块统计结果赋值到新的矩阵内。以此迭代，最后返回块统计结果栅格。")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计矩阵的行数")]),t._v("\ncols "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计矩阵的列数")]),t._v("\n\nMM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 空的新矩阵（结果）")]),t._v("\n\nA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计块大小")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一层循环")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二层循环")]),t._v("\n        r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将统计结果赋值到新矩阵中")]),t._v("\n        r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sum\n                c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" A\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出结果矩阵MM，可以看出该块统计实现了计算块中总和计算。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428140943.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"三、应用实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、应用实践"}},[t._v("#")]),t._v(" 三、应用实践")]),t._v(" "),a("h3",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("p",[t._v("下图是对遥感影像经过一系列处理提取出来的石家庄地区城市与乡镇用地（城市下垫面）栅格数据。紫色区域值为8，空白区域值为NoData，分辨率为30m。现在要计算该数据再1km分辨率网格中的面积比例。即计算1km*1km网格内，城市下垫面占比。")]),t._v(" "),a("p",[t._v("结合要求，我们可以用到上述的块统计算法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428141454.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_2-实现过程-r语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现过程-r语言"}},[t._v("#")]),t._v(" 2. 实现过程（R语言）")]),t._v(" "),a("p",[t._v("首先将统计计算要用到的工具包导入进来，包括"),a("code",[t._v("raster")]),t._v("、"),a("code",[t._v("rgdal")]),t._v("和"),a("code",[t._v("tools")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install.package('xxx')")]),t._v("\nlibrary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgdal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然后读取需要进行块统计的栅格数据，并获取其所有像元值（转换为矩阵形式）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rs <- raster('./data/sjz_c8_prj.tif')\nrs_data <- as.matrix(rs)\n")])])]),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428142843.png",alt:"img"}})]),t._v(" "),a("p",[t._v("将上述的块统计算法进行封装，成R语言函数"),a("code",[t._v("block_stat")]),t._v("，以进行调用，其中参数M为待进行块统计的矩阵，参数W为统计块域的边长，V为统计量（应用要求中，需要对每一个统计块计算像元值等于8的像元个数，即V在其中充当一个条件量）。")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("block_stat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cols "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    MM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("is.na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结合实际要求变通")]),t._v("\n                        count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结合实际要求变通")]),t._v("\n                    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" W\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最后，调用上述整理好的函数"),a("code",[t._v("block_stat")]),t._v("，生成块统计结果，并进行输出展示。")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("rs_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" block_stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" setValues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rs_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwriteRaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result_data.tif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GTiff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428143734.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"四、分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、分享"}},[t._v("#")]),t._v(" 四、分享")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/%E5%9D%97%E7%BB%9F%E8%AE%A1.R",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用源代码"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/%E5%9D%97%E7%BB%9F%E8%AE%A1%E7%AE%97%E6%B3%95%E6%B5%8B%E8%AF%95.R",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试源代码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);