# 系统配置文件

`kenote-cli` 配置文件

## 查看当前配置文件

```bash
$ kenote config
```

## 导入自定义配置文件

配置文件支持 `json`、`yaml`

```bash
$ kenote config ./myconfig.yml
```

## 配置示例

示例 [参考](https://github.com/kenote/kenote-cli/blob/master/config.yml)
```yaml

# 模版
examples: []
```

## 模版配置选项

### name

- 类型: `string`
- 必填: `true`

显示名称

### value

- 类型: `string`
- 必填: `true`

键值；用于选择项

### repository

- 类型: `string`
- 必填: `true`

模版仓库；格式参考 `download-git-repo` 

- **Github** - `github:owner/name`
- **Gitlab** - `gitlab:owner/name`
- **Bitbucket** - `bitbucket:owner/name`

第三方仓库

- **Direct** - `direct:url`

### results

- 类型: `Object[]`
- 必填: `false`

安装完模版后显示信息；查看 [显示信息](#显示信息)

```yaml
# 示例
results:
  - name: To get started
    content:
      - npm run dev
  - name: To be build
    content:
      - npm run build
```

## 显示信息

### name

- 类型: `string`
- 必填: `true`

段落名称

### content

- 类型: `string[]`
- 必填: `false`

段落描述信息
