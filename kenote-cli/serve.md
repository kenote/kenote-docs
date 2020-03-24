# 简易HTTP服务

将一个本地文件夹作为`http`服务启动

```bash
# 将`./dist`作为http服务；默认端口号：5055
$ kenote http ./dist

  App running at:
  - Local:   http://localhost:5055
  - Network: http://192.168.1.126:5055

# 将`./dist`作为http服务；指定端口号：3000
$ kenote http ./dist -p 3000

  App running at:
  - Local:   http://localhost:3000
  - Network: http://192.168.1.126:3000
```