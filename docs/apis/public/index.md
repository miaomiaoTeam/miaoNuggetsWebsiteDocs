# 服务器响应参数

## 正常响应

  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | code | number | 业务码 |
  | message | string | 业务信息 |
  | data | object | 响应数据 |

## 令牌检测不通过

  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | url | string | 请求的接口 |
  | statusCode | `401` | 状态码 |
  | statusMessage | `'令牌检测不通过'` | 状态信息 |
  | message | `'Error'` | 错误信息 |
  | stack | HtmlString | 错误堆栈 |

## 未找到接口

  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | url | string | 请求的接口 |
  | statusCode | `404` | 状态码 |
  | statusMessage | `'Page not found: ${url}'` | 状态信息 |
  | message | `'Page not found: ${url}'` | 错误信息 |
  | stack | `''` | 错误堆栈 |

## 请求不被允许

  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | url | string | 请求的接口 |
  | statusCode | `405` | 状态码 |
  | statusMessage | `'HTTP method is not allowed.'` | 状态信息 |
  | message | `'HTTP method is not allowed.'` | 错误信息 |
  | stack | HtmlString | 错误堆栈 |

## 服务器错误

  | 参数 | 类型 | 说明 |
  | :--: | :--: | :--- |
  | url | string | 请求的接口 |
  | statusCode | `500` | 状态码 |
  | statusMessage | `''` | 状态信息 |
  | message | string | 错误信息 |
  | stack | HtmlString | 错误堆栈 |
