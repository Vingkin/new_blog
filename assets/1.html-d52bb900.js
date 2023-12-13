const e=JSON.parse('{"key":"v-0069c1a2","path":"/bigdata/hadoop/hdfs/1.html","title":"HDFS 集群管理与运维","lang":"zh-CN","frontmatter":{"title":"HDFS 集群管理与运维","description":"1. DistCp HDFS分布式拷贝工具 用于数据迁移，定期在集群间或集群内部进行数据备份 底层使用MapReduce在集群之间或并行地在同一集群内复制文件。执行复制的MapReduce只有mapper阶段。 $ hadoop distcp usage: distcp OPTIONS [source_path...] &lt;target_path&gt; \\t-append //拷贝文件时支持对现有文件进行追加写操作 \\t-async //异步执行distcp拷贝任务 \\t-bandwidth &lt;arg&gt; //对每个Map任务的带宽限速 \\t-delete //删除相对于源端,目标端多出来的文件 \\t-diff &lt;arg&gt; //通过快照diff信息进行数据的同步 \\t-overwrite //以覆盖的方式进行拷贝,如果目标端文件已经存在,则直接覆盖 \\t-p &lt;arg&gt; //拷贝数据时,扩展属性信息的保留,包括权限信息,块大小信息等等 \\t-skipcrccheck //拷贝数据时是否跳过cheacksum的校验 \\t-update //拷贝数据时,只拷贝相对于源端 ,目标端不存在的文件数据","head":[["meta",{"property":"og:url","content":"https://vingkin.github.io/Blog/Blog/bigdata/hadoop/hdfs/1.html"}],["meta",{"property":"og:site_name","content":"Vingkin的学习博客"}],["meta",{"property":"og:title","content":"HDFS 集群管理与运维"}],["meta",{"property":"og:description","content":"1. DistCp HDFS分布式拷贝工具 用于数据迁移，定期在集群间或集群内部进行数据备份 底层使用MapReduce在集群之间或并行地在同一集群内复制文件。执行复制的MapReduce只有mapper阶段。 $ hadoop distcp usage: distcp OPTIONS [source_path...] &lt;target_path&gt; \\t-append //拷贝文件时支持对现有文件进行追加写操作 \\t-async //异步执行distcp拷贝任务 \\t-bandwidth &lt;arg&gt; //对每个Map任务的带宽限速 \\t-delete //删除相对于源端,目标端多出来的文件 \\t-diff &lt;arg&gt; //通过快照diff信息进行数据的同步 \\t-overwrite //以覆盖的方式进行拷贝,如果目标端文件已经存在,则直接覆盖 \\t-p &lt;arg&gt; //拷贝数据时,扩展属性信息的保留,包括权限信息,块大小信息等等 \\t-skipcrccheck //拷贝数据时是否跳过cheacksum的校验 \\t-update //拷贝数据时,只拷贝相对于源端 ,目标端不存在的文件数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-25T11:35:18.000Z"}],["meta",{"property":"article:author","content":"Vingkin"}],["meta",{"property":"article:modified_time","content":"2023-09-25T11:35:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS 集群管理与运维\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-25T11:35:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Vingkin\\"}]}"]]},"headers":[{"level":2,"title":"1. DistCp","slug":"_1-distcp","link":"#_1-distcp","children":[]},{"level":2,"title":"2. 安全模式","slug":"_2-安全模式","link":"#_2-安全模式","children":[]},{"level":2,"title":"3. HDFS高阶优化方案","slug":"_3-hdfs高阶优化方案","link":"#_3-hdfs高阶优化方案","children":[{"level":3,"title":"3.1. 短路本地读取","slug":"_3-1-短路本地读取","link":"#_3-1-短路本地读取","children":[]},{"level":3,"title":"3.2. HDFS Block负载平衡器：Balancer","slug":"_3-2-hdfs-block负载平衡器-balancer","link":"#_3-2-hdfs-block负载平衡器-balancer","children":[]},{"level":3,"title":"3.3. 磁盘均衡器：HDFS Disk Balancer（3.0）","slug":"_3-3-磁盘均衡器-hdfs-disk-balancer-3-0","link":"#_3-3-磁盘均衡器-hdfs-disk-balancer-3-0","children":[]},{"level":3,"title":"3.4. 纠删码技术（Erasure Coding)（3.0）","slug":"_3-4-纠删码技术-erasure-coding-3-0","link":"#_3-4-纠删码技术-erasure-coding-3-0","children":[]}]},{"level":2,"title":"4. HDFS动态节点管理","slug":"_4-hdfs动态节点管理","link":"#_4-hdfs动态节点管理","children":[{"level":3,"title":"4.1. 节点扩容","slug":"_4-1-节点扩容","link":"#_4-1-节点扩容","children":[]},{"level":3,"title":"4.2. 动态缩容","slug":"_4-2-动态缩容","link":"#_4-2-动态缩容","children":[]},{"level":3,"title":"4.3. 黑白名单机制","slug":"_4-3-黑白名单机制","link":"#_4-3-黑白名单机制","children":[]}]},{"level":2,"title":"5. HDFS HA高可用","slug":"_5-hdfs-ha高可用","link":"#_5-hdfs-ha高可用","children":[{"level":3,"title":"5.1 背景知识","slug":"_5-1-背景知识","link":"#_5-1-背景知识","children":[]},{"level":3,"title":"5.2 NameNode单点故障问题","slug":"_5-2-namenode单点故障问题","link":"#_5-2-namenode单点故障问题","children":[]},{"level":3,"title":"5.3 HDFS HA解决方案--QJM","slug":"_5-3-hdfs-ha解决方案-qjm","link":"#_5-3-hdfs-ha解决方案-qjm","children":[]}]},{"level":2,"title":"6. HDFS Federation联邦机制","slug":"_6-hdfs-federation联邦机制","link":"#_6-hdfs-federation联邦机制","children":[{"level":3,"title":"6.1 当前HDFS体系架构","slug":"_6-1-当前hdfs体系架构","link":"#_6-1-当前hdfs体系架构","children":[]},{"level":3,"title":"6.2 联邦Federation架构","slug":"_6-2-联邦federation架构","link":"#_6-2-联邦federation架构","children":[]}]},{"level":2,"title":"7. HDFS集群滚动升级","slug":"_7-hdfs集群滚动升级","link":"#_7-hdfs集群滚动升级","children":[]},{"level":2,"title":"8. HDFS集群滚动降级","slug":"_8-hdfs集群滚动降级","link":"#_8-hdfs集群滚动降级","children":[{"level":3,"title":"8.1. 降级和回滚的区别","slug":"_8-1-降级和回滚的区别","link":"#_8-1-降级和回滚的区别","children":[]}]}],"git":{"createdTime":1695641718000,"updatedTime":1695641718000,"contributors":[{"name":"Vingkin","email":"1830053226@qq.com","commits":1}]},"readingTime":{"minutes":18.11,"words":5433},"filePathRelative":"bigdata/hadoop/hdfs/1.md","localizedDate":"2023年9月25日","excerpt":"<h2> 1. DistCp</h2>\\n<blockquote>\\n<p>HDFS分布式拷贝工具</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>用于数据迁移，定期在集群间或集群内部进行数据备份</p>\\n</li>\\n<li>\\n<p>底层使用MapReduce在集群之间或并行地在同一集群内复制文件。执行复制的MapReduce只有mapper阶段。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ hadoop distcp usage: distcp OPTIONS <span class=\\"token punctuation\\">[</span>source_path<span class=\\"token punctuation\\">..</span>.<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span>target_path<span class=\\"token operator\\">&gt;</span>             \\n\\t<span class=\\"token parameter variable\\">-append</span>                //拷贝文件时支持对现有文件进行追加写操作\\n\\t<span class=\\"token parameter variable\\">-async</span>                  //异步执行distcp拷贝任务\\n\\t<span class=\\"token parameter variable\\">-bandwidth</span> <span class=\\"token operator\\">&lt;</span>arg<span class=\\"token operator\\">&gt;</span>        //对每个Map任务的带宽限速\\n\\t<span class=\\"token parameter variable\\">-delete</span>                 //删除相对于源端,目标端多出来的文件\\n\\t<span class=\\"token parameter variable\\">-diff</span> <span class=\\"token operator\\">&lt;</span>arg<span class=\\"token operator\\">&gt;</span>             //通过快照diff信息进行数据的同步                  \\n\\t<span class=\\"token parameter variable\\">-overwrite</span>              //以覆盖的方式进行拷贝,如果目标端文件已经存在,则直接覆盖\\n\\t<span class=\\"token parameter variable\\">-p</span> <span class=\\"token operator\\">&lt;</span>arg<span class=\\"token operator\\">&gt;</span>                //拷贝数据时,扩展属性信息的保留,包括权限信息,块大小信息等等\\n\\t<span class=\\"token parameter variable\\">-skipcrccheck</span>          //拷贝数据时是否跳过cheacksum的校验\\n\\t<span class=\\"token parameter variable\\">-update</span>                 //拷贝数据时,只拷贝相对于源端 ,目标端不存在的文件数据\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"Vingkin"},"autoDesc":true}');export{e as data};
