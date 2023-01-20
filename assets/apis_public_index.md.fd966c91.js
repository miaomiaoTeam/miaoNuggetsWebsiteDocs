import{_ as t,c as e,o as l,a as d}from"./app.4b2a50e9.js";const f=JSON.parse('{"title":"服务器响应参数","description":"","frontmatter":{},"headers":[{"level":2,"title":"正常响应","slug":"正常响应","link":"#正常响应","children":[]},{"level":2,"title":"令牌检测不通过","slug":"令牌检测不通过","link":"#令牌检测不通过","children":[]},{"level":2,"title":"未找到接口","slug":"未找到接口","link":"#未找到接口","children":[]},{"level":2,"title":"请求不被允许","slug":"请求不被允许","link":"#请求不被允许","children":[]},{"level":2,"title":"服务器错误","slug":"服务器错误","link":"#服务器错误","children":[]}],"relativePath":"apis/public/index.md","lastUpdated":1674221253000}'),a={name:"apis/public/index.md"},n=d('<h1 id="服务器响应参数" tabindex="-1">服务器响应参数 <a class="header-anchor" href="#服务器响应参数" aria-hidden="true">#</a></h1><h2 id="正常响应" tabindex="-1">正常响应 <a class="header-anchor" href="#正常响应" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">code</td><td style="text-align:center;">number</td><td style="text-align:left;">业务码</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;">string</td><td style="text-align:left;">业务信息</td></tr><tr><td style="text-align:center;">data</td><td style="text-align:center;">object</td><td style="text-align:left;">响应数据</td></tr></tbody></table><h2 id="令牌检测不通过" tabindex="-1">令牌检测不通过 <a class="header-anchor" href="#令牌检测不通过" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">url</td><td style="text-align:center;">string</td><td style="text-align:left;">请求的接口</td></tr><tr><td style="text-align:center;">statusCode</td><td style="text-align:center;"><code>401</code></td><td style="text-align:left;">状态码</td></tr><tr><td style="text-align:center;">statusMessage</td><td style="text-align:center;"><code>&#39;令牌检测不通过&#39;</code></td><td style="text-align:left;">状态信息</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;"><code>&#39;Error&#39;</code></td><td style="text-align:left;">错误信息</td></tr><tr><td style="text-align:center;">stack</td><td style="text-align:center;">HtmlString</td><td style="text-align:left;">错误堆栈</td></tr></tbody></table><h2 id="未找到接口" tabindex="-1">未找到接口 <a class="header-anchor" href="#未找到接口" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">url</td><td style="text-align:center;">string</td><td style="text-align:left;">请求的接口</td></tr><tr><td style="text-align:center;">statusCode</td><td style="text-align:center;"><code>404</code></td><td style="text-align:left;">状态码</td></tr><tr><td style="text-align:center;">statusMessage</td><td style="text-align:center;"><code>&#39;Page not found: ${url}&#39;</code></td><td style="text-align:left;">状态信息</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;"><code>&#39;Page not found: ${url}&#39;</code></td><td style="text-align:left;">错误信息</td></tr><tr><td style="text-align:center;">stack</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:left;">错误堆栈</td></tr></tbody></table><h2 id="请求不被允许" tabindex="-1">请求不被允许 <a class="header-anchor" href="#请求不被允许" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">url</td><td style="text-align:center;">string</td><td style="text-align:left;">请求的接口</td></tr><tr><td style="text-align:center;">statusCode</td><td style="text-align:center;"><code>405</code></td><td style="text-align:left;">状态码</td></tr><tr><td style="text-align:center;">statusMessage</td><td style="text-align:center;"><code>&#39;HTTP method is not allowed.&#39;</code></td><td style="text-align:left;">状态信息</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;"><code>&#39;HTTP method is not allowed.&#39;</code></td><td style="text-align:left;">错误信息</td></tr><tr><td style="text-align:center;">stack</td><td style="text-align:center;">HtmlString</td><td style="text-align:left;">错误堆栈</td></tr></tbody></table><h2 id="服务器错误" tabindex="-1">服务器错误 <a class="header-anchor" href="#服务器错误" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">url</td><td style="text-align:center;">string</td><td style="text-align:left;">请求的接口</td></tr><tr><td style="text-align:center;">statusCode</td><td style="text-align:center;"><code>500</code></td><td style="text-align:left;">状态码</td></tr><tr><td style="text-align:center;">statusMessage</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:left;">状态信息</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;">string</td><td style="text-align:left;">错误信息</td></tr><tr><td style="text-align:center;">stack</td><td style="text-align:center;">HtmlString</td><td style="text-align:left;">错误堆栈</td></tr></tbody></table>',11),r=[n];function s(i,c,g,x,y,h){return l(),e("div",null,r)}const u=t(a,[["render",s]]);export{f as __pageData,u as default};
