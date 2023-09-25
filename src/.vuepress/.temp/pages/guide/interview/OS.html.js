export const data = JSON.parse("{\"key\":\"v-5107ff7b\",\"path\":\"/guide/interview/OS.html\",\"title\":\"操作系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"操作系统\",\"author\":\"Vingkin\",\"date\":\"2022-04-24T00:00:00.000Z\",\"description\":\"操作系统IO介绍 再过60分钟你就能了解同步异步、阻塞非阻塞、IO多路复用、select、poll、epoll等概念啦 用户空间和内核空间（用户态和内核态） 现在的操作系统都是采用虚拟存储器，对于32位操作系统而言，他的寻址空间（虚拟存储空间）为4G(232)4G(2^{32})4G(232)。操作系统的核心是内核，独立于普通的应用程序，可以访问受保护的内存空间，也有访问底层硬件设备的所有权限。为了保证用户进程不能直接操作系统内核（kernel），保证内核的安全，操作系统将虚拟空间划分成两部分，一部分为内核空间，一部分为用户空间。针对linux操作系统而言，将最高的1G字节供内核使用，成为内核空间，而将较低的3G字节供各个进程使用，称为用户空间。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vingkin.github.io/Blog/Blog/guide/interview/OS.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Vingkin的学习博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"操作系统\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"操作系统IO介绍 再过60分钟你就能了解同步异步、阻塞非阻塞、IO多路复用、select、poll、epoll等概念啦 用户空间和内核空间（用户态和内核态） 现在的操作系统都是采用虚拟存储器，对于32位操作系统而言，他的寻址空间（虚拟存储空间）为4G(232)4G(2^{32})4G(232)。操作系统的核心是内核，独立于普通的应用程序，可以访问受保护的内存空间，也有访问底层硬件设备的所有权限。为了保证用户进程不能直接操作系统内核（kernel），保证内核的安全，操作系统将虚拟空间划分成两部分，一部分为内核空间，一部分为用户空间。针对linux操作系统而言，将最高的1G字节供内核使用，成为内核空间，而将较低的3G字节供各个进程使用，称为用户空间。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Vingkin\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-24T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"操作系统\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-04-24T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-09-25T02:33:51.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Vingkin\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"操作系统IO介绍\",\"slug\":\"操作系统io介绍\",\"link\":\"#操作系统io介绍\",\"children\":[{\"level\":3,\"title\":\"用户空间和内核空间（用户态和内核态）\",\"slug\":\"用户空间和内核空间-用户态和内核态\",\"link\":\"#用户空间和内核空间-用户态和内核态\",\"children\":[]},{\"level\":3,\"title\":\"文件描述符\",\"slug\":\"文件描述符\",\"link\":\"#文件描述符\",\"children\":[]},{\"level\":3,\"title\":\"缓存 I/O\",\"slug\":\"缓存-i-o\",\"link\":\"#缓存-i-o\",\"children\":[]},{\"level\":3,\"title\":\"I/O 模式\",\"slug\":\"i-o-模式\",\"link\":\"#i-o-模式\",\"children\":[]},{\"level\":3,\"title\":\"select、poll和epoll的区别\",\"slug\":\"select、poll和epoll的区别\",\"link\":\"#select、poll和epoll的区别\",\"children\":[]}]},{\"level\":2,\"title\":\"操作系统内存管理介绍\",\"slug\":\"操作系统内存管理介绍\",\"link\":\"#操作系统内存管理介绍\",\"children\":[{\"level\":3,\"title\":\"内存管理主要是做什么\",\"slug\":\"内存管理主要是做什么\",\"link\":\"#内存管理主要是做什么\",\"children\":[]},{\"level\":3,\"title\":\"常见的几种内存管理机制\",\"slug\":\"常见的几种内存管理机制\",\"link\":\"#常见的几种内存管理机制\",\"children\":[]},{\"level\":3,\"title\":\"逻辑地址和物理地址\",\"slug\":\"逻辑地址和物理地址\",\"link\":\"#逻辑地址和物理地址\",\"children\":[]},{\"level\":3,\"title\":\"为什么要有虚拟地址空间呢？\",\"slug\":\"为什么要有虚拟地址空间呢\",\"link\":\"#为什么要有虚拟地址空间呢\",\"children\":[]}]},{\"level\":2,\"title\":\"操作系统虚拟内存介绍\",\"slug\":\"操作系统虚拟内存介绍\",\"link\":\"#操作系统虚拟内存介绍\",\"children\":[{\"level\":3,\"title\":\"局部性原理\",\"slug\":\"局部性原理\",\"link\":\"#局部性原理\",\"children\":[]},{\"level\":3,\"title\":\"虚拟内存（虚拟存储器）\",\"slug\":\"虚拟内存-虚拟存储器\",\"link\":\"#虚拟内存-虚拟存储器\",\"children\":[]},{\"level\":3,\"title\":\"虚拟存储器的实现方法\",\"slug\":\"虚拟存储器的实现方法\",\"link\":\"#虚拟存储器的实现方法\",\"children\":[]},{\"level\":3,\"title\":\"页面置换算法\",\"slug\":\"页面置换算法\",\"link\":\"#页面置换算法\",\"children\":[]}]}],\"git\":{\"createdTime\":1695609231000,\"updatedTime\":1695609231000,\"contributors\":[{\"name\":\"Vingkin\",\"email\":\"1830053226@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":29.64,\"words\":8892},\"filePathRelative\":\"guide/interview/OS.md\",\"localizedDate\":\"2022年4月24日\",\"excerpt\":\"<h2> 操作系统IO介绍</h2>\\n<blockquote>\\n<p><a href=\\\"https://juejin.cn/post/6971291445147729950\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">再过60分钟你就能了解同步异步、阻塞非阻塞、IO多路复用、select、poll、epoll等概念啦</a></p>\\n</blockquote>\\n<h3> 用户空间和内核空间（用户态和内核态）</h3>\\n<p>现在的操作系统都是采用虚拟存储器，对于32位操作系统而言，他的寻址空间（虚拟存储空间）为<span class=\\\"katex\\\"><span class=\\\"katex-mathml\\\"><math xmlns=\\\"http://www.w3.org/1998/Math/MathML\\\"><semantics><mrow><mn>4</mn><mi>G</mi><mo stretchy=\\\"false\\\">(</mo><msup><mn>2</mn><mn>32</mn></msup><mo stretchy=\\\"false\\\">)</mo></mrow><annotation encoding=\\\"application/x-tex\\\">4G(2^{32})</annotation></semantics></math></span><span class=\\\"katex-html\\\" aria-hidden=\\\"true\\\"><span class=\\\"base\\\"><span class=\\\"strut\\\" style=\\\"height:1.0641em;vertical-align:-0.25em;\\\"></span><span class=\\\"mord\\\">4</span><span class=\\\"mord mathnormal\\\">G</span><span class=\\\"mopen\\\">(</span><span class=\\\"mord\\\"><span class=\\\"mord\\\">2</span><span class=\\\"msupsub\\\"><span class=\\\"vlist-t\\\"><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.8141em;\\\"><span style=\\\"top:-3.063em;margin-right:0.05em;\\\"><span class=\\\"pstrut\\\" style=\\\"height:2.7em;\\\"></span><span class=\\\"sizing reset-size6 size3 mtight\\\"><span class=\\\"mord mtight\\\"><span class=\\\"mord mtight\\\">32</span></span></span></span></span></span></span></span></span><span class=\\\"mclose\\\">)</span></span></span></span>。操作系统的核心是内核，独立于普通的应用程序，可以访问受保护的内存空间，也有访问底层硬件设备的所有权限。为了保证用户进程不能直接操作系统内核（kernel），保证内核的安全，操作系统将虚拟空间划分成两部分，一部分为内核空间，一部分为用户空间。针对linux操作系统而言，将最高的1G字节供内核使用，成为内核空间，而将较低的3G字节供各个进程使用，称为用户空间。</p>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

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
