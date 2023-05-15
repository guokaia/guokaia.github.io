const e=JSON.parse('{"key":"v-07729138","path":"/article/SpringBoot-Run-Method-Process.html","title":"SpringBoot框架run()执行流程","lang":"zh-CN","frontmatter":{"title":"SpringBoot框架run()执行流程","icon":"note","isOriginal":true,"date":"2023-04-26T00:00:00.000Z","tag":["Spring Boot","开发笔记"],"category":"Java","description":"SpringBoot框架run函数执行流程 记录启动时间 createBootstrapContext(): 创建启动上下文 创建一个 DefaultBootstrapContext 对象 执行所有注册的 BootstrapRegistryInitializer 对象","head":[["meta",{"property":"og:url","content":"https://guocay.github.io/article/SpringBoot-Run-Method-Process.html"}],["meta",{"property":"og:site_name","content":"GuoCay"}],["meta",{"property":"og:title","content":"SpringBoot框架run()执行流程"}],["meta",{"property":"og:description","content":"SpringBoot框架run函数执行流程 记录启动时间 createBootstrapContext(): 创建启动上下文 创建一个 DefaultBootstrapContext 对象 执行所有注册的 BootstrapRegistryInitializer 对象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-13T09:45:13.000Z"}],["meta",{"property":"article:author","content":"GuoCay"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"开发笔记"}],["meta",{"property":"article:published_time","content":"2023-04-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-13T09:45:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot框架run()执行流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-13T09:45:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GuoCay\\",\\"email\\":\\"guocay@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"记录启动时间","slug":"记录启动时间","link":"#记录启动时间","children":[]},{"level":2,"title":"createBootstrapContext(): 创建启动上下文","slug":"createbootstrapcontext-创建启动上下文","link":"#createbootstrapcontext-创建启动上下文","children":[]},{"level":2,"title":"configureHeadlessProperty(): 配置属性","slug":"configureheadlessproperty-配置属性","link":"#configureheadlessproperty-配置属性","children":[]},{"level":2,"title":"getRunListeners(): 获取运行的监听器","slug":"getrunlisteners-获取运行的监听器","link":"#getrunlisteners-获取运行的监听器","children":[]},{"level":2,"title":"监听器 Starting事件","slug":"监听器-starting事件","link":"#监听器-starting事件","children":[]},{"level":2,"title":"包装启动参数为 DefaultApplicationArguments对象","slug":"包装启动参数为-defaultapplicationarguments对象","link":"#包装启动参数为-defaultapplicationarguments对象","children":[]},{"level":2,"title":"prepareEnvironment(): 准备环境","slug":"prepareenvironment-准备环境","link":"#prepareenvironment-准备环境","children":[{"level":3,"title":"getOrCreateEnvironment(): 获取或创建环境","slug":"getorcreateenvironment-获取或创建环境","link":"#getorcreateenvironment-获取或创建环境","children":[]},{"level":3,"title":"configureEnvironment(): 配置环境","slug":"configureenvironment-配置环境","link":"#configureenvironment-配置环境","children":[]},{"level":3,"title":"ConfigurationPropertySources.attach(): 为环境添加附加源","slug":"configurationpropertysources-attach-为环境添加附加源","link":"#configurationpropertysources-attach-为环境添加附加源","children":[]},{"level":3,"title":"environmentPrepared(): 监听器 环境就绪事件","slug":"environmentprepared-监听器-环境就绪事件","link":"#environmentprepared-监听器-环境就绪事件","children":[]},{"level":3,"title":"DefaultPropertiesPropertySource.moveToEnd(): 移动默认属性","slug":"defaultpropertiespropertysource-movetoend-移动默认属性","link":"#defaultpropertiespropertysource-movetoend-移动默认属性","children":[]},{"level":3,"title":"断言 是否包含 spring.main.environment-prefix","slug":"断言-是否包含-spring-main-environment-prefix","link":"#断言-是否包含-spring-main-environment-prefix","children":[]},{"level":3,"title":"bindToSpringApplication(): 将环境绑定到SpringApplication","slug":"bindtospringapplication-将环境绑定到springapplication","link":"#bindtospringapplication-将环境绑定到springapplication","children":[]},{"level":3,"title":"如果不是自定义的环境, 就创建一个 EnvironmentConverter 对象 将环境转换为 environmentStandardEnvironment, 如果必要","slug":"如果不是自定义的环境-就创建一个-environmentconverter-对象-将环境转换为-environmentstandardenvironment-如果必要","link":"#如果不是自定义的环境-就创建一个-environmentconverter-对象-将环境转换为-environmentstandardenvironment-如果必要","children":[]},{"level":3,"title":"ConfigurationPropertySources.attach(): 再次为环境添加附加源","slug":"configurationpropertysources-attach-再次为环境添加附加源","link":"#configurationpropertysources-attach-再次为环境添加附加源","children":[]}]},{"level":2,"title":"configureIgnoreBeanInfo(): 配置忽略的bean信息","slug":"configureignorebeaninfo-配置忽略的bean信息","link":"#configureignorebeaninfo-配置忽略的bean信息","children":[]},{"level":2,"title":"printBanner(): 准备 Banner 信息","slug":"printbanner-准备-banner-信息","link":"#printbanner-准备-banner-信息","children":[]},{"level":2,"title":"createApplicationContext(): 创建应用上下文","slug":"createapplicationcontext-创建应用上下文","link":"#createapplicationcontext-创建应用上下文","children":[]},{"level":2,"title":"设置启动步骤","slug":"设置启动步骤","link":"#设置启动步骤","children":[]},{"level":2,"title":"prepareContext(): 准备上下文","slug":"preparecontext-准备上下文","link":"#preparecontext-准备上下文","children":[{"level":3,"title":"设置 context 的环境","slug":"设置-context-的环境","link":"#设置-context-的环境","children":[]},{"level":3,"title":"postProcessApplicationContext(): 应用上下文的后置处理;","slug":"postprocessapplicationcontext-应用上下文的后置处理","link":"#postprocessapplicationcontext-应用上下文的后置处理","children":[]},{"level":3,"title":"applyInitializers(): 执行 初始化回调","slug":"applyinitializers-执行-初始化回调","link":"#applyinitializers-执行-初始化回调","children":[]},{"level":3,"title":"监听器 上下文就绪事件","slug":"监听器-上下文就绪事件","link":"#监听器-上下文就绪事件","children":[]},{"level":3,"title":"DefaultBootstrapContext.close(): 关闭启动上下文","slug":"defaultbootstrapcontext-close-关闭启动上下文","link":"#defaultbootstrapcontext-close-关闭启动上下文","children":[]},{"level":3,"title":"判断是否打印启动信息, 是则打印 是否主容器 和 配置信息","slug":"判断是否打印启动信息-是则打印-是否主容器-和-配置信息","link":"#判断是否打印启动信息-是则打印-是否主容器-和-配置信息","children":[]},{"level":3,"title":"在BeanFactory中注册 ApplicationArguments(启动参数的封装) 实例,","slug":"在beanfactory中注册-applicationarguments-启动参数的封装-实例","link":"#在beanfactory中注册-applicationarguments-启动参数的封装-实例","children":[]},{"level":3,"title":"如果存在 Banner对象, 则注册到 BeanFactory中.","slug":"如果存在-banner对象-则注册到-beanfactory中","link":"#如果存在-banner对象-则注册到-beanfactory中","children":[]},{"level":3,"title":"判断如果BeanFactory是AbstractAutowireCapableBeanFactory的实例,则设置允许循环引用为 allowCircularReferences 属性的值","slug":"判断如果beanfactory是abstractautowirecapablebeanfactory的实例-则设置允许循环引用为-allowcircularreferences-属性的值","link":"#判断如果beanfactory是abstractautowirecapablebeanfactory的实例-则设置允许循环引用为-allowcircularreferences-属性的值","children":[]},{"level":3,"title":"判断如果BeanFactory是 DefaultListableBeanFactory 的实例, 则设置允许Bean定义覆盖为 allowBeanDefinitionOverriding属性的值","slug":"判断如果beanfactory是-defaultlistablebeanfactory-的实例-则设置允许bean定义覆盖为-allowbeandefinitionoverriding属性的值","link":"#判断如果beanfactory是-defaultlistablebeanfactory-的实例-则设置允许bean定义覆盖为-allowbeandefinitionoverriding属性的值","children":[]},{"level":3,"title":"判断如果 lazyInitialization 属性的值为true, 为上下文设置一个 LazyInitializationBeanFactoryPostProcessor 实例","slug":"判断如果-lazyinitialization-属性的值为true-为上下文设置一个-lazyinitializationbeanfactorypostprocessor-实例","link":"#判断如果-lazyinitialization-属性的值为true-为上下文设置一个-lazyinitializationbeanfactorypostprocessor-实例","children":[]},{"level":3,"title":"为上下文添加一个 PropertySourceOrderingBeanFactoryPostProcessor 实例","slug":"为上下文添加一个-propertysourceorderingbeanfactorypostprocessor-实例","link":"#为上下文添加一个-propertysourceorderingbeanfactorypostprocessor-实例","children":[]},{"level":3,"title":"getAllSources(): 获取所有资源","slug":"getallsources-获取所有资源","link":"#getallsources-获取所有资源","children":[]},{"level":3,"title":"断言 上一步获取的资源不得为空.","slug":"断言-上一步获取的资源不得为空","link":"#断言-上一步获取的资源不得为空","children":[]},{"level":3,"title":"load(): 加载上上步中获取的资源","slug":"load-加载上上步中获取的资源","link":"#load-加载上上步中获取的资源","children":[]},{"level":3,"title":"监听器 上下文加载完成事件","slug":"监听器-上下文加载完成事件","link":"#监听器-上下文加载完成事件","children":[]}]},{"level":2,"title":"afterRefresh(): 钩子函数, 用于子类调用扩展","slug":"afterrefresh-钩子函数-用于子类调用扩展","link":"#afterrefresh-钩子函数-用于子类调用扩展","children":[]},{"level":2,"title":"如果开启 打印启动日志.则创建一个 StartupInfoLogger 对象","slug":"如果开启-打印启动日志-则创建一个-startupinfologger-对象","link":"#如果开启-打印启动日志-则创建一个-startupinfologger-对象","children":[]},{"level":2,"title":"监听器 启动完成事件","slug":"监听器-启动完成事件","link":"#监听器-启动完成事件","children":[]},{"level":2,"title":"callRunners(): 运行声明的 ApplicationRunner对象的run函数;","slug":"callrunners-运行声明的-applicationrunner对象的run函数","link":"#callrunners-运行声明的-applicationrunner对象的run函数","children":[]},{"level":2,"title":"监听器 读事件","slug":"监听器-读事件","link":"#监听器-读事件","children":[]}],"git":{"createdTime":1682910292000,"updatedTime":1683971113000,"contributors":[{"name":"GuoCay","email":"guocay@gmail.com","commits":1},{"name":"aCay","email":"guocay@gmail.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1362},"filePathRelative":"article/SpringBoot-Run-Method-Process.md","localizedDate":"2023年4月26日","excerpt":"<figure><img src=\\"/docs/images/20230426-003.png\\" alt=\\"SpringBoot框架run函数执行流程\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>SpringBoot框架run函数执行流程</figcaption></figure>\\n<h2> 记录启动时间</h2>\\n<h2> createBootstrapContext(): 创建启动上下文</h2>\\n<blockquote>\\n<ul>\\n<li>创建一个 DefaultBootstrapContext 对象</li>\\n<li>执行所有注册的 BootstrapRegistryInitializer 对象</li>\\n</ul>\\n</blockquote>","autoDesc":true}');export{e as data};
