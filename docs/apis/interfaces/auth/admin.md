# 管理员

## 登录 <Badge type="info" text="POST" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/apis/interfaces/auth/admin`
- 认证：<Badge type="tip" text="x" />
- 权限：<Badge type="tip" text="none" />
- 传入参数
  - params: 无
  - body:
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | username | string | <Badge type="tip" text="√" /> |  | 账号 |
    | password | string | <Badge type="tip" text="√" /> |  | 密码 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | access | <MTypesToken /> | <Badge type="tip" text="√" /> | 账号 |
    | refresh | <MTypesToken /> | <Badge type="tip" text="√" /> | 昵称 |

## 获取信息 <Badge type="info" text="GET" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/apis/interfaces/auth/admin`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params: 无
  - query: 无
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | username | string | <Badge type="tip" text="√" /> | 账号 |
    | nickname | string | <Badge type="tip" text="√" /> | 昵称 |
    | role | `admin` | <Badge type="tip" text="√" /> | 角色 |
    | id | number | <Badge type="tip" text="√" /> | 序号 |
    | createtime | Date | <Badge type="tip" text="√" /> | 创建日期 |

## 登出 <Badge type="info" text="HEAD" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/apis/interfaces/auth/admin`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="admin" />
- 传入参数
  - params: 无
  - query: 无
- 响应值
  - 正常响应<Badge type="tip" text="0" />: 无
