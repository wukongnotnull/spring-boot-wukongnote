"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 4132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7f3e69b6",
  "path": "/qt/data-access.html",
  "title": "数据访问",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Spring Boot 数据访问概述",
      "slug": "spring-boot-数据访问概述",
      "children": []
    },
    {
      "level": 2,
      "title": "基础环境搭建",
      "slug": "基础环境搭建",
      "children": []
    },
    {
      "level": 2,
      "title": "整合MyBatis",
      "slug": "整合mybatis",
      "children": [
        {
          "level": 3,
          "title": "使用注解的方式整合MyBatis",
          "slug": "使用注解的方式整合mybatis",
          "children": []
        },
        {
          "level": 3,
          "title": "使用配置文件的方式整合MyBatis",
          "slug": "使用配置文件的方式整合mybatis",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "整合 JPA",
      "slug": "整合-jpa",
      "children": [
        {
          "level": 3,
          "title": "Spring Date JPA 介绍",
          "slug": "spring-date-jpa-介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "Spring Boot 整合 JPA",
          "slug": "spring-boot-整合-jpa",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Spring Boot 整合 Redis",
      "slug": "spring-boot-整合-redis",
      "children": [
        {
          "level": 3,
          "title": "Redis 简介",
          "slug": "redis-简介",
          "children": []
        },
        {
          "level": 3,
          "title": "Redis下载与安装",
          "slug": "redis下载与安装",
          "children": []
        },
        {
          "level": 3,
          "title": "Spring Boot 整合 Redis",
          "slug": "spring-boot-整合-redis-1",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/data-access.md",
  "git": {
    "updatedTime": 1633567014000,
    "contributors": [
      {
        "name": "悟空非空也",
        "email": "1390128154@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 9101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data_access_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/data-access.html.vue?vue&type=template&id=12a39412


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="数据访问" tabindex="-1"><a class="header-anchor" href="#数据访问" aria-hidden="true">#</a> 数据访问</h1><h2 id="spring-boot-数据访问概述" tabindex="-1"><a class="header-anchor" href="#spring-boot-数据访问概述" aria-hidden="true">#</a> Spring Boot 数据访问概述</h2><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajhh0x0aj60p004xmy402.jpg" alt="image-20200627115255361"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajf1bvnnj60lx0cwtae02.jpg" alt="image-20200627115340382"></p><h2 id="基础环境搭建" tabindex="-1"><a class="header-anchor" href="#基础环境搭建" aria-hidden="true">#</a> 基础环境搭建</h2><p><strong>创建数据库</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> wukong_blog<span class="token punctuation">;</span>

<span class="token keyword">USE</span> wukong_blog<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>title<span class="token punctuation">\`</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章标题&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>content<span class="token punctuation">\`</span> <span class="token keyword">LONGTEXT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章内容&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Spring Boot 青铜篇&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;从入门到放弃讲解...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Spring Cloud 王者篇&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;从入门到入土讲解...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>content<span class="token punctuation">\`</span> <span class="token keyword">LONGTEXT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论内容&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>author<span class="token punctuation">\`</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论作者&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>article_id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;外键：文章id&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span>  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wukong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zhubajie&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tangseng&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bailongma&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baigujing&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><strong>创建项目,引入mysql的依赖启动器</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajf8jg32j60k70bjaao02.jpg" alt="image-20200627121225875" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p><strong>创建实体类domain</strong></p><blockquote><p>推荐实体类使用 lombok 插件，编译后自动生成 setter | getter 方法。</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
<span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">ToString</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Article</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>


<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
  <span class="token comment">/* 
  author: 悟空非空也（B站/知乎/公众号） 
  */</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">ToString</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Comment</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token comment">//此属性名和表中的字段article_id不一致，不能自动映射，需要在application.yml中进行配置</span>
    <span class="token comment">//mybatis.configuration.map-underscore-to-camel-case=true</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> articleId<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>全局配置文件进行数据库连接配置</strong></p><p>application.yml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>spring:
  datasource:
    url: jdbc:mysql://localhost:3306/wukong_blog?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf8&amp;autoReconnect=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: rootroot
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>使用第三方数据源进行配置（推荐：ali的druid数据源为例）</strong></p><p>pom.xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>在全局配置文件中设置druid的属性</strong></p><p>application.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">20</span>
    <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="整合mybatis" tabindex="-1"><a class="header-anchor" href="#整合mybatis" aria-hidden="true">#</a> 整合MyBatis</h2><h3 id="使用注解的方式整合mybatis" tabindex="-1"><a class="header-anchor" href="#使用注解的方式整合mybatis" aria-hidden="true">#</a> 使用注解的方式整合MyBatis</h3><p><strong>mapper接口</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
    <span class="token comment">/* 
    author: 悟空非空也（B站/知乎/公众号） 
    */</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CommentMapper</span> <span class="token punctuation">{</span>

    <span class="token comment">// 查询</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from b_comment where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">queryComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//删除</span>
    <span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from b_comment where id=#{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 修改</span>
    <span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">&quot;update b_comment set content = #{content}, author = #{author}  where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加，注意是 #{articleId} ，不是#{article_id}</span>
    <span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into b_comment(content,author,article_id) values(#{content},#{author},#{articleId})&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">insertComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>测试</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    author: 悟空非空也（B站/知乎/公众号） 
    */</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">CommentMapperTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CommentMapper</span> commentMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">queryComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentMapper<span class="token punctuation">.</span><span class="token function">queryComment</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentMapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentMapper<span class="token punctuation">.</span><span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&quot;11111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentMapper<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">insertComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&quot;add11111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;add11111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setArticleId</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentMapper<span class="token punctuation">.</span><span class="token function">insertComment</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="使用配置文件的方式整合mybatis" tabindex="-1"><a class="header-anchor" href="#使用配置文件的方式整合mybatis" aria-hidden="true">#</a> 使用配置文件的方式整合MyBatis</h3><p><strong>在全局配置文件配置</strong></p><blockquote><p>mapper-locations: classpath:mapper/**</p><p>该位置是在 resources 文件夹下新建 mapper 目录</p></blockquote><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">mybatis</span><span class="token punctuation">:</span>
<span class="token attr-name">  configuration</span><span class="token punctuation">:</span>
<span class="token attr-name">    map-underscore-to-camel-case</span><span class="token punctuation">:</span> <span class="token attr-value">true</span>
<span class="token attr-name">  mapper-locations</span><span class="token punctuation">:</span> <span class="token attr-value">classpath:mapper/**</span>
<span class="token attr-name">  type-aliases-package</span><span class="token punctuation">:</span> <span class="token attr-value">com.wukongnotnull.domain</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>编写ArticleMapper接口</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
   <span class="token comment">/*
   author: 悟空非空也（B站/知乎/公众号）
   */</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Article</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>

<span class="token comment">// 不要忘记 @Mapper</span>
<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ArticleMapper</span> <span class="token punctuation">{</span>

   <span class="token comment">// 查询单文章</span>
   <span class="token class-name">Article</span> <span class="token function">getArticleById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 查询文章列表</span>
   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">getArticleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 修改文章</span>
   <span class="token keyword">int</span> <span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token class-name">Article</span> article<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 添加文章</span>
    <span class="token keyword">int</span> <span class="token function">addArticle</span><span class="token punctuation">(</span><span class="token class-name">Article</span> article<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除文章</span>
    <span class="token keyword">int</span> <span class="token function">delArticle</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>编写接口对应的xml配置文件</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.wukongnotnull.mapper.ArticleMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getArticleById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Article<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from b_article where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getArticleList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select  * from b_article
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateArticle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        update b_article set title = #{title}, content = #{content} where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addArticle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into b_article(title,content) values(#{title},#{content})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delArticle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        delete from b_article where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><strong>测试</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Article</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span>*<span class="token punctuation">;</span>

  <span class="token comment">/*
  author: 悟空非空也（B站/知乎/公众号）
  */</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ArticleMapperTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">ArticleMapper</span> articleMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">delArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>articleMapper<span class="token punctuation">.</span><span class="token function">delArticle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">addArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Article</span> article <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;add 1029&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&quot;add content 1030&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>articleMapper<span class="token punctuation">.</span><span class="token function">addArticle</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Article</span> article <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;update 1026...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&quot;content 1026&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>articleMapper<span class="token punctuation">.</span><span class="token function">updateArticle</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getArticleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>articleMapper<span class="token punctuation">.</span><span class="token function">getArticleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getArticleById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>articleMapper<span class="token punctuation">.</span><span class="token function">getArticleById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="整合-jpa" tabindex="-1"><a class="header-anchor" href="#整合-jpa" aria-hidden="true">#</a> 整合 JPA</h2><h3 id="spring-date-jpa-介绍" tabindex="-1"><a class="header-anchor" href="#spring-date-jpa-介绍" aria-hidden="true">#</a> Spring Date JPA 介绍</h3><p>Spring Data 是Spring的一个子项目，旨在统一和简化各类型数据的持久化存储方式，而不拘泥于是关系型数据库还是NoSQL数据库。无论是哪种持久化存储方式，数据访问对象（Data Access Objects，DAO）都会提供对对象的增加、删除、修改和查询的方法，以及排序和分页方法等。 Spring Data 提供了基于这些层面的统一接口（如：CrudRepository、 PagingAndSortingRepository），以实现持久化的存储。</p><p>JPA（Java Persistence API）是Java的持久化API，用于对象的持久化。它是一个非常强大的ORM持久化的解决方案，免去了使用JDBCTemplate开发的编写脚本工作。JPA通过简单约定好接口方法的规则自动生成相应的JPQL语句，然后映射成POJO对象。</p><p>JPA是一个规范化接口，封装了Hibernate的操作作为默认实现，让用户不通过任何配置即可完成数据库的操作。</p><h3 id="spring-boot-整合-jpa" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-jpa" aria-hidden="true">#</a> Spring Boot 整合 JPA</h3><h4 id="pom-依赖" tabindex="-1"><a class="header-anchor" href="#pom-依赖" aria-hidden="true">#</a> <strong>pom 依赖</strong></h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> <strong>配置文件</strong></h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/wukong_blog<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf8&amp;autoReconnect=true</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> rootroot
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="实体类与表的映射" tabindex="-1"><a class="header-anchor" href="#实体类与表的映射" aria-hidden="true">#</a> <strong>实体类与表的映射</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;b_comment&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Comment</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span> <span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
  
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
  
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;article_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> articleId<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h4 id="自定义接口" tabindex="-1"><a class="header-anchor" href="#自定义接口" aria-hidden="true">#</a> <strong>自定义接口</strong></h4><blockquote><p>默认继承父接口，父接口提供了简单的增删改查方法，还不能满足业务需求，那就需要自定义方法</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    author: 悟空非空也（B站/知乎/公众号）
    */</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">JpaRepository</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Modifying</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Query</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">Transactional</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>
<span class="token comment">// 记得添加该注解 @Repository</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CommentRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 查询条件：作者不为空</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByAuthorNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">long</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">S</span> <span class="token function">saveAndFlush</span><span class="token punctuation">(</span><span class="token class-name">S</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

  	<span class="token comment">// 不能使用 * 通配符</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;select c from b_comment c where c.articleId=?1&quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCommentList</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> articleId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  	<span class="token comment">// 若使用通配符 * </span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;select * from b_comment c where c.articleId=?1&quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCommentList2</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> articleId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@Modifying</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;update b_comment set author =?1  where id =?2 &quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">int</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token class-name">String</span> author<span class="token punctuation">,</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@Modifying</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;delete from b_comment where id = ?1&quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">int</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">S</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">S</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h4 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> <strong>单元测试</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    author: 悟空非空也（B站/知乎/公众号） 
    */</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">CommentRepositoryTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">CommentRepository</span> commentRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
      <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> optionalComment <span class="token operator">=</span> commentRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>optionalComment<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Comment</span> comment1 <span class="token operator">=</span> optionalComment<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>comment1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">findByAuthorNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">findByAuthorNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getCommentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">getCommentList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getCommentList2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">getCommentList2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token string">&quot;6666&quot;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;wukongnotnull0716&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&quot;content .... wukong ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commentRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h2 id="spring-boot-整合-redis" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-redis" aria-hidden="true">#</a> Spring Boot 整合 Redis</h2><h3 id="redis-简介" tabindex="-1"><a class="header-anchor" href="#redis-简介" aria-hidden="true">#</a> Redis 简介</h3><h4 id="redis-概念" tabindex="-1"><a class="header-anchor" href="#redis-概念" aria-hidden="true">#</a> <strong>Redis 概念</strong></h4><p>Redis 是一个开源（BSD许可）的、内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件，并提供多种语言的API。</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> <strong>优点</strong></h4><ol><li><p>存取速度快：Redis速度非常快，每秒可执行大约110000次的设值操作，或者执行81000次的读取操作。</p></li><li><p>支持丰富的数据类型：Redis支持开发人员常用的大多数数据类型，例如列表、集合、排序集和散列等。</p></li><li><p>操作具有原子性：所有Redis操作都是原子操作，这确保如果两个客户端并发访问，Redis服务器能接收更新后的值。</p></li><li><p>提供多种功能：Redis提供了多种功能特性，可用作非关系型数据库、缓存中间件、消息中间件等。</p></li></ol><h3 id="redis下载与安装" tabindex="-1"><a class="header-anchor" href="#redis下载与安装" aria-hidden="true">#</a> Redis下载与安装</h3><p><strong>下载路径</strong></p><p>https://github.com/microsoftarchive/redis/releases/tag/win-3.2.100</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajfof62oj61k70u0wjp02.jpg" alt="image-20200629130139745" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><p><strong>解压后放入磁盘某位置就安装成功（免安装）</strong></p><p><strong>安装可视化客户端</strong></p><blockquote><p>推荐安装 Redis Desktop Manager 客户端</p></blockquote><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajfslg9lj60ow0cr0tm02.jpg" alt="image-20200629155409332" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><h3 id="spring-boot-整合-redis-1" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-redis-1" aria-hidden="true">#</a> Spring Boot 整合 Redis</h3><h4 id="依赖启动器" tabindex="-1"><a class="header-anchor" href="#依赖启动器" aria-hidden="true">#</a> 依赖启动器</h4><blockquote><p>在pom文件中添加Spring Data Redis依赖启动器</p></blockquote><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>&lt;dependency&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><blockquote><p>在全局配置文件application.properties中添加Redis数据库连接配置</p></blockquote><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring</span><span class="token punctuation">:</span>
<span class="token attr-name">  redis</span><span class="token punctuation">:</span>
<span class="token attr-name">    host</span><span class="token punctuation">:</span> <span class="token attr-value">127.0.0.1</span>
<span class="token attr-name">    port</span><span class="token punctuation">:</span> <span class="token attr-value">6379</span>
<span class="token attr-name">    password</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="编写实体类" tabindex="-1"><a class="header-anchor" href="#编写实体类" aria-hidden="true">#</a> 编写实体类</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Id</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisHash</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span>index<span class="token punctuation">.</span></span><span class="token class-name">Indexed</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@RedisHash</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;people&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> firstName<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> lastName<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token class-name">Address</span> address<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Family</span><span class="token punctuation">&gt;</span></span> familyList<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span>index<span class="token punctuation">.</span></span><span class="token class-name">Indexed</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> nation<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> village<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span>index<span class="token punctuation">.</span></span><span class="token class-name">Indexed</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Family</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span>   type<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Indexed</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span>   name<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="编写-repository-接口" tabindex="-1"><a class="header-anchor" href="#编写-repository-接口" aria-hidden="true">#</a> 编写 Repository 接口</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Person</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CrudRepository</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">Person</span> <span class="token function">findPersonByFirstName</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">S</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">S</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="单元测试-1" tabindex="-1"><a class="header-anchor" href="#单元测试-1" aria-hidden="true">#</a> 单元测试</h4><blockquote><p>编写单元测试进行接口方法测试以及整合测试</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Address</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Family</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Person</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>

<span class="token comment">/*
author: 悟空非空也（B站/知乎/公众号） 
*/</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">PersonRepositoryTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">PersonRepository</span> personRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">findPersonByFirstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personRepository<span class="token punctuation">.</span><span class="token function">findPersonByFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setLastName</span><span class="token punctuation">(</span><span class="token string">&quot;悟&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Address</span> address <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        address<span class="token punctuation">.</span><span class="token function">setNation</span><span class="token punctuation">(</span><span class="token string">&quot;中国&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        address<span class="token punctuation">.</span><span class="token function">setVillage</span><span class="token punctuation">(</span><span class="token string">&quot;南京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Family</span><span class="token punctuation">&gt;</span></span> familyList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Family</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Family</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        father<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">&quot;father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        father<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;杨康&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Family</span> mother <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Family</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mother<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">&quot;mother&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mother<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;穆念慈&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        familyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span><span class="token punctuation">;</span>
        familyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mother<span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setFamilyList</span><span class="token punctuation">(</span>familyList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/data-access.html.vue?vue&type=template&id=12a39412

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/data-access.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const data_access_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ })

};
;
//# sourceMappingURL=696.app.js.map