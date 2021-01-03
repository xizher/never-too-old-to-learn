# Docker 常用命令

参考：

https://docs.docker.com/engine/reference/commandline

## 一、帮助命令

```shell
docker version # Docker 版本信息
docker info # Docker 系统信息（详细）
docker <命令> --help # 帮助命令
```

## 二、镜像命令

- docker images 查看所有镜像

  ```shell
  [root@wxz ~]# docker images
  REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
  hello-world   latest    bf756fb1ae65   12 months ago   13.3kB
  
  # REPOSITORY 仓库源
  # TAG 标签
  # IMAGE ID 标识
  # CREATED 创建时间
  # SIZE 大小
  ```

- docker search 搜索镜像

- docker rmi -f <镜像ID>

## 三、容器命令

- docker run <镜像ID> 启动容器

  ```shell
  -- name="" # 容器名 区分
  -d # 后台方式运行
  -it # 交互方式运行
  -p # 指定容器端口 -p 8080:8080
  	-p 主机端口:容器端口
  	-p 容器端口
  	容器端口
  -P # 随机指定端口
  ```

- docker ps 查看正在运行的容器

  ```shell
  -a # 历史
  ```

- docker rm 删除容器
- docker start <镜像ID> 启动容器
- docker restart <镜像ID> 重启容器
- docker stop <镜像ID> 停止容器
- docker logs 查看日志
- docker top <镜像ID> 查看容器内部进程信息
- docker exec -it <容器ID> \<shell Path\> 进入容器（终端）
- docker attach <容器ID> 进入容器
- docker cp <容器ID>:<容器内路径> <主机路径>



