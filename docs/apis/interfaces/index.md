# 模板

## 接口名称 <Badge type="info" text="POST" /> <Badge type="warning" text="开发中" />

- 描述：接口具体描述
- 接口：`/api/article/comment`
- 认证：<Badge type="tip" text="√" /> / <Badge type="danger" text="x" />

### 传入参数

- params: 无
- body:
  | 参数 | 类型 | 必要性 | 说明 |
  | :--: | :--: | :--: | :--- |
  | article-id | int | <Badge type="tip" text="√" /> | 文章id |
  | comment-id | int | <Badge type="danger" text="x" /> | 评论id |
  | comment | varchar(50) | <Badge type="tip" text="√" /> | 评论内容 |

### 响应值

- 正常响应[0]: 无

- 评论禁止[20001]: 无

- 评论受限[30001]:
  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | prohibit_reason | string | 评论受限原因 |
  | relieve_time | Date | 解除限制时间 |
