export const data = JSON.parse("{\"key\":\"v-359fa3f2\",\"path\":\"/microservice/middleware/redis/RedisApp.html\",\"title\":\"Redis 实战\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis 实战\",\"author\":\"Vingkin\",\"date\":\"2023-09-21T00:00:00.000Z\",\"description\":\"目录 1、短信登录 1.1、导入黑马点评项目 1.1.1 、导入SQL 1653057872536 1.1.2、有关当前模型\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vingkin.github.io/Blog/microservice/middleware/redis/RedisApp.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Vingkin的学习博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis 实战\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"目录 1、短信登录 1.1、导入黑马点评项目 1.1.1 、导入SQL 1653057872536 1.1.2、有关当前模型\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Vingkin\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-09-21T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis 实战\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-09-21T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Vingkin\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1、短信登录\",\"slug\":\"_1、短信登录\",\"link\":\"#_1、短信登录\",\"children\":[{\"level\":3,\"title\":\"1.1、导入黑马点评项目\",\"slug\":\"_1-1、导入黑马点评项目\",\"link\":\"#_1-1、导入黑马点评项目\",\"children\":[]},{\"level\":3,\"title\":\"1.2 、基于Session实现登录流程\",\"slug\":\"_1-2-、基于session实现登录流程\",\"link\":\"#_1-2-、基于session实现登录流程\",\"children\":[]},{\"level\":3,\"title\":\"1.3 、实现发送短信验证码功能\",\"slug\":\"_1-3-、实现发送短信验证码功能\",\"link\":\"#_1-3-、实现发送短信验证码功能\",\"children\":[]},{\"level\":3,\"title\":\"1.4、实现登录拦截功能\",\"slug\":\"_1-4、实现登录拦截功能\",\"link\":\"#_1-4、实现登录拦截功能\",\"children\":[]},{\"level\":3,\"title\":\"1.5、隐藏用户敏感信息\",\"slug\":\"_1-5、隐藏用户敏感信息\",\"link\":\"#_1-5、隐藏用户敏感信息\",\"children\":[]},{\"level\":3,\"title\":\"1.6、session共享问题\",\"slug\":\"_1-6、session共享问题\",\"link\":\"#_1-6、session共享问题\",\"children\":[]},{\"level\":3,\"title\":\"1.7、Redis代替session的业务流程\",\"slug\":\"_1-7、redis代替session的业务流程\",\"link\":\"#_1-7、redis代替session的业务流程\",\"children\":[]},{\"level\":3,\"title\":\"1.8、基于Redis实现短信登录\",\"slug\":\"_1-8、基于redis实现短信登录\",\"link\":\"#_1-8、基于redis实现短信登录\",\"children\":[]},{\"level\":3,\"title\":\"1.9、解决状态登录刷新问题\",\"slug\":\"_1-9、解决状态登录刷新问题\",\"link\":\"#_1-9、解决状态登录刷新问题\",\"children\":[]}]},{\"level\":2,\"title\":\"2、商户查询缓存\",\"slug\":\"_2、商户查询缓存\",\"link\":\"#_2、商户查询缓存\",\"children\":[{\"level\":3,\"title\":\"2.1、什么是缓存?\",\"slug\":\"_2-1、什么是缓存\",\"link\":\"#_2-1、什么是缓存\",\"children\":[]},{\"level\":3,\"title\":\"2.2、添加商户缓存\",\"slug\":\"_2-2、添加商户缓存\",\"link\":\"#_2-2、添加商户缓存\",\"children\":[]},{\"level\":3,\"title\":\"2.3、缓存更新策略\",\"slug\":\"_2-3、缓存更新策略\",\"link\":\"#_2-3、缓存更新策略\",\"children\":[]},{\"level\":3,\"title\":\"2.4、实现商铺和缓存与数据库双写一致\",\"slug\":\"_2-4、实现商铺和缓存与数据库双写一致\",\"link\":\"#_2-4、实现商铺和缓存与数据库双写一致\",\"children\":[]},{\"level\":3,\"title\":\"2.5、缓存穿透问题的解决思路\",\"slug\":\"_2-5、缓存穿透问题的解决思路\",\"link\":\"#_2-5、缓存穿透问题的解决思路\",\"children\":[]},{\"level\":3,\"title\":\"2.6、编码解决商品查询的缓存穿透问题：\",\"slug\":\"_2-6、编码解决商品查询的缓存穿透问题\",\"link\":\"#_2-6、编码解决商品查询的缓存穿透问题\",\"children\":[]},{\"level\":3,\"title\":\"2.7、缓存雪崩问题及解决思路\",\"slug\":\"_2-7、缓存雪崩问题及解决思路\",\"link\":\"#_2-7、缓存雪崩问题及解决思路\",\"children\":[]},{\"level\":3,\"title\":\"2.8、缓存击穿问题及解决思路\",\"slug\":\"_2-8、缓存击穿问题及解决思路\",\"link\":\"#_2-8、缓存击穿问题及解决思路\",\"children\":[]},{\"level\":3,\"title\":\"2.9、利用互斥锁解决缓存击穿问题\",\"slug\":\"_2-9、利用互斥锁解决缓存击穿问题\",\"link\":\"#_2-9、利用互斥锁解决缓存击穿问题\",\"children\":[]},{\"level\":3,\"title\":\"2.10、利用逻辑过期解决缓存击穿问题\",\"slug\":\"_2-10、利用逻辑过期解决缓存击穿问题\",\"link\":\"#_2-10、利用逻辑过期解决缓存击穿问题\",\"children\":[]},{\"level\":3,\"title\":\"2.11、封装Redis工具类\",\"slug\":\"_2-11、封装redis工具类\",\"link\":\"#_2-11、封装redis工具类\",\"children\":[]}]},{\"level\":2,\"title\":\"3、优惠卷秒杀\",\"slug\":\"_3、优惠卷秒杀\",\"link\":\"#_3、优惠卷秒杀\",\"children\":[{\"level\":3,\"title\":\"3.1、全局唯一ID\",\"slug\":\"_3-1、全局唯一id\",\"link\":\"#_3-1、全局唯一id\",\"children\":[]},{\"level\":3,\"title\":\"3.2、Redis实现全局唯一Id\",\"slug\":\"_3-2、redis实现全局唯一id\",\"link\":\"#_3-2、redis实现全局唯一id\",\"children\":[]},{\"level\":3,\"title\":\"3.3、添加优惠卷\",\"slug\":\"_3-3、添加优惠卷\",\"link\":\"#_3-3、添加优惠卷\",\"children\":[]},{\"level\":3,\"title\":\"3.4、实现秒杀下单\",\"slug\":\"_3-4、实现秒杀下单\",\"link\":\"#_3-4、实现秒杀下单\",\"children\":[]},{\"level\":3,\"title\":\"3.5、库存超卖问题分析\",\"slug\":\"_3-5、库存超卖问题分析\",\"link\":\"#_3-5、库存超卖问题分析\",\"children\":[]},{\"level\":3,\"title\":\"3.6、乐观锁解决超卖问题\",\"slug\":\"_3-6、乐观锁解决超卖问题\",\"link\":\"#_3-6、乐观锁解决超卖问题\",\"children\":[]},{\"level\":3,\"title\":\"3.7、优惠券秒杀-一人一单\",\"slug\":\"_3-7、优惠券秒杀-一人一单\",\"link\":\"#_3-7、优惠券秒杀-一人一单\",\"children\":[]},{\"level\":3,\"title\":\"3.8、集群环境下的并发问题\",\"slug\":\"_3-8、集群环境下的并发问题\",\"link\":\"#_3-8、集群环境下的并发问题\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":49.05,\"words\":14716},\"filePathRelative\":\"microservice/middleware/redis/RedisApp.md\",\"localizedDate\":\"2023年9月21日\",\"excerpt\":\"<p><strong>目录</strong></p>\\n\\n<!--more-->\\n<h2> 1、短信登录</h2>\\n<h3> 1.1、导入黑马点评项目</h3>\\n<h4> 1.1.1 、导入SQL</h4>\\n<figure><img src=\\\"https://vingkin-1304361015.cos.ap-shanghai.myqcloud.com/img/1653057872536.png\\\" alt=\\\"1653057872536\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>1653057872536</figcaption></figure>\\n<h4> 1.1.2、有关当前模型</h4>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

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