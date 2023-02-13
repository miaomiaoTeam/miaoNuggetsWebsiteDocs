# 可关注的标签

## 列表 <Badge type="info" text="GET" /> <Badge type="tip" text="已完成" />

- 描述：获取所有顶部选项卡
- 接口：`/api/label/follow/list`
- 认证：<Badge type="tip" text="x" />
- 权限：<Badge type="tip" text="none" />
- 传入参数
  - params: 无
  - query: 无
- 响应值
  - 正常响应<Badge type="tip" text="0" /> <Badge type="warning" text="Array" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | label | string | <Badge type="tip" text="√" /> | 标签名 |
    | alias | string | <Badge type="tip" text="√" /> | 别名(用于检索) |
    | icon | string | <Badge type="tip" text="√" /> | 图标 |
    | follow | number | <Badge type="tip" text="√" /> | 关注数 |
    | article | number | <Badge type="tip" text="√" /> | 文章数 |
    | is_show | boolean | <Badge type="tip" text="√" /> | 是否在全部标签列表显示 |
    | id | number | <Badge type="tip" text="√" /> | 序号 |
    | create_time | Date | <Badge type="tip" text="√" /> | 创建时间 |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |

## 编辑 <Badge type="info" text="POST" /> <Badge type="tip" text="已完成" />

- 描述：编辑指定选项卡信息
- 接口：`/api/label/follow/:id`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params:
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: |:--- |
    | id | number | <Badge type="tip" text="√" /> |  | 序号 |
  - body: <Badge type="warning" text="至少一项" />
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | label | string | <Badge type="danger" text="x" /> |  | 标签名 |
    | alias | string | <Badge type="danger" text="x" /> |  | 别名(用于检索) |
    | icon | string | <Badge type="danger" text="x" /> |  | 图标 |
    | is_show | boolean | <Badge type="danger" text="x" /> |  | 是否在全部标签列表显示 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |

## 新增 <Badge type="info" text="PUT" /> <Badge type="tip" text="已完成" />

- 描述：新增选项卡
- 接口：`/api/label/follow/new`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params: 无
  - body: <Badge type="warning" text="至少一项" />
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | label | string | <Badge type="tip" text="√" /> |  | 标签名 |
    | alias | string | <Badge type="tip" text="√" /> |  | 别名(用于检索) |
    | icon | string | <Badge type="tip" text="√" /> |  | 图标 |
    | is_show | boolean | <Badge type="danger" text="x" /> | `true` | 是否在全部标签列表显示 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | id | number | <Badge type="tip" text="√" /> | 序号 |
    | create_time | Date | <Badge type="tip" text="√" /> | 创建时间 |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |

## 移除 <Badge type="info" text="DELETE" /> <Badge type="tip" text="已完成" />

- 描述：移除指定选项卡
- 接口：`/api/label/follow/remove`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params: 无
  - body:
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | id | number<Badge type="warning" text="MaybeArray" /> | <Badge type="tip" text="√" /> |  | 要移除的标签列表 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |
