export const data = JSON.parse("{\"key\":\"v-af5f216c\",\"path\":\"/microservice/middleware/kafka/kakfa.html\",\"title\":\"Kafka\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Kafka\",\"author\":\"Vingkin\",\"date\":\"2023-10-17T00:00:00.000Z\",\"description\":\"目录 Kafka简介 消息队列 消息队列——用于存放消息的组件 程序员可以将消息放入到队列中，也可以从消息队列中获取消息 很多时候消息队列不是一个永久性的存储，是作为临时存储存在的（设定一个期限：设置消息在MQ中保存10天） 消息队列中间件：消息队列的组件，例如：Kafka、Active MQ、RabbitMQ、RocketMQ、ZeroMQ Kafka的应用场景 异步处理 可以将一些比较耗时的操作放在其他系统中，通过消息队列将需要进行处理的消息进行存储，其他系统可以消费消息队列中的数据 比较常见的：发送短信验证码、发送邮件（可以用此对之前Redis用户注册部分进行改进）\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vingkin.github.io/Blog/Blog/microservice/middleware/kafka/kakfa.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Vingkin的学习博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Kafka\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"目录 Kafka简介 消息队列 消息队列——用于存放消息的组件 程序员可以将消息放入到队列中，也可以从消息队列中获取消息 很多时候消息队列不是一个永久性的存储，是作为临时存储存在的（设定一个期限：设置消息在MQ中保存10天） 消息队列中间件：消息队列的组件，例如：Kafka、Active MQ、RabbitMQ、RocketMQ、ZeroMQ Kafka的应用场景 异步处理 可以将一些比较耗时的操作放在其他系统中，通过消息队列将需要进行处理的消息进行存储，其他系统可以消费消息队列中的数据 比较常见的：发送短信验证码、发送邮件（可以用此对之前Redis用户注册部分进行改进）\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Vingkin\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-17T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Kafka\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-10-17T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Vingkin\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Kafka简介\",\"slug\":\"kafka简介\",\"link\":\"#kafka简介\",\"children\":[{\"level\":3,\"title\":\"消息队列\",\"slug\":\"消息队列\",\"link\":\"#消息队列\",\"children\":[]},{\"level\":3,\"title\":\"Kafka的应用场景\",\"slug\":\"kafka的应用场景\",\"link\":\"#kafka的应用场景\",\"children\":[]},{\"level\":3,\"title\":\"消息队列的两种模型\",\"slug\":\"消息队列的两种模型\",\"link\":\"#消息队列的两种模型\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka 环境搭建\",\"slug\":\"kafka-环境搭建\",\"link\":\"#kafka-环境搭建\",\"children\":[{\"level\":3,\"title\":\"搭建 Kafka 环境\",\"slug\":\"搭建-kafka-环境\",\"link\":\"#搭建-kafka-环境\",\"children\":[]},{\"level\":3,\"title\":\"目录结构分析\",\"slug\":\"目录结构分析\",\"link\":\"#目录结构分析\",\"children\":[]}]},{\"level\":2,\"title\":\"基础操作\",\"slug\":\"基础操作\",\"link\":\"#基础操作\",\"children\":[{\"level\":3,\"title\":\"创建topic\",\"slug\":\"创建topic\",\"link\":\"#创建topic\",\"children\":[]},{\"level\":3,\"title\":\"生产消息到Kafka\",\"slug\":\"生产消息到kafka\",\"link\":\"#生产消息到kafka\",\"children\":[]},{\"level\":3,\"title\":\"从Kafka消费消息\",\"slug\":\"从kafka消费消息\",\"link\":\"#从kafka消费消息\",\"children\":[]},{\"level\":3,\"title\":\"Kafka Tool\",\"slug\":\"kafka-tool\",\"link\":\"#kafka-tool\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka基准测试\",\"slug\":\"kafka基准测试\",\"link\":\"#kafka基准测试\",\"children\":[{\"level\":3,\"title\":\"创建topic\",\"slug\":\"创建topic-1\",\"link\":\"#创建topic-1\",\"children\":[]},{\"level\":3,\"title\":\"生产消息基准测试\",\"slug\":\"生产消息基准测试\",\"link\":\"#生产消息基准测试\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka Java API开发\",\"slug\":\"kafka-java-api开发\",\"link\":\"#kafka-java-api开发\",\"children\":[{\"level\":3,\"title\":\"生产者程序开发\",\"slug\":\"生产者程序开发\",\"link\":\"#生产者程序开发\",\"children\":[]},{\"level\":3,\"title\":\"消费者程序开发\",\"slug\":\"消费者程序开发\",\"link\":\"#消费者程序开发\",\"children\":[]},{\"level\":3,\"title\":\"生产者使用异步方式生产消息\",\"slug\":\"生产者使用异步方式生产消息\",\"link\":\"#生产者使用异步方式生产消息\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka中的重要概念\",\"slug\":\"kafka中的重要概念\",\"link\":\"#kafka中的重要概念\",\"children\":[]},{\"level\":2,\"title\":\"幂等性\",\"slug\":\"幂等性\",\"link\":\"#幂等性\",\"children\":[{\"level\":3,\"title\":\"配置幂等性\",\"slug\":\"配置幂等性\",\"link\":\"#配置幂等性\",\"children\":[]},{\"level\":3,\"title\":\"幂等性原理\",\"slug\":\"幂等性原理\",\"link\":\"#幂等性原理\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka中的分区副本机制\",\"slug\":\"kafka中的分区副本机制\",\"link\":\"#kafka中的分区副本机制\",\"children\":[{\"level\":3,\"title\":\"生产者的分区写入策略\",\"slug\":\"生产者的分区写入策略\",\"link\":\"#生产者的分区写入策略\",\"children\":[]},{\"level\":3,\"title\":\"消费组 Rebalance 机制\",\"slug\":\"消费组-rebalance-机制\",\"link\":\"#消费组-rebalance-机制\",\"children\":[]},{\"level\":3,\"title\":\"消费者的分区分配策略\",\"slug\":\"消费者的分区分配策略\",\"link\":\"#消费者的分区分配策略\",\"children\":[]},{\"level\":3,\"title\":\"副本的ACK机制\",\"slug\":\"副本的ack机制\",\"link\":\"#副本的ack机制\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka-Eagle\",\"slug\":\"kafka-eagle\",\"link\":\"#kafka-eagle\",\"children\":[{\"level\":3,\"title\":\"开启 JMX 端口\",\"slug\":\"开启-jmx-端口\",\"link\":\"#开启-jmx-端口\",\"children\":[]},{\"level\":3,\"title\":\"安装Kafka-Eagle\",\"slug\":\"安装kafka-eagle\",\"link\":\"#安装kafka-eagle\",\"children\":[]}]},{\"level\":2,\"title\":\"Kafka原理（TODO）\",\"slug\":\"kafka原理-todo\",\"link\":\"#kafka原理-todo\",\"children\":[{\"level\":3,\"title\":\"leader和follower\",\"slug\":\"leader和follower\",\"link\":\"#leader和follower\",\"children\":[]},{\"level\":3,\"title\":\"AR\\\\ISR\\\\OSR\",\"slug\":\"ar-isr-osr\",\"link\":\"#ar-isr-osr\",\"children\":[]},{\"level\":3,\"title\":\"leader选举\",\"slug\":\"leader选举\",\"link\":\"#leader选举\",\"children\":[]},{\"level\":3,\"title\":\"Kafka读写流程\",\"slug\":\"kafka读写流程\",\"link\":\"#kafka读写流程\",\"children\":[]},{\"level\":3,\"title\":\"Kafka的物理存储\",\"slug\":\"kafka的物理存储\",\"link\":\"#kafka的物理存储\",\"children\":[]},{\"level\":3,\"title\":\"消息传递的语义性\",\"slug\":\"消息传递的语义性\",\"link\":\"#消息传递的语义性\",\"children\":[]},{\"level\":3,\"title\":\"Kafka的消息不丢失\",\"slug\":\"kafka的消息不丢失\",\"link\":\"#kafka的消息不丢失\",\"children\":[]},{\"level\":3,\"title\":\"数据积压\",\"slug\":\"数据积压\",\"link\":\"#数据积压\",\"children\":[]},{\"level\":3,\"title\":\"数据清理&配额限速\",\"slug\":\"数据清理-配额限速\",\"link\":\"#数据清理-配额限速\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":20.09,\"words\":6027},\"filePathRelative\":\"microservice/middleware/kafka/kakfa.md\",\"localizedDate\":\"2023年10月17日\",\"excerpt\":\"<p><strong>目录</strong></p>\\n\\n<!--more-->\\n<h2> Kafka简介</h2>\\n<h3> 消息队列</h3>\\n<ul>\\n<li>消息队列——用于存放消息的组件</li>\\n<li>程序员可以将消息放入到队列中，也可以从消息队列中获取消息</li>\\n<li>很多时候消息队列不是一个永久性的存储，是作为临时存储存在的（设定一个期限：设置消息在MQ中保存10天）</li>\\n<li>消息队列中间件：消息队列的组件，例如：Kafka、Active MQ、RabbitMQ、RocketMQ、ZeroMQ</li>\\n</ul>\\n<h3> Kafka的应用场景</h3>\\n<ul>\\n<li>异步处理\\n<ul>\\n<li>可以将一些比较耗时的操作放在其他系统中，通过消息队列将需要进行处理的消息进行存储，其他系统可以消费消息队列中的数据</li>\\n<li>比较常见的：发送短信验证码、发送邮件（可以用此对之前Redis用户注册部分进行改进）</li>\\n</ul>\\n</li>\\n</ul>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

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