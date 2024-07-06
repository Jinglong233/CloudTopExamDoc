"use strict";(self.webpackChunkcloud_top_exam_doc=self.webpackChunkcloud_top_exam_doc||[]).push([[787],{6262:(t,i)=>{i.A=(t,i)=>{const p=t.__vccOpts||t;for(const[t,s]of i)p[t]=s;return p}},6758:(t,i,p)=>{p.r(i),p.d(i,{comp:()=>k,data:()=>y});var s=p(641);const e=p.p+"assets/img/img.e2a4d40d.png",a=p.p+"assets/img/img_1.6728134c.png",n=p.p+"assets/img/img_2.61872dbb.png",g=p.p+"assets/img/img_3.f031209c.png",d=p.p+"assets/img/img_4.0b4eb34f.png",c=p.p+"assets/img/img_5.b19889d3.png",l=p.p+"assets/img/img_6.fd652c1a.png",r=p.p+"assets/img/img_7.3e700391.png",m=p.p+"assets/img/img_8.88d8bb3a.png",o=p.p+"assets/img/img_9.c5313dd8.png",h=p.p+"assets/img/img_10.b9d27b2d.png",_=p.p+"assets/img/img_15.d03f1f6d.png",v=p.p+"assets/img/img_16.e4595919.png",b=p.p+"assets/img/img_17.b849aeea.png",u=p.p+"assets/img/img_18.46c8708d.png",f=p.p+"assets/img/img_19.63554fc4.png",w=p.p+"assets/img/img_11.f291019b.png",x=p.p+"assets/img/img_12.21ebb78b.png",E=p.p+"assets/img/img_13.2fce4221.png",A=p.p+"assets/img/img_14.b057d143.png",T=[(0,s.Fv)('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>在拉去项目之前，先确保你有以下基础环境</p></div><h2 id="前置基础环境" tabindex="-1"><a class="header-anchor" href="#前置基础环境"><span>前置基础环境</span></a></h2><table><thead><tr><th>环境</th><th>版本</th><th>地址</th></tr></thead><tbody><tr><td>JDK</td><td>1.8</td><td>https://www.oracle.com/java/technologies/downloads/?er=221886#java8</td></tr><tr><td>NodeJs</td><td>18.12.1</td><td>https://nodejs.org/dist/v18.18.1/</td></tr><tr><td>MySQL</td><td>8.0</td><td>https://dev.mysql.com/downloads/installer/</td></tr><tr><td>Redis</td><td>Windows（6.x）</td><td>https://gitee.com/redis-windows/redis-windows/releases</td></tr><tr><td>Redis</td><td>Linux版（6.x）</td><td>https://mirrors.huaweicloud.com/redis/</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>  开发工具前端建议使用WebStorm，后端使用IDEA</p></div><h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动"><span>项目启动</span></a></h2><h3 id="后端项目的启动" tabindex="-1"><a class="header-anchor" href="#后端项目的启动"><span>后端项目的启动</span></a></h3><p><img src="'+e+'" alt="img.png"></p><p>项目拉取之后，还无法启动。这里需要手动配置一下<code>xxl-job-master</code>为项目模块👇：</p><p><img src="'+a+'" alt="img_1.png"></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>说明：这里我用的IDEA的新版UI，可能不同版本有差异。只需要找到 <code>setting -&gt; Project Structure..</code> 就行。</p></div><p><img src="'+n+'" alt="img_2.png"></p><p><img src="'+g+'" alt="img_3.png"></p><p><img src="'+d+'" alt="img_4.png"></p><p><img src="'+c+'" alt="img_5.png"></p><p><img src="'+l+'" alt="img_6.png"></p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>到这里项目就构建成功了。但这里还需要配置一些数据库相关的东西。</p></div><p><img src="'+r+'" alt="img_7.png"></p><p>本项目使用了xxl-job，所以还需要在这里进行数据库配置</p><p><img src="'+m+'" alt="img_8.png"></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>到此，后端所有的配置都已经完成。</p></div><p>启动<code>xxl-job</code>服务</p><p><img src="'+o+'" alt="img_9.png"></p><p>启动整个项目的后端服务</p><p><img src="'+h+'" alt="img_10.png"></p><p><strong>后端启动成功</strong></p><hr><h3 id="前端项目的启动" tabindex="-1"><a class="header-anchor" href="#前端项目的启动"><span>前端项目的启动</span></a></h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>启动前端项目之前，应该先启动后端，因为有些数据是从后端获取的。</p></div><p>前端推荐使用<code>WebStorm</code>，这里为了方便演示，就在IDEA环境下操作了。</p><p>先打开idea的终端。</p><p><img src="'+_+'" alt="img_15.png"></p><p>切换到前端学生端的文件夹下，执行<code>yarn</code>命令</p><p><img src="'+v+'" alt="img_16.png"><img src="'+b+'" alt="img_17.png"></p><p>同样的切换到前端管理端的文件夹下，执行<code>yarn</code>命令</p><p><img src="'+u+'" alt="img_18.png"><img src="'+f+'" alt="img_19.png"></p><p><img src="'+w+'" alt="img_11.png"></p><p><img src="'+x+'" alt="img_12.png"></p><p><img src="'+E+'" alt="img_13.png"></p><p><img src="'+A+'" alt="img_14.png"></p><p>最后点击启动按钮即可。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ol><li>学生端的访问地址是：http://localhost:5173</li><li>管理/教师端的访问地址是：http://localhost:5174</li></ol></div><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>前端在打开页面的时候会非常的慢，很多朋友以为是项目有问题。这其实是正常的，这是由于Vite的原因。前端项目在启动之后，页面第一次访问都很慢，后边访问就快了。</p></div>',42)],j={},k=(0,p(6262).A)(j,[["render",function(t,i){return(0,s.uX)(),(0,s.CE)("div",null,T)}]]),y=JSON.parse('{"path":"/devEnv/%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%90%AF%E5%8A%A8.html","title":"项目的搭建","lang":"en-US","frontmatter":{"title":"项目的搭建"},"headers":[{"level":2,"title":"前置基础环境","slug":"前置基础环境","link":"#前置基础环境","children":[]},{"level":2,"title":"项目启动","slug":"项目启动","link":"#项目启动","children":[{"level":3,"title":"后端项目的启动","slug":"后端项目的启动","link":"#后端项目的启动","children":[]},{"level":3,"title":"前端项目的启动","slug":"前端项目的启动","link":"#前端项目的启动","children":[]}]}],"git":{"createdTime":1720256050000,"updatedTime":1720256050000,"contributors":[{"name":"jinglong","email":"2496232853@qq.com","commits":1}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"devEnv/项目的启动.md","localizedDate":"July 6, 2024"}')}}]);