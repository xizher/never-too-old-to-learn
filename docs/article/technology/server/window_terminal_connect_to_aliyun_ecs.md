# Windows Terminal 远程 连接 阿里云ECS

## 一、安装

### 1. Windows Terminal

from 微软应用商城

### 2. OpenSSH客户端

应用和功能里的`可选功能`

## 二、配置

1. in阿里云控制台的*网络与安全*模块下**创建SSH密钥**对，并**绑定至ECS实例**

2. 将密钥文件下载至本地 C:/Users/<用户名>/.ssh/<密钥名>.pem

3. 设置Windows Terminal的setting.json文件

   ```json
   {
     "guid": "{<guid>}",
     "hidden": false,
     "name": "ALiYun-Centos",
     "commandline": "ssh -i C:/Users/<用户名>/.ssh/<密钥名>.pem <连接用户>@<IP地址> -p<连接端口>",
     "closeOnExit" : true,
   }
   ```