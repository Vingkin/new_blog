const e=JSON.parse('{"key":"v-7621adb3","path":"/netty/advance/chatroom.html","title":"聊天室案例","lang":"zh-CN","frontmatter":{"title":"聊天室案例","author":"vingkin","date":"2022-07-27T00:00:00.000Z","description":"聊天室业务介绍 /** * 用户管理接口 */ public interface UserService { /** * 登录 * @param username 用户名 * @param password 密码 * @return 登录成功返回 true, 否则返回 false */ boolean login(String username, String password); }","head":[["meta",{"property":"og:url","content":"https://vingkin.github.io/Blog/Blog/netty/advance/chatroom.html"}],["meta",{"property":"og:site_name","content":"Vingkin的学习博客"}],["meta",{"property":"og:title","content":"聊天室案例"}],["meta",{"property":"og:description","content":"聊天室业务介绍 /** * 用户管理接口 */ public interface UserService { /** * 登录 * @param username 用户名 * @param password 密码 * @return 登录成功返回 true, 否则返回 false */ boolean login(String username, String password); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-25T02:33:51.000Z"}],["meta",{"property":"article:author","content":"vingkin"}],["meta",{"property":"article:published_time","content":"2022-07-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-25T02:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聊天室案例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-25T02:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"vingkin\\"}]}"]]},"headers":[{"level":2,"title":"聊天室业务介绍","slug":"聊天室业务介绍","link":"#聊天室业务介绍","children":[]},{"level":2,"title":"聊天室业务-登录","slug":"聊天室业务-登录","link":"#聊天室业务-登录","children":[]},{"level":2,"title":"聊天室业务-单聊","slug":"聊天室业务-单聊","link":"#聊天室业务-单聊","children":[]},{"level":2,"title":"聊天室业务-群聊","slug":"聊天室业务-群聊","link":"#聊天室业务-群聊","children":[]},{"level":2,"title":"聊天室业务-退出","slug":"聊天室业务-退出","link":"#聊天室业务-退出","children":[]},{"level":2,"title":"聊天室业务-空闲检测","slug":"聊天室业务-空闲检测","link":"#聊天室业务-空闲检测","children":[{"level":3,"title":"连接假死","slug":"连接假死","link":"#连接假死","children":[]}]}],"git":{"createdTime":1695609231000,"updatedTime":1695609231000,"contributors":[{"name":"Vingkin","email":"1830053226@qq.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2027},"filePathRelative":"netty/advance/chatroom.md","localizedDate":"2022年7月27日","excerpt":"<h2> 聊天室业务介绍</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**\\n * 用户管理接口\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">UserService</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 登录\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">username</span> 用户名\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">password</span> 密码\\n     * <span class=\\"token keyword\\">@return</span> 登录成功返回 true, 否则返回 false\\n     */</span>\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">login</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> username<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> password<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"vingkin"},"autoDesc":true}');export{e as data};
