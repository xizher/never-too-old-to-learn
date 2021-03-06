# 数据库备份与还原的流程整理
## 一、MongoDB

### 备份

- `mongodump`

```
mongodump -h 【host:post】 -d 【数据库名】 -u 【用户名】 -p 【密码】 -o 【备份路径】
```

| **参数**   | **参数说明**           |
| ---------- | ---------------------- |
| **-h**     | 指明数据库宿主机的IP   |
| **-u**     | 指明数据库的用户名     |
| **-p**     | 指明数据库的密码       |
| **-d**     | 指明数据库的名字       |
| **-c**     | 指明collection的名字   |
| **-o**     | 指明到要导出的文件名   |
| **-q**     | 指明导出数据的过滤条件 |
| **--gzip** | 备份时压缩             |

### 还原

- `mongorestore`

```
mongorestore -h 【host:post】 -u 【用户名】 -p 【密码】 -d 【目标数据库】 【数据库备份文件路径】
```

| **参数**                     | **参数说明**                 |
| ---------------------------- | ---------------------------- |
| **-h**                       | 指明数据库宿主机的IP         |
| **-u**                       | 指明数据库的用户名           |
| **-p**                       | 指明数据库的密码             |
| **-d**                       | 指明数据库的名字             |
| **-c**                       | 指明collection的名字         |
| **-o**                       | 指明到要导出的文件名         |
| **-q**                       | 指明导出数据的过滤条件       |
| **--authenticationDatabase** | 验证数据的名称               |
| **--gzip**                   | 备份时压缩                   |
| **--drop**                   | 恢复的时候把之前的集合drop掉 |

## 二、PostgreSQL

### 备份

- `pg_dump`

```
pg_dump -h 【host】 -U 【用户名】 【数据库】 > 【备份文件路径】
pg_dump -h 【host】 -p 【端口】 -U 【用户名】 -d 【数据库】 -f 【备份文件路径】
```

备份文件的后缀是**.bak**

### 还原

- `psql`

```
psql -h 【host】 -U 【用户名】 -d 【目标数据库】 < 【备份文件路径】
```
### 删除数据库时目标数据库被锁的解决方案
``` sql
select pg_terminate_backend(pg_stat_activity.pid) from pg_stat_activity where datname = '【被锁的数据库】' and pid<>pg_backend_pid();
drop database 【被锁的数据库】;
```

## 附录

### pg_dump --help
```bash
pg_dump 把一个数据库转储为纯文本文件或者是其它格式.

用法:
  pg_dump [选项]... [数据库名字]

一般选项:
  -f, --file=FILENAME          输出文件或目录名
  -F, --format=c|d|t|p         输出文件格式 (定制, 目录, tar
                               明文 (默认值))
  -j, --jobs=NUM               执行多个并行任务进行备份转储工作
  -v, --verbose                详细模式
  -V, --version                输出版本信息，然后退出
  -Z, --compress=0-9           被压缩格式的压缩级别
  --lock-wait-timeout=TIMEOUT  在等待表锁超时后操作失败
  --no-sync                    不用等待变化安全写入磁盘
  -?, --help                   显示此帮助, 然后退出

控制输出内容选项:
  -a, --data-only              只转储数据,不包括模式
  -b, --blobs                  在转储中包括大对象
  -B, --no-blobs               排除转储中的大型对象
  -c, --clean                  在重新创建之前，先清除（删除）数据库对象
  -C, --create                 在转储中包括命令,以便创建数据库
  -E, --encoding=ENCODING      转储以ENCODING形式编码的数据
  -n, --schema=PATTERN         dump the specified schema(s) only
  -N, --exclude-schema=PATTERN do NOT dump the specified schema(s)
  -O, --no-owner               在明文格式中, 忽略恢复对象所属者
  -s, --schema-only            只转储模式, 不包括数据
  -S, --superuser=NAME         在明文格式中使用指定的超级用户名
  -t, --table=PATTERN          dump the specified table(s) only
  -T, --exclude-table=PATTERN  do NOT dump the specified table(s)
  -x, --no-privileges          不要转储权限 (grant/revoke)
  --binary-upgrade             只能由升级工具使用
  --column-inserts             以带有列名的INSERT命令形式转储数据
  --disable-dollar-quoting     取消美元 (符号) 引号, 使用 SQL 标准引号
  --disable-triggers           在只恢复数据的过程中禁用触发器
  --enable-row-security        启用行安全性（只转储用户能够访问的内容）
  --exclude-table-data=PATTERN do NOT dump data for the specified table(s)
  --extra-float-digits=NUM     覆盖extra_float_digits的默认设置
  --if-exists                  当删除对象时使用IF EXISTS
  --inserts                    以INSERT命令，而不是COPY命令的形式转储数据
  --load-via-partition-root    通过根表加载分区
  --no-comments                不转储注释
  --no-publications            不转储发布
  --no-security-labels         不转储安全标签的分配
  --no-subscriptions           不转储订阅
  --no-synchronized-snapshots  在并行工作集中不使用同步快照
  --no-tablespaces             不转储表空间分配信息
  --no-unlogged-table-data     不转储没有日志的表数据
  --on-conflict-do-nothing     将ON CONFLICT DO NOTHING添加到INSERT命令
  --quote-all-identifiers      所有标识符加引号，即使不是关键字
  --rows-per-insert=NROWS      每个插入的行数；意味着--inserts
  --section=SECTION            备份命名的节 (数据前, 数据, 及 数据后)
  --serializable-deferrable    等到备份可以无异常运行
  --snapshot=SNAPSHOT          为转储使用给定的快照
  --strict-names               要求每个表和(或)schema包括模式以匹配至少一个实体
  --use-set-session-authorization
                               使用 SESSION AUTHORIZATION 命令代替
                               ALTER OWNER 命令来设置所有权

联接选项:
  -d, --dbname=DBNAME      对数据库 DBNAME备份
  -h, --host=主机名        数据库服务器的主机名或套接字目录
  -p, --port=端口号        数据库服务器的端口号
  -U, --username=名字      以指定的数据库用户联接
  -w, --no-password        永远不提示输入口令
  -W, --password           强制口令提示 (自动)
  --role=ROLENAME          在转储前运行SET ROLE

如果没有提供数据库名字, 那么使用 PGDATABASE 环境变量
的数值.

报告错误至 <pgsql-bugs@lists.postgresql.org>.
```

