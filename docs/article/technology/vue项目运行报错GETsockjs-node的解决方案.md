# vue项目运行报错GETsockjs-node的解决方案

[[TOC]]

## 报错情况

![](https://wuxizheing.oss-cn-beijing.aliyuncs.com/images/20201001112558.png)

## 原因
> sockjs-node是一个JavaScript库，提供跨浏览器JavaScript的API，创建了一个低延迟、全双工的浏览器和web服务器之间通信通道。在项目运行以后，network会一直调用这个接口。如果没有使用，那么就一直会报这个异常。

## 解决
目录至<u>node_modules/sockjs-client/dist/sockjs.js</u>并导航至行号**1605**
```js
try {
  // self.xhr.send(payload); // <= 注释
} catch (e) {
  self.emit('finish', 0, '');
  self._cleanup(false);
}
```