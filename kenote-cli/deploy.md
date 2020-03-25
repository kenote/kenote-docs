# 部署到服务器

将本地文件通过 `ftp` / `sftp` 部署到服务器上

```bash
# 使用默认配置文件
$ kenote deploy

# 使用指定配置文件
$ kenote deploy ./mydeploy.yml
```

## 创建部署配置文件

配置文件支持 `js`, `json`, `yaml`； 默认文件名为 `deploy.config.(js|json|ya?ml)`

`deploy.config.js`
```js
// deploy.config.js

module.exports = {
  // 项目选项
  projects: [
    ...
  ]
}
```

`deploy.config.json`
```json
// deploy.config.json
{
  "projects": [
    // ...
  ]
}
```

`deploy.config.yml`
```yaml
---
# deploy.config.yml

# 项目选项
projects:
  # ...
```

## 项目配置选项

### name

- 类型: `string`
- 必填: `true`

项目的显示名称

### value

- 类型: `string | number`
- 必填: `true`

项目的键值；用于选择项

### type

- 类型: `string`
- 选项: `ftp | sftp`
- 必填: `true`

设置服务器传送类型；`ftp | sftp`

### connect

- 类型: `Object`
- 必填: `true`

设置服务器连接选项；参考：  [连接选项](#连接选项)

### deployTo

- 类型: `string`
- 必填: `true`

服务器上目标目录

### rootDir

- 类型: `string`
- 默认值: `配置文件所在目录`
- 必填: `false`

本地需要上传的主目录

### ignre

- 类型: `string[]`
- 必填: `false`

需要忽略的文件；参考 `glob.IOptions`

### beforeScripts

- 类型: `string[]`
- 必填: `false`

上传服务器前本地运行的脚本；比如 `npm run build`

### remoteCommand

- 类型: `string[]`
- 必填: `false`

上传服务器后远端服务器需要执行的脚本；如 `pm2 restart myapp`。`type === 'sftp'`才有效

### 

## 连接选项

### host

- 类型: `string`
- 必填: `true`

服务器地址；`域名/IP`

### port

- 类型: `number`
- 默认值: `21 | 22`
- 必填: `false`

服务器端口号；`type === 'ftp'`默认值为`21`，`type === 'sftp'`默认值为`22`

### username

- 类型: `string`
- 必填: `true`

`ftp | sftp` 用户名

### password

- 类型: `string`
- 必填: `false`

`ftp | sftp` 密码

### privateKey

- 类型: `string`
- 必填: `false`

`sftp` 密钥；`type === 'sftp'`时，如果可能可使用密钥登录