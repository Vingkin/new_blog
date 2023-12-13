const e=JSON.parse('{"key":"v-4d746b4a","path":"/designmode/Template.html","title":"模板方法模式","lang":"zh-CN","frontmatter":{"title":"模板方法模式","author":"Vingkin","date":"2022-06-28T00:00:00.000Z","description":"概述 在面向对象程序设计过程中，程序员常常会遇到这种情况：设计一个系统时知道了算法所需的关键步骤，而且确定了这些步骤的执行顺序，但某些步骤的具体实现还未知，或者说某些步骤的实现与具体的环境相关。 例如，去银行办理业务一般要经过以下4个流程：取号、排队、办理具体业务、对银行工作人员进行评分等，其中取号、排队和对银行工作人员进行评分的业务对每个客户是一样的，可以在父类中实现，但是办理具体业务却因人而异，它可能是存款、取款或者转账等，可以延迟到子类中实现。 定义： 定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。","head":[["meta",{"property":"og:url","content":"https://vingkin.github.io/Blog/Blog/designmode/Template.html"}],["meta",{"property":"og:site_name","content":"Vingkin的学习博客"}],["meta",{"property":"og:title","content":"模板方法模式"}],["meta",{"property":"og:description","content":"概述 在面向对象程序设计过程中，程序员常常会遇到这种情况：设计一个系统时知道了算法所需的关键步骤，而且确定了这些步骤的执行顺序，但某些步骤的具体实现还未知，或者说某些步骤的实现与具体的环境相关。 例如，去银行办理业务一般要经过以下4个流程：取号、排队、办理具体业务、对银行工作人员进行评分等，其中取号、排队和对银行工作人员进行评分的业务对每个客户是一样的，可以在父类中实现，但是办理具体业务却因人而异，它可能是存款、取款或者转账等，可以延迟到子类中实现。 定义： 定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-25T02:59:31.000Z"}],["meta",{"property":"article:author","content":"Vingkin"}],["meta",{"property":"article:published_time","content":"2022-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-25T02:59:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模板方法模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-25T02:59:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Vingkin\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"案例实现","slug":"案例实现","link":"#案例实现","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":2,"title":"JDK源码解析","slug":"jdk源码解析","link":"#jdk源码解析","children":[]}],"git":{"createdTime":1695609231000,"updatedTime":1695610771000,"contributors":[{"name":"Vingkin","email":"1830053226@qq.com","commits":2}]},"readingTime":{"minutes":5.13,"words":1540},"filePathRelative":"designmode/Template.md","localizedDate":"2022年6月28日","excerpt":"<h2> 概述</h2>\\n<p>在面向对象程序设计过程中，程序员常常会遇到这种情况：设计一个系统时知道了算法所需的关键步骤，而且确定了这些步骤的执行顺序，但某些步骤的具体实现还未知，或者说某些步骤的实现与具体的环境相关。</p>\\n<p>例如，去银行办理业务一般要经过以下4个流程：取号、排队、办理具体业务、对银行工作人员进行评分等，其中取号、排队和对银行工作人员进行评分的业务对每个客户是一样的，可以在父类中实现，但是办理具体业务却因人而异，它可能是存款、取款或者转账等，可以延迟到子类中实现。</p>\\n<p><strong>定义：</strong></p>\\n<p>定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。</p>","copyright":{"author":"Vingkin"},"autoDesc":true}');export{e as data};