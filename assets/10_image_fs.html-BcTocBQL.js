import{_ as s,c as n,a as i,o as a}from"./app-CG9emItW.js";const l={};function d(r,e){return a(),n("div",null,[...e[0]||(e[0]=[i(`<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>Images can be embedded as variables within the application. Besides that, they can be loaded from external storage. This allows for greater flexibility, such as updating images without requiring application rebuilds.</p><p>Beginning with v0.28.0, external image file support has been implemented.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><h3 id="enable-external-image-support" tabindex="-1"><a class="header-anchor" href="#enable-external-image-support"><span>Enable External Image Support</span></a></h3><ol><li>Navigate to <code>Project</code> → <code>Project Config...</code></li><li>Enable <code>Use External Image File</code></li><li>Configure the <code>Path Prefix</code></li><li>Define decoder support in <code>lv_conf.h</code>:</li></ol><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#define LV_USE_FS_STDIO 1 // Enable file system support</span>
<span class="line"></span>
<span class="line">#define LV_USE_PNG 1      // Enable PNG decoder</span>
<span class="line">#define LV_USE_JPEG 1     // Enable JPEG decoder</span>
<span class="line">#define LV_USE_BMP 1      // Enable BMP decoder</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-system-driver-implementation" tabindex="-1"><a class="header-anchor" href="#file-system-driver-implementation"><span>File System Driver Implementation</span></a></h3><p>Implement and register a file system driver for file I/O operations.</p><p>A reference implementation for the simulator is provided, which can be adapted for custom implementations:</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">/* File system callbacks for LVGL */</span>
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
<span class="line">/* Register the file system */</span>
<span class="line">void register_fs() {</span>
<span class="line">  static lv_fs_drv_t fs_drv;</span>
<span class="line">  lv_fs_drv_init(&amp;fs_drv);</span>
<span class="line">  fs_drv.letter = &#39;S&#39;; // Drive letter</span>
<span class="line">  fs_drv.open_cb = fs_open;</span>
<span class="line">  fs_drv.close_cb = fs_close;</span>
<span class="line">  fs_drv.read_cb = fs_read;</span>
<span class="line">  fs_drv.seek_cb = fs_seek;</span>
<span class="line">  fs_drv.tell_cb = fs_tell;</span>
<span class="line">  lv_fs_drv_register(&amp;fs_drv);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Register the file system by calling <code>register_fs()</code> in <code>main()</code>:</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">int main() {</span>
<span class="line">  ...</span>
<span class="line">  register_fs();</span>
<span class="line">  ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enable simulation by defining <code>USE_SIMULATOR</code> in <code>lv_conf.h</code> within the <code>simulator</code> folder:</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#define USE_SIMULATOR</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="important-considerations" tabindex="-1"><a class="header-anchor" href="#important-considerations"><span>Important Considerations</span></a></h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>If image loading fails due to memory allocation issues, increase <code>LV_MEM_SIZE</code> in <code>lv_conf.h</code>:</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#  define LV_MEM_SIZE    (? * 1024U * 1024U)          /*[bytes]*/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><ul><li>All images must be located in the configured <code>Path Prefix</code> directory on the target device</li><li>Image component dimensions must match the source image dimensions, as the original image will be displayed without scaling</li></ul></div>`,18)])])}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/guide/10_image_fs.html","title":"Use External Image File as Source","lang":"en-US","frontmatter":{"title":"Use External Image File as Source"},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Enable External Image Support","slug":"enable-external-image-support","link":"#enable-external-image-support","children":[]},{"level":3,"title":"File System Driver Implementation","slug":"file-system-driver-implementation","link":"#file-system-driver-implementation","children":[]}]},{"level":2,"title":"Important Considerations","slug":"important-considerations","link":"#important-considerations","children":[]}],"git":{"contributors":[{"name":"Devan","username":"","email":"devan.xu@foxmail.com","commits":2}],"changelog":[{"hash":"d4208591d721c9f88356f184a881baaea10d7c0a","time":1758271764000,"email":"devan.xu@foxmail.com","author":"Devan","message":"Add docs and pass <code v-pre>dev</code> &amp; <code v-pre>build</code>"},{"hash":"315aa73e4a482b806b551ff1003d94d16af3c800","time":1756105077000,"email":"devan.xu@foxmail.com","author":"Devan","message":"Build skeleton of the website and add docs"}]},"filePathRelative":"guide/10_image_fs.md"}');export{c as comp,p as data};
