# CSS flex 布局

## 0.1 flex概述

- `display: flex`：**弹性布局**，为盒状模型提供<u>灵活性</u>
- 设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效

## 0.2 与flex相关的属性

- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

### 0.2.0 flex-direction -> 决定主轴方向

```css
.sth {
	flex-direction: row; // 自左向右、默认
	// flex-direction: row-reverse; // 自右向左
	// flex-direction: column; // 从上往下
	// flex-direction: column-reverse; // 从下往上
}
```

### 0.2.1 flex-wrap -> 指示换行方式

```css
.sth {
	flex-warp: nowrap; // 不换行，默认
	// flex-warp: wrap; // 换行，第一行在上方
	// flex-warp: wrap-reverse; // 换行，第一行在下方
}
```

### 0.2.2 flex-flow -> 为flex-direction和flex-wrap的简写

```css
.sth {
	flex-flow: row nowrap; // 默认
	// ...
}
```

### 0.2.3 justify-content -> 指示盒子在主轴上的对齐方式

```css
.sth {
	justify-content: flex-start; // 向开始位置对齐，默认
	// justify-content: flex-end; // 项结束位置对齐
	// justify-content: center; // 居中
	// justify-content: space-between; // 两端对齐，盒子间间隔相等
    
    // 类似space-between，但同时开始和结束位置同样有间隔
	// justify-content: space-around;
}
```

### 0.2.4 align-items -> 指示盒子在与交叉轴上的布局

```css
.sth {
	align-items: flex-start; // 交叉轴的起点对齐
	// align-items: flex-end; // 交叉轴的终点对齐
	// align-items: center; // 交叉轴的中点对齐
	// align-items: baseline; // 项目的第一行文字的基线对齐
	// align-items: stretch; // 如果项目未设置高度或设为auto，将占满整个容器的高度，默认
}