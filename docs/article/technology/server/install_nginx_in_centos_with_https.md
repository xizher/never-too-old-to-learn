# 在Centos中安装Nginx并配置https

```shell
# 更新源
sudo yum install -y epel-release
sudo yum -y update

# 安装
sudo yum install -y nginx
```

nginx相关目录

-  `/usr/share/nginx/html`默认的网站目录
- `/etc/nginx/nginx.conf`默认配置文件
- `/etc/nginx/conf.d/`自定义配置文件目录

### 启动 Nginx

```shell
systemctl start nginx # 启动 Nginx
systemctl stop nginx # 停止Nginx
systemctl restart nginx # 重启Nginx
systemctl status nginx # 查看Nginx状态
systemctl enable nginx # 启用开机启动Nginx
systemctl disable nginx # 禁用开机启动Nginx
```

### 配置SSL

参考：https://help.aliyun.com/document_detail/98728.html?spm=5176.14113079.0.dexternal.ab4656a7Wml2hW

```
server {
    # ...
    server_name  wuxizhe.fun;
    rewrite ^(.*)$ https://$host$1 permanent; #将所有HTTP请求通过rewrite指令重定向到HTTPS。
    # ...
}
server {
    listen 443 ssl;
    #配置HTTPS的默认访问端口为443。
    #如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。
    #如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。
    server_name wuxizhe.fun; #需要将yourdomain.com替换成证书绑定的域名。
    root html;
    index index.html index.htm;
    ssl_certificate cert/3429782_www.wuxizhe.fun.pem;  #需要将cert-file-name.pem替换成已上传的证书文件的名称。
    ssl_certificate_key cert/3429782_www.wuxizhe.fun.key; #需要将cert-file-name.key替换成已上传的证书密钥文件的名称。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    #表示使用的加密套件的类型。
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #表示使用的TLS协议的类型。
    ssl_prefer_server_ciphers on;
    location / {
        root html;  #站点目录。
        index index.html index.htm;
    }
}
```

