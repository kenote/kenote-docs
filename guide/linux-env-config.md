# 配置 Linux 环境

`Git` + `Nvm` + `Node.js` + `GraphicsMagick`

## 安装 Git

`Centos` 下安装

```bash
# 移除老版本
$ yum remove git*

# 加载第三方仓库
$ yum install -y https://centos7.iuscommunity.org/ius-release.rpm
# 安装 Git
$ yum install -y git2u-all
```

`Ubuntu`下安装

```bash
# 移除老版本
$ yum remove git*

# 添加GIT的官方PPA
$ add-apt-repository ppa:git-core/ppa
# 更新本地的软件包索引
$ apt-get update
# 安装 Git
$ apt-get install git
```

验证安装

```bash
$ git --version
```

## 多版本管理器

首先安装 `Node.js` 多版本管理器

```bash
cd ~ && curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

切换国内镜像

```bash
$ export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node/
```

## 安装 Node.js

通过多版本管理器安装

```bash
# 查看可安装的稳定版本
$ nvm ls-remote --lts

# 安装指定版本
$ nvm install <version-number>

# 升级版本并安装原有全局模块
$ nvm install <new-version-number> --reinstall-packages-from=<old-version-number>

# 设定系统默认版本
$ nvm alias default <version-number>
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

```bash
# Centos 下安装
$ yum install -y GraphicsMagick

# Ubuntu 下安装
$ apt-get install graphicsmagick

# 看到显示 GraphicsMagick 安装信息就OK了
$ gm version
```