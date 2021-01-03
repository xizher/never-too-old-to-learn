# 在Docker中配置Nginx

### 1. 下载镜像

```shell
[root@wxz ~]# docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
6ec7b7d162b2: Pull complete
cb420a90068e: Pull complete
2766c0bf2b07: Pull complete
e05167b6a99d: Pull complete
70ac9d795e79: Pull complete
Digest: sha256:4cf620a5c81390ee209398ecc18e5fb9dd0f5155cd82adcbae532fec94006fb9
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
[root@wxz ~]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    ae2feff98a0c   2 weeks ago   133MB
```

### 2. 运行测试

```shell
[root@wxz ~]# docker run -d --name nginx001 -p 8080:80 nginx
ac1dcc40753b8a6998e145630e396a3b04a91731b1ca1563db8cf1c11159fdd6
[root@wxz ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
ac1dcc40753b   nginx     "/docker-entrypoint.…"   4 seconds ago   Up 3 seconds   0.0.0.0:8080->80/tcp   nginx001
[root@wxz ~]# curl localhost:8080
<!DOCTYPE html>
<html>
 ......
</html>
```

### 3. （测试）进入容器终端

```shell
[root@wxz ~]# docker exec -it nginx001 /bin/bash
root@ac1dcc40753b:/# whereis nginx
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
root@ac1dcc40753b:/# cd /etc/nginx/
root@ac1dcc40753b:/etc/nginx# ls
conf.d  fastcgi_params  koi-utf  koi-win  mime.types  modules  nginx.conf  scgi_params  uwsgi_params  win-utf
```

### 4. 路径映射

