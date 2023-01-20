# 模板

## 评论发送

- 描述：向指定文章下发送评论
- 接口：[`/api/article/comment`](/server/api/article/test.get.ts)
- 方法：`POST`
- 认证：`√`

### 传入参数

- params: 无
- query: 无
- body:
  | 参数 | 类型 | 必要性 | 说明 |
  | :--: | :--: | :--: | :--- |
  | article-id | int | `√` | 文章id |
  | comment-id | int | `×` | 评论id |
  | comment | char(50) | `√` | 评论内容 |

### 响应值

- 正常响应[0]:
  无

- 评论禁止[20001]:
  无

- 评论受限[30001]:
  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | prohibit_reason | char(20) | 评论受限原因 |
  | relieve_time | date | 解除限制时间 |
