# 顶部选项卡

## 列表 <Badge type="info" text="GET" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/api/label/tabs/list`
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
    | route | string | <Badge type="tip" text="√" /> | 路由 |
    | link | string | <Badge type="danger" text="x" /> | 外置链接 |
    | badge | string | <Badge type="danger" text="x" /> | 右上角红色徽章 |
    | show | boolean | <Badge type="tip" text="√" /> | 是否在顶部选项卡列表显示 |
    | menu | boolean | <Badge type="tip" text="√" /> | 是否在手机菜单列表显示 |
    | id | number | <Badge type="tip" text="√" /> | 序号 |
    | reviser | string | <Badge type="tip" text="√" /> | 修订者 |
    | lasttime | Date | <Badge type="tip" text="√" /> | 修订日期 |

## 编辑 <Badge type="info" text="POST" /> <Badge type="warning" text="开发中" />

- 描述：编辑指定选项卡信息
- 接口：`/api/label/tabs/:id`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params:
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: |:--- |
    | id | number | <Badge type="tip" text="√" /> |  |序号 |
  - body: <Badge type="warning" text="至少一项" />
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | label | string | <Badge type="danger" text="x" /> |  | 标签名 |
    | route | string | <Badge type="danger" text="x" /> |  | 路由 |
    | link | string | <Badge type="danger" text="x" /> |  | 外置链接 |
    | badge | string | <Badge type="danger" text="x" /> |  | 右上角红色徽章 |
    | show | boolean | <Badge type="danger" text="x" /> |  | 是否在顶部选项卡列表显示 |
    | menu | boolean | <Badge type="danger" text="x" /> |  | 是否在手机菜单列表显示 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | lasttime | Date | <Badge type="tip" text="√" /> | 修订日期 |

## 新增 <Badge type="info" text="PUT" /> <Badge type="warning" text="开发中" />

- 描述：新增选项卡
- 接口：`/api/label/tabs/new`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params: 无
  - body: <Badge type="warning" text="至少一项" />
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | label | string | <Badge type="tip" text="√" /> |  | 标签名 |
    | route | string | <Badge type="tip" text="√" /> |  | 路由 |
    | link | string | <Badge type="danger" text="x" /> | `''` | 外置链接 |
    | badge | string | <Badge type="danger" text="x" /> | `''` | 右上角红色徽章 |
    | show | boolean | <Badge type="danger" text="x" /> | `true` | 是否在顶部选项卡列表显示 |
    | menu | boolean | <Badge type="danger" text="x" /> | `true` | 是否在手机菜单列表显示 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | lasttime | Date | <Badge type="tip" text="√" /> | 修订日期 |

## 移除 <Badge type="info" text="DELETE" /> <Badge type="warning" text="开发中" />

- 描述：移除指定选项卡
- 接口：`/api/label/tabs/remove`
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
    | lasttime | Date | <Badge type="tip" text="√" /> | 修订日期 |
