# 大气校正法反演Landsat8影像地表温度

## 一、 大气校正法

> ​		估计大气对地表热辐射的影响, 然后把这部分大气影响从卫星传感器所观测到的热辐射总量中减去, 从而得到地表热辐射强度, 再把这一热辐射强度转化为相应的地表温度。

## 二、 流程图

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200507150639.png)

## 三、 对热红外波段（第10波段）进行辐射定标

> ​		遥感影像的亮度值(DN值)都是经过量化和纠正过的以8bit编码的数字影像，为了精确反演地物特性，有必要将DN值转化为星上辐射亮度值，即`辐射定标`。

​		在Landsat8影像数据目录下的【\*MTL.txt】元文件中查看对应波段的辐射亮度偏移值和增益值，并带入到公式**`L=M\*Q+A`**中（其中L为对应波段的辐射亮度，M为对应波段的【RADIANCE_MULT】值，Q为对应波段的DN值，A为对应波段的【RADIANCE_ADD】值）。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/遥感影像辐射定标参数_偏移和增益值.jpg)

​		在ArcGIS中利用【栅格计算器（Raster Calculator）】和整理好的辐射亮度计算公式运行得到第10波段的辐射亮度。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_辐射定标.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/第10波段辐射亮度.jpg)

## 四、 计算地表比辐射率

### 2.1 计算NDVI

​		利用【栅格计算器】和NDVI计算公式`NDVI=(NIR-R)/(NIR+R)`（其中，NIR为近红外波段，R为红光波段）运行出NDVI数据。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_DNVI.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/DNVI.jpg)

### 2.2 计算植被覆盖度

​		利用【栅格计算器】和植被覆盖度计算公式`Pv = [(NDVI- NDVISoil)／(NDVIVeg - NDVISoil)]`（其中，NDVI为归一化植被指数，NDVISoil为完全是裸土或无植被覆盖区域的NDVI值，NDVIVeg则代表完全被植被所覆盖的像元的NDVI值，即纯植被像元的NDVI值。取经验值NDVIVeg = 0.70和NDVISoil = 0.05，即当某个像元的NDVI大于0.70时，Pv取值为1；当NDVI小于0.05，Pv取值为0）运行出植被覆盖度数据。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_植被覆盖度.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/植被覆盖度.jpg)

### 2.3 计算地表比辐射率

​		利用【栅格计算器】和公式`地表比辐射率=0.004*植被覆盖度+0.986`计算地表比辐射率。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_地表比辐射率.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200507153540.png)

## 五、 计算地表温度

### 3.1 计算同温度下黑体辐射亮度

​		公式：`(第10波段辐射亮度-大气向上辐射亮度-大气在热红外波段的透过率*(1-地表比辐射率图像)*大气向下辐射亮度)/(大气在热红外波段的透过率*地表比辐射率)`

​		大气在热红外波段的透过率、大气向上辐射亮度和大气向下辐射亮辐射亮度可利用[*大气校正参数计算器*](https://atmcorr.gsfc.nasa.gov/)获取。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/大气剖面计算参数.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/网站大气剖面计算参数.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/大气剖面计算参数结果.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_同温度黑体辐射亮度.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/同温度黑体辐射亮度.jpg)

### 3.2 计算地表温度

​		利用*普朗克公式*`TS = K2/ln(K1/ B(TS)+ 1)-273`计算地表温度，B(TS)为同温度下的黑体辐射亮度。对于TIRS Band10，K1= 774.89 W/(m2*µm*sr)，K2 = 1321.08K。

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/栅格计算器_地表温度.jpg)

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/地表温度.jpg)

## 六、 结果出图

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/出图.png)