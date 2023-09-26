export const data = JSON.parse("{\"key\":\"v-4d3a322d\",\"path\":\"/guide/interview/distributed/SnowFlake.html\",\"title\":\"雪花算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"雪花算法\",\"author\":\"Vingkin\",\"date\":\"2022-06-05T00:00:00.000Z\",\"description\":\"SnowFlake 雪花算法详解与实现 背景 现在的服务基本是分布式，微服务形式的，而且大数据量也导致分库分表的产生，对于水平分表就需要保证表中 id 的全局唯一性。 对于 MySQL 而言，一个表中的主键 id 一般使用自增的方式，但是如果进行水平分表之后，多个表中会生成重复的 id 值。那么如何保证水平分表后的多张表中的 id 是全局唯一性的呢？\"},\"headers\":[{\"level\":2,\"title\":\"背景\",\"slug\":\"背景\",\"link\":\"#背景\",\"children\":[]},{\"level\":2,\"title\":\"SnowFlake 雪花算法\",\"slug\":\"snowflake-雪花算法\",\"link\":\"#snowflake-雪花算法\",\"children\":[{\"level\":3,\"title\":\"算法实现\",\"slug\":\"算法实现\",\"link\":\"#算法实现\",\"children\":[]},{\"level\":3,\"title\":\"算法优缺点\",\"slug\":\"算法优缺点\",\"link\":\"#算法优缺点\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":6.52,\"words\":1957},\"filePathRelative\":\"guide/interview/distributed/SnowFlake.md\",\"localizedDate\":\"2022年6月5日\",\"excerpt\":\"<blockquote>\\n<p><a href=\\\"https://bbs.huaweicloud.com/blogs/344958\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">SnowFlake 雪花算法详解与实现</a></p>\\n</blockquote>\\n<h2> 背景</h2>\\n<p>现在的服务基本是分布式，微服务形式的，而且大数据量也导致分库分表的产生，对于水平分表就需要保证表中 id 的全局唯一性。</p>\\n<p>对于 MySQL 而言，一个表中的主键 id 一般使用自增的方式，但是如果进行水平分表之后，多个表中会生成重复的 id 值。那么如何保证水平分表后的多张表中的 id 是全局唯一性的呢？</p>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

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
