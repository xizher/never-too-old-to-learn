(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{208:function(s,t,e){"use strict";e.r(t);var a=e(6),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" Docker 常用命令")]),s._v(" "),e("p",[s._v("参考：")]),s._v(" "),e("p",[s._v("https://docs.docker.com/engine/reference/commandline")]),s._v(" "),e("h2",{attrs:{id:"一、帮助命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、帮助命令"}},[s._v("#")]),s._v(" 一、帮助命令")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker version "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker 版本信息")]),s._v("\ndocker info "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker 系统信息（详细）")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命令"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --help "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 帮助命令")]),s._v("\n")])])]),e("h2",{attrs:{id:"二、镜像命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、镜像命令"}},[s._v("#")]),s._v(" 二、镜像命令")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("docker images 查看所有镜像")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@wxz ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\nREPOSITORY    TAG       IMAGE ID       CREATED         SIZE\nhello-world   latest    bf756fb1ae65   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(".3kB\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# REPOSITORY 仓库源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TAG 标签")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IMAGE ID 标识")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CREATED 创建时间")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SIZE 大小")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("docker search 搜索镜像")])]),s._v(" "),e("li",[e("p",[s._v("docker rmi -f <镜像ID>")])])]),s._v(" "),e("h2",{attrs:{id:"三、容器命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、容器命令"}},[s._v("#")]),s._v(" 三、容器命令")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("docker run <镜像ID> 启动容器")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("-- "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名 区分")]),s._v("\n-d "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台方式运行")]),s._v("\n-it "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交互方式运行")]),s._v("\n-p "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器端口 -p 8080:8080")]),s._v("\n\t-p 主机端口:容器端口\n\t-p 容器端口\n\t容器端口\n-P "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机指定端口")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("docker ps 查看正在运行的容器")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("-a "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 历史")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("docker rm 删除容器")])]),s._v(" "),e("li",[e("p",[s._v("docker start <镜像ID> 启动容器")])]),s._v(" "),e("li",[e("p",[s._v("docker restart <镜像ID> 重启容器")])]),s._v(" "),e("li",[e("p",[s._v("docker stop <镜像ID> 停止容器")])]),s._v(" "),e("li",[e("p",[s._v("docker logs 查看日志")])]),s._v(" "),e("li",[e("p",[s._v("docker top <镜像ID> 查看容器内部进程信息")])]),s._v(" "),e("li",[e("p",[s._v("docker exec -it <容器ID> <shell Path> 进入容器（终端）")])]),s._v(" "),e("li",[e("p",[s._v("docker attach <容器ID> 进入容器")])]),s._v(" "),e("li",[e("p",[s._v("docker cp <容器ID>:<容器内路径> <主机路径>")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);