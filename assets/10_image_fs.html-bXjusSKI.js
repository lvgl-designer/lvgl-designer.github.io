import{_ as n,c as e,a as i,o as a}from"./app-D2reeSIE.js";const l={};function d(c,s){return a(),e("div",null,[...s[0]||(s[0]=[i(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>图像可以作为变量嵌入到应用程序中。除此之外，它们还可以从外部存储中加载。这允许更大的灵活性，例如在不重新构建应用程序的情况下更新图像。</p><p>从v0.28.0开始，已实现外部图像文件支持。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="启用外部图像支持" tabindex="-1"><a class="header-anchor" href="#启用外部图像支持"><span>启用外部图像支持</span></a></h3><ol><li>导航到<code>项目</code> → <code>项目配置...</code></li><li>启用<code>使用外部图像文件</code></li><li>配置<code>路径前缀</code></li><li>在<code>lv_conf.h</code>中定义解码器支持：</li></ol><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#define LV_USE_FS_STDIO 1 // 启用文件系统支持</span>
<span class="line"></span>
<span class="line">#define LV_USE_PNG 1      // 启用PNG解码器</span>
<span class="line">#define LV_USE_JPEG 1     // 启用JPEG解码器</span>
<span class="line">#define LV_USE_BMP 1      // 启用BMP解码器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件系统驱动程序实现" tabindex="-1"><a class="header-anchor" href="#文件系统驱动程序实现"><span>文件系统驱动程序实现</span></a></h3><p>实现并注册文件系统驱动程序用于文件I/O操作。</p><p>为模拟器提供了参考实现，可以针对自定义实现进行调整：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">/* LVGL的文件系统回调 */</span>
<span class="line">static void *fs_open(lv_fs_drv_t *drv, const char *path, lv_fs_mode_t mode) {</span>
<span class="line">  LV_UNUSED(drv);</span>
<span class="line">  const char *flags = (mode == LV_FS_MODE_WR) ? &quot;wb&quot; : &quot;rb&quot;;</span>
<span class="line">  return fopen(path, flags);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">static lv_fs_res_t fs_close(lv_fs_drv_t *drv, void *file) {</span>
<span class="line">  LV_UNUSED(drv);</span>
<span class="line">  fclose((FILE *)file);</span>
<span class="line">  return LV_FS_RES_OK;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">static lv_fs_res_t fs_read(lv_fs_drv_t *drv, void *file, void *buf,</span>
<span class="line">                           uint32_t btr, uint32_t *br) {</span>
<span class="line">  LV_UNUSED(drv);</span>
<span class="line">  *br = fread(buf, 1, btr, (FILE *)file);</span>
<span class="line">  return (*br &gt; 0) ? LV_FS_RES_OK : LV_FS_RES_UNKNOWN;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">static lv_fs_res_t fs_seek(lv_fs_drv_t *drv, void *file, uint32_t pos,</span>
<span class="line">                           lv_fs_whence_t whence) {</span>
<span class="line">  LV_UNUSED(drv);</span>
<span class="line">  int origin = (whence == LV_FS_SEEK_SET)   ? SEEK_SET</span>
<span class="line">               : (whence == LV_FS_SEEK_CUR) ? SEEK_CUR</span>
<span class="line">                                            : SEEK_END;</span>
<span class="line">  fseek((FILE *)file, pos, origin);</span>
<span class="line">  return LV_FS_RES_OK;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">static lv_fs_res_t fs_tell(lv_fs_drv_t *drv, void *file, uint32_t *pos) {</span>
<span class="line">  LV_UNUSED(drv);</span>
<span class="line">  *pos = ftell((FILE *)file);</span>
<span class="line">  return LV_FS_RES_OK;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* 注册文件系统 */</span>
<span class="line">void register_fs() {</span>
<span class="line">  static lv_fs_drv_t fs_drv;</span>
<span class="line">  lv_fs_drv_init(&amp;fs_drv);</span>
<span class="line">  fs_drv.letter = &#39;S&#39;; // 驱动器字母</span>
<span class="line">  fs_drv.open_cb = fs_open;</span>
<span class="line">  fs_drv.close_cb = fs_close;</span>
<span class="line">  fs_drv.read_cb = fs_read;</span>
<span class="line">  fs_drv.seek_cb = fs_seek;</span>
<span class="line">  fs_drv.tell_cb = fs_tell;</span>
<span class="line">  lv_fs_drv_register(&amp;fs_drv);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在<code>main()</code>中调用<code>register_fs()</code>来注册文件系统：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">int main() {</span>
<span class="line">  ...</span>
<span class="line">  register_fs();</span>
<span class="line">  ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在<code>simulator</code>文件夹中的<code>lv_conf.h</code>中定义<code>USE_SIMULATOR</code>来启用模拟：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#define USE_SIMULATOR</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="重要注意事项" tabindex="-1"><a class="header-anchor" href="#重要注意事项"><span>重要注意事项</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果由于内存分配问题导致图像加载失败，请增加<code>lv_conf.h</code>中的<code>LV_MEM_SIZE</code>：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#  define LV_MEM_SIZE    (? * 1024U * 1024U)          /*[bytes]*/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>所有图像必须位于目标设备上配置的<code>路径前缀</code>目录中</li><li>图像组件尺寸必须与源图像尺寸匹配，因为原始图像将不进行缩放显示</li></ul></div>`,18)])])}const v=n(l,[["render",d]]),p=JSON.parse('{"path":"/zh/guide/10_image_fs.html","title":"使用外部图像文件作为源","lang":"zh-CN","frontmatter":{"title":"使用外部图像文件作为源"},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"启用外部图像支持","slug":"启用外部图像支持","link":"#启用外部图像支持","children":[]},{"level":3,"title":"文件系统驱动程序实现","slug":"文件系统驱动程序实现","link":"#文件系统驱动程序实现","children":[]}]},{"level":2,"title":"重要注意事项","slug":"重要注意事项","link":"#重要注意事项","children":[]}],"git":{"contributors":[{"name":"Devan","username":"","email":"devan.xu@foxmail.com","commits":1}],"changelog":[{"hash":"d4208591d721c9f88356f184a881baaea10d7c0a","time":1758271764000,"email":"devan.xu@foxmail.com","author":"Devan","message":"Add docs and pass <code v-pre>dev</code> &amp; <code v-pre>build</code>"}]},"filePathRelative":"zh/guide/10_image_fs.md"}');export{v as comp,p as data};
