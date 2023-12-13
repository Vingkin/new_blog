export const data = JSON.parse("{\"key\":\"v-48882988\",\"path\":\"/guide/interview/concurrent.html\",\"title\":\"Java并发\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java并发\",\"author\":\"Vingkin\",\"date\":\"2022-04-24T00:00:00.000Z\",\"description\":\"start()和run() start()和run()都是Thread类的方法（如果用的是Runnable则执行的是Runnable中的run方法，注意Callable中的是call方法） start是启动线程作用是将线程变为就绪状态，至于是否调用还是得看CPU的分配。run是一个线程的具体执行内容，线程启动后自动调用。 如果在main线程中调用了t1线程的run方法，就相当于main线程运行了一个普通的run方法，并没能达到多线程的效果 strat只能调用一次，多次调用会抛IllegalThreadStateException异常\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vingkin.github.io/Blog/Blog/guide/interview/concurrent.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Vingkin的学习博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java并发\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"start()和run() start()和run()都是Thread类的方法（如果用的是Runnable则执行的是Runnable中的run方法，注意Callable中的是call方法） start是启动线程作用是将线程变为就绪状态，至于是否调用还是得看CPU的分配。run是一个线程的具体执行内容，线程启动后自动调用。 如果在main线程中调用了t1线程的run方法，就相当于main线程运行了一个普通的run方法，并没能达到多线程的效果 strat只能调用一次，多次调用会抛IllegalThreadStateException异常\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Vingkin\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-24T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-09-25T02:33:51.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java并发\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-04-24T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-09-25T02:33:51.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Vingkin\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"start()和run()\",\"slug\":\"start-和run\",\"link\":\"#start-和run\",\"children\":[]},{\"level\":2,\"title\":\"sleep()与yield()\",\"slug\":\"sleep-与yield\",\"link\":\"#sleep-与yield\",\"children\":[]},{\"level\":2,\"title\":\"interrupt()\",\"slug\":\"interrupt\",\"link\":\"#interrupt\",\"children\":[]},{\"level\":2,\"title\":\"线程优先级\",\"slug\":\"线程优先级\",\"link\":\"#线程优先级\",\"children\":[]},{\"level\":2,\"title\":\"两阶段终止模式\",\"slug\":\"两阶段终止模式\",\"link\":\"#两阶段终止模式\",\"children\":[]},{\"level\":2,\"title\":\"守护线程\",\"slug\":\"守护线程\",\"link\":\"#守护线程\",\"children\":[]},{\"level\":2,\"title\":\"线程状态\",\"slug\":\"线程状态\",\"link\":\"#线程状态\",\"children\":[]},{\"level\":2,\"title\":\"变量的线程安全分析\",\"slug\":\"变量的线程安全分析\",\"link\":\"#变量的线程安全分析\",\"children\":[]},{\"level\":2,\"title\":\"对象头\",\"slug\":\"对象头\",\"link\":\"#对象头\",\"children\":[]},{\"level\":2,\"title\":\"Monitor原理\",\"slug\":\"monitor原理\",\"link\":\"#monitor原理\",\"children\":[]},{\"level\":2,\"title\":\"自旋优化\",\"slug\":\"自旋优化\",\"link\":\"#自旋优化\",\"children\":[]},{\"level\":2,\"title\":\"轻量级锁\",\"slug\":\"轻量级锁\",\"link\":\"#轻量级锁\",\"children\":[]},{\"level\":2,\"title\":\"偏向锁\",\"slug\":\"偏向锁\",\"link\":\"#偏向锁\",\"children\":[]},{\"level\":2,\"title\":\"wait()和notify()\",\"slug\":\"wait-和notify\",\"link\":\"#wait-和notify\",\"children\":[]},{\"level\":2,\"title\":\"sleep()和wait()的区别\",\"slug\":\"sleep-和wait-的区别\",\"link\":\"#sleep-和wait-的区别\",\"children\":[]},{\"level\":2,\"title\":\"保护性暂停模式\",\"slug\":\"保护性暂停模式\",\"link\":\"#保护性暂停模式\",\"children\":[]},{\"level\":2,\"title\":\"生产者消费者模式\",\"slug\":\"生产者消费者模式\",\"link\":\"#生产者消费者模式\",\"children\":[]},{\"level\":2,\"title\":\"park()和unpark()\",\"slug\":\"park-和unpark\",\"link\":\"#park-和unpark\",\"children\":[]},{\"level\":2,\"title\":\"死锁，活锁，饥饿\",\"slug\":\"死锁-活锁-饥饿\",\"link\":\"#死锁-活锁-饥饿\",\"children\":[{\"level\":3,\"title\":\"死锁\",\"slug\":\"死锁\",\"link\":\"#死锁\",\"children\":[]},{\"level\":3,\"title\":\"活锁\",\"slug\":\"活锁\",\"link\":\"#活锁\",\"children\":[]},{\"level\":3,\"title\":\"饥饿\",\"slug\":\"饥饿\",\"link\":\"#饥饿\",\"children\":[]}]},{\"level\":2,\"title\":\"固定线程运行顺序\",\"slug\":\"固定线程运行顺序\",\"link\":\"#固定线程运行顺序\",\"children\":[]},{\"level\":2,\"title\":\"线程交替输出\",\"slug\":\"线程交替输出\",\"link\":\"#线程交替输出\",\"children\":[]},{\"level\":2,\"title\":\"并发编程的三大特性\",\"slug\":\"并发编程的三大特性\",\"link\":\"#并发编程的三大特性\",\"children\":[]},{\"level\":2,\"title\":\"volatile原理\",\"slug\":\"volatile原理\",\"link\":\"#volatile原理\",\"children\":[]},{\"level\":2,\"title\":\"volatile和synchronized\",\"slug\":\"volatile和synchronized\",\"link\":\"#volatile和synchronized\",\"children\":[]},{\"level\":2,\"title\":\"volatile和synchronized在有序性上的不同\",\"slug\":\"volatile和synchronized在有序性上的不同\",\"link\":\"#volatile和synchronized在有序性上的不同\",\"children\":[]},{\"level\":2,\"title\":\"i++是否线程安全\",\"slug\":\"i-是否线程安全\",\"link\":\"#i-是否线程安全\",\"children\":[]},{\"level\":2,\"title\":\"CAS的特点\",\"slug\":\"cas的特点\",\"link\":\"#cas的特点\",\"children\":[]},{\"level\":2,\"title\":\"Atomic原子类\",\"slug\":\"atomic原子类\",\"link\":\"#atomic原子类\",\"children\":[]},{\"level\":2,\"title\":\"原子引用ABA问题\",\"slug\":\"原子引用aba问题\",\"link\":\"#原子引用aba问题\",\"children\":[]},{\"level\":2,\"title\":\"LongAdder原理\",\"slug\":\"longadder原理\",\"link\":\"#longadder原理\",\"children\":[]},{\"level\":2,\"title\":\"Unsafe\",\"slug\":\"unsafe\",\"link\":\"#unsafe\",\"children\":[]},{\"level\":2,\"title\":\"不可变类\",\"slug\":\"不可变类\",\"link\":\"#不可变类\",\"children\":[]},{\"level\":2,\"title\":\"final原理\",\"slug\":\"final原理\",\"link\":\"#final原理\",\"children\":[]},{\"level\":2,\"title\":\"享元模式\",\"slug\":\"享元模式\",\"link\":\"#享元模式\",\"children\":[]},{\"level\":2,\"title\":\"线程池\",\"slug\":\"线程池\",\"link\":\"#线程池\",\"children\":[{\"level\":3,\"title\":\"线程池的好处\",\"slug\":\"线程池的好处\",\"link\":\"#线程池的好处\",\"children\":[]},{\"level\":3,\"title\":\"线程池状态\",\"slug\":\"线程池状态\",\"link\":\"#线程池状态\",\"children\":[]},{\"level\":3,\"title\":\"ThreadPoolExecutor参数\",\"slug\":\"threadpoolexecutor参数\",\"link\":\"#threadpoolexecutor参数\",\"children\":[]},{\"level\":3,\"title\":\"拒绝策略\",\"slug\":\"拒绝策略\",\"link\":\"#拒绝策略\",\"children\":[]},{\"level\":3,\"title\":\"Executors创建的线程池\",\"slug\":\"executors创建的线程池\",\"link\":\"#executors创建的线程池\",\"children\":[]},{\"level\":3,\"title\":\"执行 execute()方法和 submit()方法的区别是什么呢？\",\"slug\":\"执行-execute-方法和-submit-方法的区别是什么呢\",\"link\":\"#执行-execute-方法和-submit-方法的区别是什么呢\",\"children\":[]},{\"level\":3,\"title\":\"线程池创建多少线程合适\",\"slug\":\"线程池创建多少线程合适\",\"link\":\"#线程池创建多少线程合适\",\"children\":[]}]},{\"level\":2,\"title\":\"ThreadLocal\",\"slug\":\"threadlocal\",\"link\":\"#threadlocal\",\"children\":[]},{\"level\":2,\"title\":\"CopyOnWriteArrayList\",\"slug\":\"copyonwritearraylist\",\"link\":\"#copyonwritearraylist\",\"children\":[]},{\"level\":2,\"title\":\"ConcurrentHashMap\",\"slug\":\"concurrenthashmap\",\"link\":\"#concurrenthashmap\",\"children\":[]},{\"level\":2,\"title\":\"AQS\",\"slug\":\"aqs\",\"link\":\"#aqs\",\"children\":[{\"level\":3,\"title\":\"AQS是什么\",\"slug\":\"aqs是什么\",\"link\":\"#aqs是什么\",\"children\":[]},{\"level\":3,\"title\":\"状态变量state\",\"slug\":\"状态变量state\",\"link\":\"#状态变量state\",\"children\":[]},{\"level\":3,\"title\":\"AQS队列\",\"slug\":\"aqs队列\",\"link\":\"#aqs队列\",\"children\":[]},{\"level\":3,\"title\":\"Condition队列\",\"slug\":\"condition队列\",\"link\":\"#condition队列\",\"children\":[]},{\"level\":3,\"title\":\"模板方法\",\"slug\":\"模板方法\",\"link\":\"#模板方法\",\"children\":[]}]},{\"level\":2,\"title\":\"ReentrantLock\",\"slug\":\"reentrantlock\",\"link\":\"#reentrantlock\",\"children\":[{\"level\":3,\"title\":\"ReentrantLock与Synchronized的区别\",\"slug\":\"reentrantlock与synchronized的区别\",\"link\":\"#reentrantlock与synchronized的区别\",\"children\":[]},{\"level\":3,\"title\":\"ReentrantLock的公平锁和非公平锁\",\"slug\":\"reentrantlock的公平锁和非公平锁\",\"link\":\"#reentrantlock的公平锁和非公平锁\",\"children\":[]}]},{\"level\":2,\"title\":\"ReentrantReadWriteLock\",\"slug\":\"reentrantreadwritelock\",\"link\":\"#reentrantreadwritelock\",\"children\":[]},{\"level\":2,\"title\":\"StampedLock\",\"slug\":\"stampedlock\",\"link\":\"#stampedlock\",\"children\":[]},{\"level\":2,\"title\":\"Semaphore\",\"slug\":\"semaphore\",\"link\":\"#semaphore\",\"children\":[]},{\"level\":2,\"title\":\"CountdownLatch\",\"slug\":\"countdownlatch\",\"link\":\"#countdownlatch\",\"children\":[]},{\"level\":2,\"title\":\"Cyclicbarrier\",\"slug\":\"cyclicbarrier\",\"link\":\"#cyclicbarrier\",\"children\":[]}],\"git\":{\"createdTime\":1695609231000,\"updatedTime\":1695609231000,\"contributors\":[{\"name\":\"Vingkin\",\"email\":\"1830053226@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":41.96,\"words\":12587},\"filePathRelative\":\"guide/interview/concurrent.md\",\"localizedDate\":\"2022年4月24日\",\"excerpt\":\"<h2> start()和run()</h2>\\n<ol>\\n<li>start()和run()都是Thread类的方法（如果用的是Runnable则执行的是Runnable中的run方法，注意Callable中的是call方法）</li>\\n<li>start是启动线程作用是将线程变为就绪状态，至于是否调用还是得看CPU的分配。run是一个线程的具体执行内容，线程启动后自动调用。</li>\\n<li>如果在main线程中调用了t1线程的run方法，就相当于main线程运行了一个普通的run方法，并没能达到多线程的效果</li>\\n<li>strat只能调用一次，多次调用会抛<code>IllegalThreadStateException</code>异常</li>\\n</ol>\",\"copyright\":{\"author\":\"Vingkin\"},\"autoDesc\":true}")

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