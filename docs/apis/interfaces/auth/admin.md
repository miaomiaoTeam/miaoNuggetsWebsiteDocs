# 管理员

## 登录 <Badge type="info" text="POST" /> <Badge type="tip" text="已完成" />

- 描述：登录到管理系统
- 接口：`/api/auth/admin/signin`
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
    | access | <MTypesToken /> | <Badge type="tip" text="√" /> | access token |
    | refresh | <MTypesToken /> | <Badge type="tip" text="√" /> | refresh token |
  - 用户名或密码错误<Badge type="tip" text="12000" />: 无

## 刷新Token <Badge type="info" text="GET" /> <Badge type="tip" text="已完成" />

- 描述：获取所有顶部选项卡
- 接口：`/api/auth/admin/refresh`
- 认证：<Badge type="tip" text="x" />
- 权限：<Badge type="tip" text="none" />
- 传入参数
  - params: 无
  - query: 无
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | access | <MTypesToken /> | <Badge type="tip" text="√" /> | access token |
    | refresh | <MTypesToken /> | <Badge type="danger" text="x" /> | refresh token |

## 获取信息 <Badge type="info" text="GET" /> <Badge type="tip" text="已完成" />

- 描述：获取所有顶部选项卡
- 接口：`/api/auth/admin/info`
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
    | create_time | Date | <Badge type="tip" text="√" /> | 创建时间 |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |
