# git分支规范

## 分支结构

```text
<类型>-<功能>-<人员>-<来源>

例：feat-comment_api-miao-develop
例：bugfix-comment_api-miao-release_v0.2.0
特殊：release-v0.2.0
```

## 分支规范

- main\[唯一\]\[tag\]：主分支，用于版本持续发布，必须是随时可使用的
- docs\[唯一\]：文档分支，用于展示项目文档
- develop\[唯一\]：开发分支，即日常迭代使用的开发分支，用于日常开发持续集成
- feature：特性分支，用于日常开发时切出分支进行单功能开发
- bugfix：故障修补分支，通常用于修复故障
- release\[tag\]：发布分支，即发布次版本时使用的分支，用于大版本发布
- hotfix：热修补分支，用于产品发布后修复缺陷

## 检出分支

![分支发布图示](/png/git-branches.png)

### 组员操作

- 修复故障时，基于`develop`分支创建`bugfix`故障修补分支，提交代码并测试完成后后，合并至`develop`分支并删除`bugfix`分支。
- 日常开发时，基于`develop`分支创建`feature`特性分支，提交代码并测试完成后后，合并至`develop`分支并删除`feature`分支。

### 管理员操作

- 发布次版本时，基于`develop`分支创建`release`发布分支，提交代码并测试完成后后，合并至`main`分支并删除`release`分支，次版本号加1。

### 管理授权操作

- 发布版本前发现bug时，基于`release`分支创建`bugfix`热修补分支，提交代码并测试完成后后，合并至`release`分支与`develop`分支并删除`bugfix`分支。
- 发布版本后发现bug时，基于`main`分支创建`hotfix`热修补分支，提交代码并测试完成后后，合并至`main`分支与`develop`分支并删除`hotfix`分支，修订号加1。
