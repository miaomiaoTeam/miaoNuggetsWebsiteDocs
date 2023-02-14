# 用户

## 登录 <Badge type="info" text="POST" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/api/auth/user/signin`
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

## 刷新Token <Badge type="info" text="GET" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/api/auth/user/refresh`
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
    | refresh | <MTypesToken /> | <Badge type="tip" text="√" /> | refresh token |

## 获取信息 <Badge type="info" text="GET" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/api/auth/user/info`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="none" />
- 传入参数
  - params: 无
  - query: 无
- 响应值
  - 正常响应<Badge type="tip" text="0" />:
    | 参数 | 类型 | 必需 | 说明 |
    | :--: | :--: | :--: | :--- |
    | username | string | <Badge type="tip" text="√" /> | 账号 |
    | nickname | string | <Badge type="tip" text="√" /> | 昵称 |
    | role | `none`/`author` | <Badge type="tip" text="√" /> | 角色 |
    | level | number | <Badge type="tip" text="√" /> | 等级 |
    | exp | number | <Badge type="tip" text="√" /> | 经验 |
    | be_followed | number | <Badge type="tip" text="√" /> | 被关注数 |
    | follow_user | <MTYPERecordTime /> | <Badge type="tip" text="√" /> | 关注(用户id) |
    | follow_label | <MTYPERecordTime /> | <Badge type="tip" text="√" /> | 关注(标签id) |
    | like_article | <MTYPERecordTime /> | <Badge type="tip" text="√" /> | 点赞(文章id) |
    | collect_article | <MTYPERecordTime /> | <Badge type="tip" text="√" /> | 收藏(文章id) |
    | occupation | string | <Badge type="danger" text="x" /> | 职业 |
    | identity | string | <Badge type="danger" text="x" /> | 身份 |
    | introduce | string | <Badge type="danger" text="x" /> | 介绍 |
    | homepage | string | <Badge type="danger" text="x" /> | 主页 |
    | github | string | <Badge type="danger" text="x" /> | GitHub |
    | id | number | <Badge type="tip" text="√" /> | 序号 |
    | create_time | Date | <Badge type="tip" text="√" /> | 创建时间 |
    | update_time | Date | <Badge type="tip" text="√" /> | 修订时间 |

## 关注 <Badge type="info" text="POST" /> <Badge type="warning" text="开发中" />

- 描述：获取所有顶部选项卡
- 接口：`/apis/auth/user/follow`
- 认证：<Badge type="danger" text="√" />
- 权限：<Badge type="tip" text="none" />
- 传入参数
  - params: 无
  - body:
    | 参数 | 类型 | 必需 | 默认值 | 说明 |
    | :--: | :--: | :--: | :--: | :--- |
    | id | number | <Badge type="tip" text="√" /> |  | 要关注的用户id |
    | follow | boolean | <Badge type="tip" text="√" /> |  | 是关注还是取消 |
- 响应值
  - 正常响应<Badge type="tip" text="0" />: 无
