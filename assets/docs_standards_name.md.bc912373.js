import{_ as e,c as l,o as a,a as t}from"./app.6a298b7c.js";const f=JSON.parse('{"title":"命名与使用规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue组件(components)","slug":"vue组件-components","link":"#vue组件-components","children":[{"level":3,"title":"文件名(name)","slug":"文件名-name","link":"#文件名-name","children":[]},{"level":3,"title":"接口(props)、事件(emits)、属性(attrs)、与插槽(slots)","slug":"接口-props-、事件-emits-、属性-attrs-、与插槽-slots","link":"#接口-props-、事件-emits-、属性-attrs-、与插槽-slots","children":[]}]},{"level":2,"title":"Vue页面(pages)","slug":"vue页面-pages","link":"#vue页面-pages","children":[]},{"level":2,"title":"Vue Hooks(composables)","slug":"vue-hooks-composables","link":"#vue-hooks-composables","children":[]},{"level":2,"title":"工具函数(utils)","slug":"工具函数-utils","link":"#工具函数-utils","children":[]},{"level":2,"title":"API接口(server/api)","slug":"api接口-server-api","link":"#api接口-server-api","children":[]},{"level":2,"title":"JS","slug":"js","link":"#js","children":[{"level":3,"title":"变量名","slug":"变量名","link":"#变量名","children":[]},{"level":3,"title":"函数名","slug":"函数名","link":"#函数名","children":[]},{"level":3,"title":"TS接口(interface)或别名(type)类型","slug":"ts接口-interface-或别名-type-类型","link":"#ts接口-interface-或别名-type-类型","children":[]},{"level":3,"title":"TS工具类型","slug":"ts工具类型","link":"#ts工具类型","children":[]}]},{"level":2,"title":"CSS","slug":"css","link":"#css","children":[]},{"level":2,"title":"HTML","slug":"html","link":"#html","children":[]}],"relativePath":"docs/standards/name.md","lastUpdated":1675608392000}'),s={name:"docs/standards/name.md"},i=t(`<h1 id="命名与使用规范" tabindex="-1">命名与使用规范 <a class="header-anchor" href="#命名与使用规范" aria-hidden="true">#</a></h1><ul><li>大驼峰式命名(PascalCase)</li><li>小驼峰式命名(camelCase)</li><li>短横线连接式命名(kebab-case)</li><li>下划线连接式命名(Snake)</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>尽可能语义化命名，如果不方便语义化命名的话请使用jsdoc记录相关描述</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>同一分类下要谨记防止命名冲突</p></div><h2 id="vue组件-components" tabindex="-1">Vue组件(components) <a class="header-anchor" href="#vue组件-components" aria-hidden="true">#</a></h2><h3 id="文件名-name" tabindex="-1">文件名(name) <a class="header-anchor" href="#文件名-name" aria-hidden="true">#</a></h3><ul><li><p>命名：大驼峰式命名(PascalCase)，禁止只使用单个单词作为文件名，如<code>Main</code>。</p><ul><li><p>如果只表示单一功能的底层组件只有简单命名时，请以<code>M</code>开头命名，如<code>MMain</code>。</p></li><li><p>或者可参照<a href="https://nuxt.com/docs/guide/directory-structure/components#component-names" target="_blank" rel="noreferrer">Nuxt3 components</a>自动识别导入的方式利用文件夹进行语义化命名：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">| components/</span></span>
<span class="line"><span style="color:#A6ACCD;">--| base/</span></span>
<span class="line"><span style="color:#A6ACCD;">----| foo/</span></span>
<span class="line"><span style="color:#A6ACCD;">------| Button.vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BaseFooButton</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>使用：Nuxt3具有组件自动导入功能，所以不需要显式引用组件，本项目中<strong>禁止</strong>显式引用。使用组件是请以大驼峰式(PascalCase)使用</p></li></ul><h3 id="接口-props-、事件-emits-、属性-attrs-、与插槽-slots" tabindex="-1">接口(props)、事件(emits)、属性(attrs)、与插槽(slots) <a class="header-anchor" href="#接口-props-、事件-emits-、属性-attrs-、与插槽-slots" aria-hidden="true">#</a></h3><ul><li><p>命名：</p><ul><li>事件(emits)请以小驼峰式命名(camelCase)，语义化命名。</li><li>其他三项短横线连接式命名(kebab-case)，语义化命名。</li></ul></li><li><p>使用：</p><ul><li>jsx语法中请以小驼峰式(camelCase)使用。</li><li>非jsx语法中请以短横线连接式(kebab-case)使用。</li><li>组件属性(attrs)请按vue指令、原生属性、接口(props)、事件(emits)的顺序书写</li></ul></li></ul><h2 id="vue页面-pages" tabindex="-1">Vue页面(pages) <a class="header-anchor" href="#vue页面-pages" aria-hidden="true">#</a></h2><ul><li><p>命名：短横线连接式命名(kebab-case)，语义化命名。</p><ul><li>如果是简单单一功能页面，请直接对vue文件命名</li><li>如果是可扩展的或者目录页面，请对文件夹命名并在文件夹下级放置<code>index.vue</code>文件作为页面。</li></ul></li><li><p>使用：路由跳转时使用路径时，除了一级页面，禁止使用<code>name</code>进行跳转，以便IDE追踪路径。</p></li></ul><h2 id="vue-hooks-composables" tabindex="-1">Vue Hooks(composables) <a class="header-anchor" href="#vue-hooks-composables" aria-hidden="true">#</a></h2><ul><li><p>命名：短横线连接式命名(kebab-case)，语义化命名。模块内禁止默认导出。</p><ul><li><code>export const</code>导出的变量名以<code>use</code>开头，后接大驼峰式命名(PascalCase)。</li></ul></li><li><p>使用：禁止显式导入。</p></li></ul><h2 id="工具函数-utils" tabindex="-1">工具函数(utils) <a class="header-anchor" href="#工具函数-utils" aria-hidden="true">#</a></h2><ul><li><p>命名：小驼峰式命名(camelCase)，语义化命名。模块内禁止默认导出。</p><ul><li><code>export const</code>导出的变量名以小驼峰式命名(camelCase)。</li></ul></li><li><p>使用：禁止显式导入。</p></li></ul><h2 id="api接口-server-api" tabindex="-1">API接口(server/api) <a class="header-anchor" href="#api接口-server-api" aria-hidden="true">#</a></h2><ul><li>命名：小驼峰式命名(camelCase)，后接短横线(<code>-</code>)和请求类型，语义化命名。</li></ul><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-hidden="true">#</a></h2><p>非导出的变量和函数，一定在作用域内规范命名，防止语义混淆</p><h3 id="变量名" tabindex="-1">变量名 <a class="header-anchor" href="#变量名" aria-hidden="true">#</a></h3><ul><li><p>命名：下划线连接式命名(Snake)，语义化命名。功能或结构专用的变量以功能或结构为开头，后接具体描述。例：</p><table><thead><tr><th style="text-align:center;">变量名</th><th style="text-align:left;">变量说明</th></tr></thead><tbody><tr><td style="text-align:center;">form-ref</td><td style="text-align:left;">表单引用</td></tr><tr><td style="text-align:center;">form-rules</td><td style="text-align:left;">表单校验规则</td></tr><tr><td style="text-align:center;">form-data</td><td style="text-align:left;">表单数据</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">变量名</th><th style="text-align:left;">变量说明</th></tr></thead><tbody><tr><td style="text-align:center;">user-form-ref</td><td style="text-align:left;">用户表单引用</td></tr><tr><td style="text-align:center;">comment-form-ref</td><td style="text-align:left;">评论表单引用</td></tr></tbody></table></li></ul><h3 id="函数名" tabindex="-1">函数名 <a class="header-anchor" href="#函数名" aria-hidden="true">#</a></h3><ul><li><p>命名：小驼峰式命名(camelCase)，语义化命名。</p><ul><li>操作类函数以操作类型为开头，后接具体描述。</li><li>检测类函数以<code>check</code>开头，后接具体描述，并对返回值进行断言(<code>asserts</code>)。</li><li>判断类函数以<code>is</code>开头，后接具体描述，并对返回值进行判断(<code>is</code>)。</li></ul></li><li><p>使用：模块内顶层非导出函数请使用function命名函数，并写在文件底部。其他函数请根据需要使用箭头函数function匿名函数。</p></li></ul><h3 id="ts接口-interface-或别名-type-类型" tabindex="-1">TS接口(interface)或别名(type)类型 <a class="header-anchor" href="#ts接口-interface-或别名-type-类型" aria-hidden="true">#</a></h3><ul><li>命名：大驼峰式命名(PascalCase)，语义化命名。必要时使用类型空间隔离作用域。</li></ul><h3 id="ts工具类型" tabindex="-1">TS工具类型 <a class="header-anchor" href="#ts工具类型" aria-hidden="true">#</a></h3><ul><li>命名：多个单词组成时请用小驼峰式命名(camelCase)，单个单词组成时请将首字母大写，语义化命名。必要时使用类型空间隔离作用域。</li></ul><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><ul><li>使用原子类进行样式的修改，参考<a href="https://www.tailwindcss.cn/docs" target="_blank" rel="noreferrer">TailWindCss</a>。</li><li>页面内需要在<code>&lt;style&gt;</code>块上使用<a href="https://cn.vuejs.org/api/sfc-css-features.html#scoped-css" target="_blank" rel="noreferrer"><code>scope</code></a>限制作用域。</li><li>功能性组件内有需求可以自行设置css class命名，此时参考使用<a href="https://bemcss.com" target="_blank" rel="noreferrer">BEM规范</a>。</li><li>全局修改组件库样式时请在<code>assets/css/main.css</code>内的<code>components</code>层下修改。</li></ul><h2 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-hidden="true">#</a></h2><ul><li>使用： <ul><li>原生标签请使用纯小写字母，除了特殊标签，禁止使用自闭合标签。</li><li>Vue组件请使用大驼峰式(PascalCase)，如果组件没有插槽，请使用自闭合标签。</li></ul></li></ul>`,31),n=[i];function r(c,o,d,p,h,u){return a(),l("div",null,n)}const g=e(s,[["render",r]]);export{f as __pageData,g as default};