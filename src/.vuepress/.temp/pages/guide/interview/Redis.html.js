export const data = JSON.parse("{\"key\":\"v-14a0ac98\",\"path\":\"/guide/interview/Redis.html\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis\",\"author\":\"Vingkin\",\"date\":\"2022-04-24T00:00:00.000Z\",\"description\":\"Redis常见数据结构以及使用场景 string 介绍：虽然Reids是C语言编写的，但是其string底层并没有采用C的字符串，而是自己构建了一种简单动态字符串 常用命令：set，get，strlen，exists，decr，incr，setex等 应用场景：一般用于需要计数的场景，比如用户的访问次数，热点文章的点赞数和转发数等等 list 介绍：底层为双向链表 常用命令：rpush，lpush，rpop，lpop，lrange，llen等\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vingkin.github.io/Blog/Blog/guide/interview/Redis.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Vingkin的学习博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Redis常见数据结构以及使用场景 string 介绍：虽然Reids是C语言编写的，但是其string底层并没有采用C的字符串，而是自己构建了一种简单动态字符串 常用命令：set，get，strlen，exists，decr，incr，setex等 应用场景：一般用于需要计数的场景，比如用户的访问次数，热点文章的点赞数和转发数等等 list 介绍：底层为双向链表 常用命令：rpush，lpush，rpop，lpop，lrange，llen等\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Vingkin\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-24T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-04-24T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-09-25T02:33:51.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Vingkin\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Redis常见数据结构以及使用场景\",\"slug\":\"redis常见数据结构以及使用场景\",\"link\":\"#redis常见数据结构以及使用场景\",\"children\":[]},{\"level\":2,\"title\":\"Redis到底是单线程还是多线程\",\"slug\":\"redis到底是单线程还是多线程\",\"link\":\"#redis到底是单线程还是多线程\",\"children\":[]},{\"level\":2,\"title\":\"Redis单线程为什么还快\",\"slug\":\"redis单线程为什么还快\",\"link\":\"#redis单线程为什么还快\",\"children\":[]},{\"level\":2,\"title\":\"Redis底层数据是如何用跳表来存储的\",\"slug\":\"redis底层数据是如何用跳表来存储的\",\"link\":\"#redis底层数据是如何用跳表来存储的\",\"children\":[]},{\"level\":2,\"title\":\"Redis Key过期了为什么内存没释放\",\"slug\":\"redis-key过期了为什么内存没释放\",\"link\":\"#redis-key过期了为什么内存没释放\",\"children\":[]},{\"level\":2,\"title\":\"过期数据删除策略\",\"slug\":\"过期数据删除策略\",\"link\":\"#过期数据删除策略\",\"children\":[]},{\"level\":2,\"title\":\"Redis Key没设置过期时间为什么被Redis主动删除了\",\"slug\":\"redis-key没设置过期时间为什么被redis主动删除了\",\"link\":\"#redis-key没设置过期时间为什么被redis主动删除了\",\"children\":[]},{\"level\":2,\"title\":\"Redis内存淘汰机制\",\"slug\":\"redis内存淘汰机制\",\"link\":\"#redis内存淘汰机制\",\"children\":[]},{\"level\":2,\"title\":\"删除Key的命令会阻塞Redis吗\",\"slug\":\"删除key的命令会阻塞redis吗\",\"link\":\"#删除key的命令会阻塞redis吗\",\"children\":[]},{\"level\":2,\"title\":\"Redis高可用方案\",\"slug\":\"redis高可用方案\",\"link\":\"#redis高可用方案\",\"children\":[{\"level\":3,\"title\":\"主从模式\",\"slug\":\"主从模式\",\"link\":\"#主从模式\",\"children\":[]},{\"level\":3,\"title\":\"哨兵模式\",\"slug\":\"哨兵模式\",\"link\":\"#哨兵模式\",\"children\":[]},{\"level\":3,\"title\":\"集群模式\",\"slug\":\"集群模式\",\"link\":\"#集群模式\",\"children\":[]}]},{\"level\":2,\"title\":\"Reids集群模式下数据hash分片算法\",\"slug\":\"reids集群模式下数据hash分片算法\",\"link\":\"#reids集群模式下数据hash分片算法\",\"children\":[]},{\"level\":2,\"title\":\"Redis执行命令出现死循环Bug\",\"slug\":\"redis执行命令出现死循环bug\",\"link\":\"#redis执行命令出现死循环bug\",\"children\":[]},{\"level\":2,\"title\":\"主从切换导致缓存雪崩具体场景\",\"slug\":\"主从切换导致缓存雪崩具体场景\",\"link\":\"#主从切换导致缓存雪崩具体场景\",\"children\":[]}],\"git\":{\"createdTime\":1695609231000,\"updatedTime\":1695609231000,\"contributors\":[{\"name\":\"Vingkin\",\"email\":\"1830053226@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":10.38,\"words\":3114},\"filePathRelative\":\"guide/interview/Redis.md\",\"localizedDate\":\"2022年4月24日\",\"excerpt\":\"<h2> Redis常见数据结构以及使用场景</h2>\\n<p><strong>string</strong></p>\\n<p>介绍：虽然Reids是C语言编写的，但是其string底层并没有采用C的字符串，而是自己构建了一种简单动态字符串</p>\\n<p>常用命令：<code>set，get，strlen，exists，decr，incr，setex</code>等</p>\\n<p>应用场景：一般用于需要计数的场景，比如用户的访问次数，热点文章的点赞数和转发数等等</p>\\n<p><strong>list</strong></p>\\n<p>介绍：底层为双向链表</p>\\n<p>常用命令：<code>rpush，lpush，rpop，lpop，lrange，llen</code>等</p>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
