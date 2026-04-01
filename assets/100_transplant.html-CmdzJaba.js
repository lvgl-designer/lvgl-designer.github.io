import{_ as e,c as s,b as a,o as i}from"./app-CSSLtV50.js";const l={};function d(c,n){return i(),s("div",null,[...n[0]||(n[0]=[a(`<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><p>要将您的<code>anyui</code>项目移植到目标设备：</p><ul><li>将<code>generated</code>代码复制到您的项目并调用<code>setupUI()</code>初始化UI</li><li>根据需要将SDK代码复制到您的项目</li><li>根据需要将虚拟实现替换为设备特定代码</li></ul><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>虽然<code>anyui</code>主要专注于UI设计，但生成的UI代码应保持独立于底层硬件和开发工具（如Keil）。</p><p>此外，<code>anyui</code>提供了一个SDK，可用于屏幕管理和硬件通信的扩展。</p><h2 id="移植过程" tabindex="-1"><a class="header-anchor" href="#移植过程"><span>移植过程</span></a></h2><h3 id="ui代码" tabindex="-1"><a class="header-anchor" href="#ui代码"><span>UI代码</span></a></h3><p>所有UI代码都在<code>{root}/generated</code>目录中生成，包括屏幕实现和转换的资产（图像、字体、Lottie）。</p><p>此代码是自动生成的，不应手动修改。</p><h3 id="sdk" tabindex="-1"><a class="header-anchor" href="#sdk"><span>SDK</span></a></h3><p>SDK实现在<code>{root}/sdk</code>目录中，为屏幕管理和硬件通信提供实用程序。</p><p>SDK可以扩展以满足特定需求。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>SDK代码可能在未来的版本中更新以提供更多功能。任何自定义修改在更新期间都需要解决冲突。</p></div><h3 id="虚拟代码" tabindex="-1"><a class="header-anchor" href="#虚拟代码"><span>虚拟代码</span></a></h3><p>虚拟实现在<code>{root}/simulator/dummy.c</code>中，提供必须替换为设备特定实现的占位符功能。</p><p>虚拟代码包括：</p><ul><li>处理来自UI的通信命令的处理程序</li><li>用于外部存储的文件系统驱动实现（当使用外部图像文件作为源时）</li><li>用于时间和电池状态更新的定时器实现（仅用于演示目的；根据需要替换为实际实现或删除）</li></ul><h3 id="lv-conf-h" tabindex="-1"><a class="header-anchor" href="#lv-conf-h"><span>lv_conf.h</span></a></h3><p>维护设备特定的<code>lv_conf.h</code>文件副本，至少包含以下配置：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">/*</span>
<span class="line"> * 必需的配置</span>
<span class="line">*/</span>
<span class="line">#define LV_HOR_RES_MAX (?) // 水平分辨率</span>
<span class="line">#define LV_VER_RES_MAX (?) // 垂直分辨率</span>
<span class="line">#define LV_COLOR_DEPTH 16</span>
<span class="line">/*&#39;lv_mem_alloc()&#39;可用的内存大小（&gt;= 2kB），以字节为单位*/</span>
<span class="line">#define LV_MEM_SIZE (?) // 内存大小（字节）</span>
<span class="line"></span>
<span class="line">/*</span>
<span class="line"> * 根据需要的可选配置</span>
<span class="line"> */</span>
<span class="line">#define LV_USE_LOG 1 // 启用日志</span>
<span class="line"></span>
<span class="line">#define LV_USE_FS_STDIO 1 // 启用文件系统</span>
<span class="line">#define LV_USE_PNG 1 // 启用PNG解码器</span>
<span class="line">#define LV_USE_JPEG 1 // 启用JPEG解码器</span>
<span class="line">#define LV_USE_BMP 1 // 启用BMP解码器</span>
<span class="line">#define LV_USE_GIF 1 // 启用GIF解码器</span>
<span class="line"></span>
<span class="line">#define LV_USE_BTN 1 // 启用按钮</span>
<span class="line">#define LV_USE_IMG 1 // 启用图像</span>
<span class="line">#define LV_USE_LABEL 1 // 启用标签</span>
<span class="line">// 根据需要的其他组件</span>
<span class="line"></span>
<span class="line">/*</span>
<span class="line"> * 设备特定的排除</span>
<span class="line"> */;</span>
<span class="line">//#define USE_SIMULATOR</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)])])}const r=e(l,[["render",d]]),v=JSON.parse('{"path":"/zh/guide/100_transplant.html","title":"代码移植","lang":"zh-CN","frontmatter":{"title":"代码移植"},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"移植过程","slug":"移植过程","link":"#移植过程","children":[{"level":3,"title":"UI代码","slug":"ui代码","link":"#ui代码","children":[]},{"level":3,"title":"SDK","slug":"sdk","link":"#sdk","children":[]},{"level":3,"title":"虚拟代码","slug":"虚拟代码","link":"#虚拟代码","children":[]},{"level":3,"title":"lv_conf.h","slug":"lv-conf-h","link":"#lv-conf-h","children":[]}]}],"git":{"contributors":[{"name":"Devan","username":"","email":"devan.xu@foxmail.com","commits":1}],"changelog":[{"hash":"d4208591d721c9f88356f184a881baaea10d7c0a","time":1758271764000,"email":"devan.xu@foxmail.com","author":"Devan","message":"Add docs and pass <code v-pre>dev</code> &amp; <code v-pre>build</code>"}]},"filePathRelative":"zh/guide/100_transplant.md"}');export{r as comp,v as data};
