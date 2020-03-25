# 配置 Mac 环境

`iTerm2` + `Oh-My-Zsh` + `Homebrew` + `Nvm` + `Node.js` + `GraphicsMagick`

## 安装 iTerm2 替换系统自带终端

可以直接去官网下载：[iTerm2](https://www.iterm2.com/)

## 安装 Oh-My-Zsh

```bash
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 修改系统默认为 zsh
$ chsh -s /bin/zsh
```

## 安装 Homebrew

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

切换国内镜像, `change_brew.sh`

```bash
#!/bin/bash

# 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# 替换homebrew-cask.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

# 应用生效
brew update
# 替换homebrew-bottles:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

还原默认, `restore_brew.sh`

```bash
#!/bin/bash

# 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

# 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git

# 替换homebrew-cask.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask"
git remote set-url origin https://github.com/Homebrew/homebrew-cask.git

# 应用生效
brew update
```

执行完 `restore_brew.sh` 文件后，将 `~/.bash_profile` 文件中的 `HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'` 内容删除，并执行 `source ~/.bash_profile`

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
$ brew install GraphicsMagick
```

由于 `zsh` 下 `git` 别名会产生冲突，需要修改 `~/.oh-my-zsh/plugins/git/git.plugin.zsh` 文件

```bash
# 找到下面这一行将其注释掉
alias gm='git merge'
```

返回命令行

```bash
# 看到显示 GraphicsMagick 安装信息就OK了
$ gm version
```