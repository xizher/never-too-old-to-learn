# 在Centos中安装和配置Docker

### 0. 参考

https://docs.docker.com/engine/install/centos/

### 1. 卸载Docker旧版本

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 2. 安装前置包

```bash
yum install -y yum-utils
```

### 3. 设置镜像仓库

```shell
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 国内镜像
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 4. 更新yum软件包索引

```shell
yum makecache fast
```

### 5. 安装Docker引擎

```shell
sudo yum install docker-ce docker-ce-cli containerd.io
```

### 6. 启动Docker

```shell
sudo systemctl start docker
```

未启动前执行`docker version`结果：

```shell
Client: Docker Engine - Community
 Version:           20.10.1
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        831ebea
 Built:             Tue Dec 15 04:37:17 2020
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

启动后执行`docker version`结果：

```
Client: Docker Engine - Community
 Version:           20.10.1
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        831ebea
 Built:             Tue Dec 15 04:37:17 2020
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.1
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       f001486
  Built:            Tue Dec 15 04:35:42 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.3
  GitCommit:        269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc:
  Version:          1.0.0-rc92
  GitCommit:        ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### 6. 验证Docker安装结果

```shell
docker run hello-world
```

查看Docker 镜像：

```
docker images
```

### 7. （备）卸载Docker

```shell
yum remove docker-ce docker-ce-cli containerd.io # 卸载依赖
rm -rf /var/lib/docker # 删除资源 【/var/lib/docker】为docker的默认工作路径
```

### 8. 配置镜像加速

```
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://01sbi4j3.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload

sudo systemctl restart docker
```

### 9. 图形化管理工具

```shell
docker run -d -p 8088:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

### 10. 数据卷



