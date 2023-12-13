const n=JSON.parse('{"key":"v-151d81e0","path":"/netty/nio/bytebuffer.html","title":"ByteBuffer","lang":"zh-CN","frontmatter":{"title":"ByteBuffer","author":"vingkin","date":"2022-07-20T00:00:00.000Z","description":"有一普通文本文件 data.txt，内容为 1234567890abcd 使用 FileChannel 来读取文件内容 @Slf4j public class ChannelDemo1 { public static void main(String[] args) { try (RandomAccessFile file = new RandomAccessFile(\\"helloword/data.txt\\", \\"rw\\")) { FileChannel channel = file.getChannel(); ByteBuffer buffer = ByteBuffer.allocate(10); do { // 向 buffer 写入 int len = channel.read(buffer); log.debug(\\"读到字节数：{}\\", len); if (len == -1) { break; } // 切换 buffer 读模式 buffer.flip(); while(buffer.hasRemaining()) { log.debug(\\"{}\\", (char)buffer.get()); } // 切换 buffer 写模式 buffer.clear(); } while (true); } catch (IOException e) { e.printStackTrace(); } } }","head":[["meta",{"property":"og:url","content":"https://vingkin.github.io/Blog/Blog/netty/nio/bytebuffer.html"}],["meta",{"property":"og:site_name","content":"Vingkin的学习博客"}],["meta",{"property":"og:title","content":"ByteBuffer"}],["meta",{"property":"og:description","content":"有一普通文本文件 data.txt，内容为 1234567890abcd 使用 FileChannel 来读取文件内容 @Slf4j public class ChannelDemo1 { public static void main(String[] args) { try (RandomAccessFile file = new RandomAccessFile(\\"helloword/data.txt\\", \\"rw\\")) { FileChannel channel = file.getChannel(); ByteBuffer buffer = ByteBuffer.allocate(10); do { // 向 buffer 写入 int len = channel.read(buffer); log.debug(\\"读到字节数：{}\\", len); if (len == -1) { break; } // 切换 buffer 读模式 buffer.flip(); while(buffer.hasRemaining()) { log.debug(\\"{}\\", (char)buffer.get()); } // 切换 buffer 写模式 buffer.clear(); } while (true); } catch (IOException e) { e.printStackTrace(); } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-25T02:33:51.000Z"}],["meta",{"property":"article:author","content":"vingkin"}],["meta",{"property":"article:published_time","content":"2022-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-25T02:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ByteBuffer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-25T02:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"vingkin\\"}]}"]]},"headers":[{"level":2,"title":"ByteBuffer 正确使用姿势","slug":"bytebuffer-正确使用姿势","link":"#bytebuffer-正确使用姿势","children":[]},{"level":2,"title":"ByteBuffer 结构","slug":"bytebuffer-结构","link":"#bytebuffer-结构","children":[{"level":3,"title":"调试工具类💡","slug":"调试工具类💡","link":"#调试工具类💡","children":[]}]},{"level":2,"title":"ByteBuffer 常见方法","slug":"bytebuffer-常见方法","link":"#bytebuffer-常见方法","children":[{"level":3,"title":"分配空间","slug":"分配空间","link":"#分配空间","children":[]},{"level":3,"title":"向 buffer 写入数据","slug":"向-buffer-写入数据","link":"#向-buffer-写入数据","children":[]},{"level":3,"title":"从 buffer 读取数据","slug":"从-buffer-读取数据","link":"#从-buffer-读取数据","children":[]},{"level":3,"title":"mark 和 reset","slug":"mark-和-reset","link":"#mark-和-reset","children":[]},{"level":3,"title":"字符串与 ByteBuffer 互转","slug":"字符串与-bytebuffer-互转","link":"#字符串与-bytebuffer-互转","children":[]},{"level":3,"title":"Buffer 的线程安全⚠️","slug":"buffer-的线程安全⚠️","link":"#buffer-的线程安全⚠️","children":[]}]},{"level":2,"title":"Scattering Reads分散读","slug":"scattering-reads分散读","link":"#scattering-reads分散读","children":[]},{"level":2,"title":"Gathering Writes集中写","slug":"gathering-writes集中写","link":"#gathering-writes集中写","children":[]},{"level":2,"title":"练习","slug":"练习","link":"#练习","children":[]}],"git":{"createdTime":1695609231000,"updatedTime":1695609231000,"contributors":[{"name":"Vingkin","email":"1830053226@qq.com","commits":1}]},"readingTime":{"minutes":6.19,"words":1856},"filePathRelative":"netty/nio/bytebuffer.md","localizedDate":"2022年7月20日","excerpt":"<p>有一普通文本文件 data.txt，内容为</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>1234567890abcd\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>使用 FileChannel 来读取文件内容</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Slf4j</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ChannelDemo1</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">RandomAccessFile</span> file <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RandomAccessFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"helloword/data.txt\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"rw\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">FileChannel</span> channel <span class=\\"token operator\\">=</span> file<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getChannel</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token class-name\\">ByteBuffer</span> buffer <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">ByteBuffer</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">allocate</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">do</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token comment\\">// 向 buffer 写入</span>\\n                <span class=\\"token keyword\\">int</span> len <span class=\\"token operator\\">=</span> channel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">read</span><span class=\\"token punctuation\\">(</span>buffer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                log<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"读到字节数：{}\\"</span><span class=\\"token punctuation\\">,</span> len<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>len <span class=\\"token operator\\">==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token comment\\">// 切换 buffer 读模式</span>\\n                buffer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">flip</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>buffer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hasRemaining</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    log<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"{}\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">)</span>buffer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token comment\\">// 切换 buffer 写模式</span>\\n                buffer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">clear</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">IOException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"vingkin"},"autoDesc":true}');export{n as data};
