const t=JSON.parse('{"key":"v-b86219fe","path":"/article/About-Domain-And-DTO-Convert.html","title":"关于domain对象与DTO对象间的相互拷贝的思考与优化思路","lang":"zh-CN","frontmatter":{"title":"关于domain对象与DTO对象间的相互拷贝的思考与优化思路","icon":"note","isOriginal":true,"date":"2021-10-27T13:51:07.000Z","tag":["Mekatok","开发笔记"],"category":"Mekatok","description":"问题描述 我们后端在开发的过程中总是在domain(数据库映射对象)和dto(数据传输对象)之间进行数据互转.以匹配对象在各生命周期的运行. 在实际的开发中,我们发现大多数的domain对象和dto对象内的字段完全一致.创建两个内容完全一样的类.从大部分情况下考虑都显得多余. 代码中经常出现大量的代码如下 dto.setAttr(domain.getAttr()); ... 冗长,且不优雅.","head":[["meta",{"property":"og:url","content":"https://guocay.github.io/article/About-Domain-And-DTO-Convert.html"}],["meta",{"property":"og:site_name","content":"GuoCay"}],["meta",{"property":"og:title","content":"关于domain对象与DTO对象间的相互拷贝的思考与优化思路"}],["meta",{"property":"og:description","content":"问题描述 我们后端在开发的过程中总是在domain(数据库映射对象)和dto(数据传输对象)之间进行数据互转.以匹配对象在各生命周期的运行. 在实际的开发中,我们发现大多数的domain对象和dto对象内的字段完全一致.创建两个内容完全一样的类.从大部分情况下考虑都显得多余. 代码中经常出现大量的代码如下 dto.setAttr(domain.getAttr()); ... 冗长,且不优雅."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-18T11:09:04.000Z"}],["meta",{"property":"article:author","content":"GuoCay"}],["meta",{"property":"article:tag","content":"Mekatok"}],["meta",{"property":"article:tag","content":"开发笔记"}],["meta",{"property":"article:published_time","content":"2021-10-27T13:51:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-18T11:09:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于domain对象与DTO对象间的相互拷贝的思考与优化思路\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-27T13:51:07.000Z\\",\\"dateModified\\":\\"2023-05-18T11:09:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GuoCay\\",\\"email\\":\\"guocay@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"问题思考","slug":"问题思考","link":"#问题思考","children":[]},{"level":2,"title":"编码逻辑","slug":"编码逻辑","link":"#编码逻辑","children":[]},{"level":2,"title":"实现方案","slug":"实现方案","link":"#实现方案","children":[]},{"level":2,"title":"PS","slug":"ps","link":"#ps","children":[]}],"git":{"createdTime":1684408144000,"updatedTime":1684408144000,"contributors":[{"name":"GuoCay","email":"guocay@gmail.com","commits":1}]},"readingTime":{"minutes":4.45,"words":1334},"filePathRelative":"article/About-Domain-And-DTO-Convert.md","localizedDate":"2021年10月27日","excerpt":"<h2> 问题描述</h2>\\n<blockquote>\\n<p>我们后端在开发的过程中总是在domain(数据库映射对象)和dto(数据传输对象)之间进行数据互转.以匹配对象在各生命周期的运行.</p>\\n</blockquote>\\n<blockquote>\\n<p>在实际的开发中,我们发现大多数的domain对象和dto对象内的字段完全一致.创建两个内容完全一样的类.从大部分情况下考虑都显得多余.</p>\\n</blockquote>\\n<blockquote>\\n<p>代码中经常出现大量的代码如下</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>dto<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAttr</span><span class=\\"token punctuation\\">(</span>domain<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAttr</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>冗长,且不优雅.</p>\\n</blockquote>","autoDesc":true}');export{t as data};
