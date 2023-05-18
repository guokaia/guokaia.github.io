const t=JSON.parse('{"key":"v-1f11cd5c","path":"/article/Java-Bit-Operator.html","title":"Java位运算符","lang":"zh-CN","frontmatter":{"title":"Java位运算符","icon":"note","isOriginal":true,"date":"2023-04-26T00:00:00.000Z","tag":["JDK"],"category":"Java","description":"操作符 实例 等效于 备注 &lt;&lt; 左移 // 8int a = 1 &lt;&lt; 3 int a = 1 * 2^3 左移操作相当于 左移数 乘以2的N次幂(正整数, 需要考虑int的最大值)左移操作的本质是将数字转换为二进制,舍弃前N位.向后补N个0; &gt;&gt; 右移 int a = 1 &gt;&gt; 3 `` 右移操作的本质是将数字转换为二进制,舍弃后N位,向前补N个0; &gt;&gt;&gt; 无符号右移 `` 忽略符号位, 空位补0 `` &amp; 与 // 1int a = 1 &amp; 1// 0int b = 1 &amp; 0// 0int c = 0 &amp; 0 `` 与计算是将两个数的二进制表示后进行对位比较,仅当同位都为1时输出1,否则输出0; 或 // 1int a = 1 1// 1int b = 1 ^ 位异或 `` 二进制表达后,相同位置的数相同为0,相反为1. `` ~ 位非 `` 二进制表达后,取反 ``","head":[["meta",{"property":"og:url","content":"https://guocay.github.io/article/Java-Bit-Operator.html"}],["meta",{"property":"og:site_name","content":"GuoCay"}],["meta",{"property":"og:title","content":"Java位运算符"}],["meta",{"property":"og:description","content":"操作符 实例 等效于 备注 &lt;&lt; 左移 // 8int a = 1 &lt;&lt; 3 int a = 1 * 2^3 左移操作相当于 左移数 乘以2的N次幂(正整数, 需要考虑int的最大值)左移操作的本质是将数字转换为二进制,舍弃前N位.向后补N个0; &gt;&gt; 右移 int a = 1 &gt;&gt; 3 `` 右移操作的本质是将数字转换为二进制,舍弃后N位,向前补N个0; &gt;&gt;&gt; 无符号右移 `` 忽略符号位, 空位补0 `` &amp; 与 // 1int a = 1 &amp; 1// 0int b = 1 &amp; 0// 0int c = 0 &amp; 0 `` 与计算是将两个数的二进制表示后进行对位比较,仅当同位都为1时输出1,否则输出0; 或 // 1int a = 1 1// 1int b = 1 ^ 位异或 `` 二进制表达后,相同位置的数相同为0,相反为1. `` ~ 位非 `` 二进制表达后,取反 ``"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-18T11:09:04.000Z"}],["meta",{"property":"article:author","content":"GuoCay"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:published_time","content":"2023-04-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-18T11:09:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java位运算符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-18T11:09:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GuoCay\\",\\"email\\":\\"guocay@gmail.com\\"}]}"]]},"headers":[],"git":{"createdTime":1684408144000,"updatedTime":1684408144000,"contributors":[{"name":"GuoCay","email":"guocay@gmail.com","commits":1}]},"readingTime":{"minutes":0.8,"words":239},"filePathRelative":"article/Java-Bit-Operator.md","localizedDate":"2023年4月26日","excerpt":"<table>\\n<thead>\\n<tr>\\n<th>操作符</th>\\n<th>实例</th>\\n<th>等效于</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>&lt;&lt; 左移</td>\\n<td>// 8int a = 1 &lt;&lt; 3</td>\\n<td>int a = 1 * 2^3</td>\\n<td>左移操作相当于 左移数 乘以2的N次幂(正整数, 需要考虑int的最大值)左移操作的本质是将数字转换为二进制,舍弃前N位.向后补N个0;</td>\\n</tr>\\n<tr>\\n<td>&gt;&gt; 右移</td>\\n<td>int a = 1 &gt;&gt; 3</td>\\n<td>``</td>\\n<td>右移操作的本质是将数字转换为二进制,舍弃后N位,向前补N个0;</td>\\n</tr>\\n<tr>\\n<td>&gt;&gt;&gt; 无符号右移</td>\\n<td>``</td>\\n<td>忽略符号位, 空位补0</td>\\n<td>``</td>\\n</tr>\\n<tr>\\n<td>&amp; 与</td>\\n<td>// 1int a = 1 &amp; 1// 0int b = 1 &amp; 0// 0int c = 0 &amp; 0</td>\\n<td>``</td>\\n<td>与计算是将两个数的二进制表示后进行对位比较,仅当同位都为1时输出1,否则输出0;</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td>或</td>\\n<td>// 1int a = 1</td>\\n<td>1// 1int b = 1</td>\\n</tr>\\n<tr>\\n<td>^ 位异或</td>\\n<td>``</td>\\n<td>二进制表达后,相同位置的数相同为0,相反为1.</td>\\n<td>``</td>\\n</tr>\\n<tr>\\n<td>~ 位非</td>\\n<td>``</td>\\n<td>二进制表达后,取反</td>\\n<td>``</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
