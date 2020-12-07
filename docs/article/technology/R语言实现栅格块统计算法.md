# R语言实现栅格块统计算法
[[TOC]]

## 块统计原理

>  源自自[块统计—帮助|文档](https://desktop.arcgis.com/zh-cn/arcmap/latest/tools/spatial-analyst-toolbox/block-statistics.htm)。
>
> 将输入分割放入非重叠块中，然后计算每个块中值的统计数据。在输出中，将值分配给每个块中的所有像元。
>
> 块统计工具所执行的邻域运算可为一组固定的非重叠窗口或邻域中的输入像元计算统计数据。包括每个邻域内的所有输入像元的统计数据（如最大值、最小值、平均值或总和）。为单个邻域或块生成的值会分配给包含在指定邻域的最小外接矩形中的所有像元。
>
> 由于各邻域间不重叠，所以只会将一个块的任何特定像元包括在计算中。
>
> 邻域内可以计算的统计量有均值、众数、最大值、中值、最小值、少数、范围、标准差、总和以及变异度。

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428134828.png)

## 算法实现（R语言）

### 1. 创建算法测试矩阵

栅格数据本质上是一种矩阵，因此，对栅格的处理即为对矩阵的运算处理。首先创建一个测试矩阵**M**，并假设统计块域为2*2的矩形区域，即统计边长**A**为2。

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428135654.png)

### 2. 遍历统计块

首先对整体矩阵结合统计块大小进行均匀切割，对切割后的生成各个统计块进行遍历，这是第一层遍历。然后对每个统计块中的矩阵元素进行遍历统计，这是第二层循环。在第二层循环结束后，在同一层级循环体下再进行一次循环，将块统计结果赋值到新的矩阵内。以此迭代，最后返回块统计结果栅格。

```R
rows = length(M[,1]) # 统计矩阵的行数
cols = length(M[1,]) # 统计矩阵的列数

MM <- matrix(0, nrow = rows, ncol = cols) # 空的新矩阵（结果）

A = 2 # 统计块大小

# 第一层循环
i <- 1
while (i <= rows) {
    j <- 1
    while (j <= cols) {
        sum <- 0
        # 第二层循环
        r <- i
        while (r < i + A && r <= rows) {
            c <- j
            while (c < j + A && c <= cols) {
                sum <- sum + M[r, c]
                c <- c + 1
            }
            r <- r + 1
        }
        # 将统计结果赋值到新矩阵中
        r <- i
        while (r < i + A && r <= rows) {
            c <- j
            while (c < j + A && c <= cols) {
                MM[r, c] <- sum
                c <- c + 1
            }
            r <- r + 1
        }
        
        j <- j + A
    }
    i <- i + A
}
```

输出结果矩阵MM，可以看出该块统计实现了计算块中总和计算。

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428140943.png)

## 应用实践

### 1. 背景

下图是对遥感影像经过一系列处理提取出来的石家庄地区城市与乡镇用地（城市下垫面）栅格数据。紫色区域值为8，空白区域值为NoData，分辨率为30m。现在要计算该数据再1km分辨率网格中的面积比例。即计算1km*1km网格内，城市下垫面占比。

结合要求，我们可以用到上述的块统计算法。

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428141454.png)

### 2. 实现过程（R语言）

首先将统计计算要用到的工具包导入进来，包括`raster`、`rgdal`和`tools`。

```R
library(raster) # install.package('xxx')
library(rgdal)
library(tools)
```

然后读取需要进行块统计的栅格数据，并获取其所有像元值（转换为矩阵形式）。

```
rs <- raster('./data/sjz_c8_prj.tif')
rs_data <- as.matrix(rs)
```

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428142843.png)

将上述的块统计算法进行封装，成R语言函数`block_stat`，以进行调用，其中参数M为待进行块统计的矩阵，参数W为统计块域的边长，V为统计量（应用要求中，需要对每一个统计块计算像元值等于8的像元个数，即V在其中充当一个条件量）。

```R
block_stat <- function(M, W, V){
    rows = length(M[,1])
    cols = length(M[1,])
    MM <- matrix(0, nrow = rows, ncol = cols)
    i <- 1
    while (i <= rows) {
        j <- 1
        while (j <= cols) {
            count <- 0
            r <- i
            while (r < i + W && r <= rows) {
                c <- j
                while (c < j + W && c <= cols) {
                    if(!is.na(M[r, c]) && M[r, c] == V){ 	# 结合实际要求变通
                        count <- count + 1 
                    }
                    c <- c + 1
                }
                r <- r + 1
            }
            
            r <- i
            while (r < i + W && r <= rows) {
                c <- j
                while (c < j + W && c <= cols) {
                    MM[r, c] <- count / (W * W)	 # 结合实际要求变通
                    c <- c + 1
                }
                r <- r + 1
            }
            
            j <- j + W
        }
        i <- i + W
    }
    return(MM)
}
```

最后，调用上述整理好的函数`block_stat`，生成块统计结果，并进行输出展示。

```R
rs_data <- block_stat(rs_data, 33, 8)
new_rs <- setValues(rs, rs_data)
plot(new_rs)
writeRaster(new_rs, 'result_data.tif', format = 'GTiff')
```

![img](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20200428143734.png)

## 分享

[应用源代码](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/块统计.R)

[测试源代码](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/块统计算法测试.R)