# 配置 Windows 环境

`Git` + `Cmder` + `Nvm` + `Node.js` + `GraphicsMagick`

## 安装 Git

去官网下载：[Git](https://git-scm.com/download/win)

## 安装 Cmder 命令行工具

去官网下载：[Cmder](https://cmder.net/)

## 多版本管理器

下载安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

切换国内镜像

```bash
$ nvm node_mirror https://npm.taobao.org/mirrors/node/
$ nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

## 安装 Node.js

通过多版本管理器安装

```bash
# 查看可安装的版本
$ nvm list available

# 安装指定版本
$ nvm install <version-number>

# 设定系统默认版本
$ nvm use <version-number>
```

设置国内源

```bash
$ npm set registry https://registry.npm.taobao.org  # npm 镜像源
$ npm set disturl https://npm.taobao.org/dist  # node-gyp 编译依赖的 node 源码镜像
# 常用淘宝镜像源
$ npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass  # node-sass 二进制包镜像
$ npm set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs  # phantomjs 二进制包镜像
$ npm set electron_mirror https://npm.taobao.org/mirrors/electron  # electron 二进制包镜像

$ npm cache clean # 清空缓存
```

安装源管理工具

```bash
$ npm install -g nrm

# 查看可用源
$ nrm ls

# 切换源
$ nrm use <registry-name>
```

安装 `Yarn` 包管理器

```bash
$ npm install -g yarn

# 设置源
$ yarn config set registry https://registry.npm.taobao.org
```

## 安装 GraphicsMagick

`GraphicsMagick`号称图像处理领域的瑞士军刀。 短小精悍的代码却提供了一个鲁棒、高效的工具和库集合，来处理图像的读取、写入和操作，支持超过88种图像格式，包括重要的`DPX`、`GIF`、`JPEG`、`JPEG-2000`、`PNG`、`PDF`、`PNM`和`TIFF`。

[下载安装](http://www.graphicsmagick.org/download.html#download-sites)

进入命令行

```bash
# 看到显示 GraphicsMagick 安装信息就OK了
$ gm version
```