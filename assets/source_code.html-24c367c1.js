const e=JSON.parse('{"key":"v-821a7378","path":"/netty/optimization/source_code.html","title":"Netty源码分析","lang":"zh-CN","frontmatter":{"title":"Netty源码分析","author":"vingkin","date":"2022-07-29T00:00:00.000Z","description":"启动剖析 我们就来看看 netty 中对下面的代码是怎样进行处理的 //1 netty 中使用 NioEventLoopGroup （简称 nio boss 线程）来封装线程和 selector Selector selector = Selector.open(); //2 创建 NioServerSocketChannel，同时会初始化它关联的 handler，以及为原生 ssc 存储 config NioServerSocketChannel attachment = new NioServerSocketChannel(); //3 创建 NioServerSocketChannel 时，创建了 java 原生的 ServerSocketChannel ServerSocketChannel serverSocketChannel = ServerSocketChannel.open(); serverSocketChannel.configureBlocking(false); //4 启动 nio boss 线程执行接下来的操作 //5 注册（仅关联 selector 和 NioServerSocketChannel），未关注事件 SelectionKey selectionKey = serverSocketChannel.register(selector, 0, attachment); //6 head -&gt; 初始化器 -&gt; ServerBootstrapAcceptor -&gt; tail，初始化器是一次性的，只为添加 acceptor //7 绑定端口 serverSocketChannel.bind(new InetSocketAddress(8080)); //8 触发 channel active 事件，在 head 中关注 op_accept 事件 selectionKey.interestOps(SelectionKey.OP_ACCEPT);","head":[["meta",{"property":"og:url","content":"https://vingkin.github.io/Blog/Blog/netty/optimization/source_code.html"}],["meta",{"property":"og:site_name","content":"Vingkin的学习博客"}],["meta",{"property":"og:title","content":"Netty源码分析"}],["meta",{"property":"og:description","content":"启动剖析 我们就来看看 netty 中对下面的代码是怎样进行处理的 //1 netty 中使用 NioEventLoopGroup （简称 nio boss 线程）来封装线程和 selector Selector selector = Selector.open(); //2 创建 NioServerSocketChannel，同时会初始化它关联的 handler，以及为原生 ssc 存储 config NioServerSocketChannel attachment = new NioServerSocketChannel(); //3 创建 NioServerSocketChannel 时，创建了 java 原生的 ServerSocketChannel ServerSocketChannel serverSocketChannel = ServerSocketChannel.open(); serverSocketChannel.configureBlocking(false); //4 启动 nio boss 线程执行接下来的操作 //5 注册（仅关联 selector 和 NioServerSocketChannel），未关注事件 SelectionKey selectionKey = serverSocketChannel.register(selector, 0, attachment); //6 head -&gt; 初始化器 -&gt; ServerBootstrapAcceptor -&gt; tail，初始化器是一次性的，只为添加 acceptor //7 绑定端口 serverSocketChannel.bind(new InetSocketAddress(8080)); //8 触发 channel active 事件，在 head 中关注 op_accept 事件 selectionKey.interestOps(SelectionKey.OP_ACCEPT);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-25T02:33:51.000Z"}],["meta",{"property":"article:author","content":"vingkin"}],["meta",{"property":"article:published_time","content":"2022-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-25T02:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-25T02:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"vingkin\\"}]}"]]},"headers":[{"level":2,"title":"启动剖析","slug":"启动剖析","link":"#启动剖析","children":[]},{"level":2,"title":"NioEventLoop 剖析","slug":"nioeventloop-剖析","link":"#nioeventloop-剖析","children":[{"level":3,"title":"注意⚠️","slug":"注意⚠️","link":"#注意⚠️","children":[]}]},{"level":2,"title":"accept 剖析","slug":"accept-剖析","link":"#accept-剖析","children":[]},{"level":2,"title":"read 剖析","slug":"read-剖析","link":"#read-剖析","children":[]}],"git":{"createdTime":1695609231000,"updatedTime":1695609231000,"contributors":[{"name":"Vingkin","email":"1830053226@qq.com","commits":1}]},"readingTime":{"minutes":11.34,"words":3402},"filePathRelative":"netty/optimization/source_code.md","localizedDate":"2022年7月29日","excerpt":"<h2> 启动剖析</h2>\\n<p>我们就来看看 netty 中对下面的代码是怎样进行处理的</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//1 netty 中使用 NioEventLoopGroup （简称 nio boss 线程）来封装线程和 selector</span>\\n<span class=\\"token class-name\\">Selector</span> selector <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Selector</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> \\n\\n<span class=\\"token comment\\">//2 创建 NioServerSocketChannel，同时会初始化它关联的 handler，以及为原生 ssc 存储 config</span>\\n<span class=\\"token class-name\\">NioServerSocketChannel</span> attachment <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">NioServerSocketChannel</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//3 创建 NioServerSocketChannel 时，创建了 java 原生的 ServerSocketChannel</span>\\n<span class=\\"token class-name\\">ServerSocketChannel</span> serverSocketChannel <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">ServerSocketChannel</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> \\nserverSocketChannel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">configureBlocking</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//4 启动 nio boss 线程执行接下来的操作</span>\\n\\n<span class=\\"token comment\\">//5 注册（仅关联 selector 和 NioServerSocketChannel），未关注事件</span>\\n<span class=\\"token class-name\\">SelectionKey</span> selectionKey <span class=\\"token operator\\">=</span> serverSocketChannel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">register</span><span class=\\"token punctuation\\">(</span>selector<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> attachment<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//6 head -&gt; 初始化器 -&gt; ServerBootstrapAcceptor -&gt; tail，初始化器是一次性的，只为添加 acceptor</span>\\n\\n<span class=\\"token comment\\">//7 绑定端口</span>\\nserverSocketChannel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">bind</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">InetSocketAddress</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">8080</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//8 触发 channel active 事件，在 head 中关注 op_accept 事件</span>\\nselectionKey<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">interestOps</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">SelectionKey</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">OP_ACCEPT</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"vingkin"},"autoDesc":true}');export{e as data};
