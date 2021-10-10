"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 2869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-64daf990",
  "path": "/qt/cache-management.html",
  "title": "缓存管理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基础环境搭建",
      "slug": "基础环境搭建",
      "children": [
        {
          "level": 3,
          "title": "创建项目",
          "slug": "创建项目",
          "children": []
        },
        {
          "level": 3,
          "title": "pom.xml",
          "slug": "pom-xml",
          "children": []
        },
        {
          "level": 3,
          "title": "配置文件配置",
          "slug": "配置文件配置",
          "children": []
        },
        {
          "level": 3,
          "title": "实体类",
          "slug": "实体类",
          "children": []
        },
        {
          "level": 3,
          "title": "编写自定义仓库类，继承JpaRepository",
          "slug": "编写自定义仓库类-继承jparepository",
          "children": []
        },
        {
          "level": 3,
          "title": "service层",
          "slug": "service层",
          "children": []
        },
        {
          "level": 3,
          "title": "controller层",
          "slug": "controller层",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Spring Boot默认缓存体验",
      "slug": "spring-boot默认缓存体验",
      "children": [
        {
          "level": 3,
          "title": "启动类",
          "slug": "启动类",
          "children": []
        },
        {
          "level": 3,
          "title": "Service层实现类",
          "slug": "service层实现类",
          "children": []
        },
        {
          "level": 3,
          "title": "测试",
          "slug": "测试",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Redis 缓存介绍",
      "slug": "redis-缓存介绍",
      "children": [
        {
          "level": 3,
          "title": "基于注解的 Redis 缓存实现",
          "slug": "基于注解的-redis-缓存实现",
          "children": []
        },
        {
          "level": 3,
          "title": "基于 API 的 Redis 缓存实现",
          "slug": "基于-api-的-redis-缓存实现",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "集成 Ehcache 缓存框架",
      "slug": "集成-ehcache-缓存框架",
      "children": [
        {
          "level": 3,
          "title": "ehcache 和 redis 比较",
          "slug": "ehcache-和-redis-比较",
          "children": []
        },
        {
          "level": 3,
          "title": "实操",
          "slug": "实操",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/cache-management.md",
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

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cache_management_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/cache-management.html.vue?vue&type=template&id=46152406



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_extoc = (0,external_vue_.resolveComponent)("extoc")

  _push(`<!--[--><h1 id="缓存管理" tabindex="-1"><a class="header-anchor" href="#缓存管理" aria-hidden="true">#</a> 缓存管理</h1><h2 id="基础环境搭建" tabindex="-1"><a class="header-anchor" href="#基础环境搭建" aria-hidden="true">#</a> 基础环境搭建</h2><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> <strong>创建项目</strong></h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakdkq00pj61fj0iitco02.jpg" alt="image-20200630201135910"></p><h3 id="pom-xml" tabindex="-1"><a class="header-anchor" href="#pom-xml" aria-hidden="true">#</a> <strong>pom.xml</strong></h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="配置文件配置" tabindex="-1"><a class="header-anchor" href="#配置文件配置" aria-hidden="true">#</a> <strong>配置文件配置</strong></h3><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#mysql数据库连接配置</span>
<span class="token attr-name">spring</span><span class="token punctuation">:</span>
<span class="token attr-name">  datasource</span><span class="token punctuation">:</span>
<span class="token attr-name">    driver-class-name</span><span class="token punctuation">:</span> <span class="token attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token attr-name">    url</span><span class="token punctuation">:</span> <span class="token attr-value">jdbc:mysql://localhost:3306/wukong_blog?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf8&amp;autoReconnect=true</span>
<span class="token attr-name">    username</span><span class="token punctuation">:</span> <span class="token attr-value">root</span>
<span class="token attr-name">    password</span><span class="token punctuation">:</span> <span class="token attr-value">rootroot</span>

<span class="token comment"> ## 显示 sql 语句</span>
<span class="token attr-name">  jpa</span><span class="token punctuation">:</span>
<span class="token attr-name">    show-sql</span><span class="token punctuation">:</span> <span class="token attr-value">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="实体类" tabindex="-1"><a class="header-anchor" href="#实体类" aria-hidden="true">#</a> <strong>实体类</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
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

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;article_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> articleId<span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="编写自定义仓库类-继承jparepository" tabindex="-1"><a class="header-anchor" href="#编写自定义仓库类-继承jparepository" aria-hidden="true">#</a> <strong>编写自定义仓库类，继承JpaRepository</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>
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

    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;select c from b_comment c where c.articleId=?1&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCommentList</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> articleId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;select * from b_comment c where c.article_id=?1&quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="service层" tabindex="-1"><a class="header-anchor" href="#service层" aria-hidden="true">#</a> <strong>service层</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CommentService</span> <span class="token punctuation">{</span>
    <span class="token comment">//add</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">addComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">//delete</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//modify</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">modifyComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">//query</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CommentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommentServiceImpl</span> <span class="token keyword">implements</span>  <span class="token class-name">CommentService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">CommentRepository</span> commentRepository<span class="token punctuation">;</span>

    <span class="token comment">//add</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">addComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//delete</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//modify</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">modifyComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>author<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token comment">//query</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>optional<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> optional<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="controller层" tabindex="-1"><a class="header-anchor" href="#controller层" aria-hidden="true">#</a> <strong>controller层</strong></h3><blockquote><p>返回结果为自定义统一结果类 <code>HttpResult</code></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">CommentService</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>vo<span class="token punctuation">.</span></span><span class="token class-name">HttpResult</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommentController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CommentService</span> commentService<span class="token punctuation">;</span>

    <span class="token comment">//query</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//modify</span>
    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}/{author}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">modifyBy</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentService<span class="token punctuation">.</span><span class="token function">modifyComment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> author<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//delete</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commentService<span class="token punctuation">.</span><span class="token function">deleteComment</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//add</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_extoc, null, null, _parent))
  _push(`<h2 id="spring-boot默认缓存体验" tabindex="-1"><a class="header-anchor" href="#spring-boot默认缓存体验" aria-hidden="true">#</a> Spring Boot默认缓存体验</h2><p><strong>spring boot 自带缓存机制，可以使用默认缓存，避免每次查询都去数据库访问一边，避免资源消耗</strong></p><h3 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类" aria-hidden="true">#</a> <strong>启动类</strong></h3><blockquote><p>在启动类上添加注解 @EnableCaching</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableCaching</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCaching</span> <span class="token comment">//开启springboot默认缓存</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisSpringbootApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RedisSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="service层实现类" tabindex="-1"><a class="header-anchor" href="#service层实现类" aria-hidden="true">#</a> <strong>Service层实现类</strong></h3><blockquote><p>在service层的实现类的方法上添加注解 @Cacheable，开启缓存空间</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CommentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CacheEvict</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CachePut</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Cacheable</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommentServiceImpl</span> <span class="token keyword">implements</span>  <span class="token class-name">CommentService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">CommentRepository</span> commentRepository<span class="token punctuation">;</span>

    <span class="token comment">//add</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">addComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//delete</span>
    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token string">&quot;#result.id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">modifyComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>author<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//query</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">)</span><span class="token comment">//创建缓存空间，并命名为comment</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>optional<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> optional<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> <strong>测试</strong></h3><blockquote><p>多次查询，在控制台只打印第一次查询日志</p></blockquote>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_extoc, null, null, _parent))
  _push(`<h2 id="redis-缓存介绍" tabindex="-1"><a class="header-anchor" href="#redis-缓存介绍" aria-hidden="true">#</a> Redis 缓存介绍</h2><h3 id="基于注解的-redis-缓存实现" tabindex="-1"><a class="header-anchor" href="#基于注解的-redis-缓存实现" aria-hidden="true">#</a> 基于注解的 Redis 缓存实现</h3><h4 id="pom中" tabindex="-1"><a class="header-anchor" href="#pom中" aria-hidden="true">#</a> <strong>pom中</strong></h4><blockquote><p>pom中添加redis的依赖启动器</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>       <span class="token comment">&lt;!--redis--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> <strong>application.yml</strong></h4><blockquote><p>redis的连接配置</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>#redis数据库的连接配置
spring:
  redis:
    host: 127.0.0.1
    port: 6379
    password:
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="启动类-1" tabindex="-1"><a class="header-anchor" href="#启动类-1" aria-hidden="true">#</a> <strong>启动类</strong></h4><blockquote><p>启动类上添加注解@EnableCaching</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCaching</span><span class="token comment">//开启springboot默认缓存</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisSprongbootApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RedisSprongbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="service层-1" tabindex="-1"><a class="header-anchor" href="#service层-1" aria-hidden="true">#</a> <strong>Service层</strong></h4><blockquote><p><code>Service</code> 层对删改查操作,添加 <code>redis</code> 缓存注解</p><p><strong>增加功能直接插入mysql数据库</strong></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    author: 悟空非空也（B站/知乎/公众号）
    */</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CommentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CacheEvict</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CachePut</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Cacheable</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommentServiceImpl</span> <span class="token keyword">implements</span>  <span class="token class-name">CommentService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">CommentRepository</span> commentRepository<span class="token punctuation">;</span>

    <span class="token comment">//add</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">addComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//delete</span>
    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">)</span><span class="token comment">//删除使用@CacheEvict</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     <span class="token comment">//modify</span>
    <span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>key <span class="token operator">=</span><span class="token string">&quot;#result.id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">modifyComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>author<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//再次查询操作,查询结果存入redis缓存中</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//query</span>
  	<span class="token comment">//创建缓存空间，并命名为comment,如果查询结果为null，不存入该空间</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>unless <span class="token operator">=</span> <span class="token string">&quot;#result==null&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commentRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>optional<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> optional<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h4 id="实体类序列化" tabindex="-1"><a class="header-anchor" href="#实体类序列化" aria-hidden="true">#</a> <strong>实体类序列化</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;b_comment&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Comment</span>  <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;article_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> articleId<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="基于注解的缓存数据的-json-格式化" tabindex="-1"><a class="header-anchor" href="#基于注解的缓存数据的-json-格式化" aria-hidden="true">#</a> 基于注解的缓存数据的 json 格式化</h4><blockquote><p>自定义RedisCacheManager（基于注解的缓存数据的json格式化）</p><p>测试之前，先清空 Redis 数据库中的数据，不然会因数据库中的乱码产生报错</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheManager</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">RedisSerializationContext</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">RedisSerializer</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">Duration</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span><span class="token comment">//定义为配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">RedisCacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 分别创建String和JSON格式序列化对象，对缓存数据key和value进行转换</span>
        <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> jacksonSerial <span class="token operator">=</span>
                <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 解决查询缓存转换异常的问题</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span>ALL<span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span>ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span>NON_FINAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jacksonSerial<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定制缓存数据序列化方式及时效</span>
        <span class="token class-name">RedisCacheConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">.</span><span class="token function">defaultCacheConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">entryTtl</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofDays</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">serializeKeysWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span>strSerializer<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">serializeValuesWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span>jacksonSerial<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">disableCachingNullValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">RedisCacheManager</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cacheDefaults</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h4 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> <strong>查看数据库</strong></h4><blockquote><p>使用 Redis Desktop Manager 客户端查看数据库情况</p></blockquote><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj0bxzej61m70joaea02.jpg" alt="image-20200711141612683" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h3 id="基于-api-的-redis-缓存实现" tabindex="-1"><a class="header-anchor" href="#基于-api-的-redis-缓存实现" aria-hidden="true">#</a> 基于 API 的 Redis 缓存实现</h3><h4 id="启动类-2" tabindex="-1"><a class="header-anchor" href="#启动类-2" aria-hidden="true">#</a> 启动类</h4><blockquote><p>启动类上什么都不用加</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisSprongbootApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RedisSprongbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="实体类comment" tabindex="-1"><a class="header-anchor" href="#实体类comment" aria-hidden="true">#</a> <strong>实体类Comment</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;b_comment&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Comment</span>  <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;article_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> articleId<span class="token punctuation">;</span>


<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="repository-commentrepository" tabindex="-1"><a class="header-anchor" href="#repository-commentrepository" aria-hidden="true">#</a> <strong>repository:CommentRepository</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository</span><span class="token punctuation">;</span>
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

    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;select c from b_comment c where c.articleId=?1&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCommentList</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> articleId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;select * from b_comment c where c.article_id=?1&quot;</span><span class="token punctuation">,</span>nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
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



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h4 id="service-apicommentservice" tabindex="-1"><a class="header-anchor" href="#service-apicommentservice" aria-hidden="true">#</a> <strong>service: ApiCommentService</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApiCommentService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 查询方法
     */</span>

    <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * 更新方法
     */</span>
   <span class="token class-name">Comment</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * 删除方法
     */</span>
    <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">ch<span class="token punctuation">.</span>qos<span class="token punctuation">.</span>logback<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TimeUtil</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CommentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Transactional</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Transactional</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiCommentServiceImpl</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CommentRepository</span> commentRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>  <span class="token comment">// 引入 RedisTemplate</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询方法
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//先到缓存中查询</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Comment</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;comment_&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>comment<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//缓存中有数据</span>
            <span class="token keyword">return</span>  comment<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">//缓存中没有数据</span>
            <span class="token comment">//到数据库中进行查询</span>
            <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span><span class="token punctuation">&gt;</span></span> byId <span class="token operator">=</span> commentRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>byId<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//若是数据库中存在，将数据先存入redis</span>
                <span class="token class-name">Comment</span> comment1 <span class="token operator">=</span> byId<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;comment_&quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span>comment1<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>DAYS<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> comment1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;缓存中没有数据的情况下，数据库中也没有&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 更新方法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Comment</span> <span class="token function">updateComment</span><span class="token punctuation">(</span><span class="token class-name">Comment</span> comment<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//更新mysql数据库</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> commentRepository<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>comment<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> comment<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//更新redis缓存</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;comment_&quot;</span><span class="token operator">+</span>comment<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//更新后进行查询</span>
      <span class="token keyword">return</span>   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>comment<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除方法
     */</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteComment</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">//删除 mysql 数据库中的数据</span>
         commentRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//删除redis缓存中的数据</span>
         redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;comment_&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h4 id="controller-apicommentcontroller" tabindex="-1"><a class="header-anchor" href="#controller-apicommentcontroller" aria-hidden="true">#</a> <strong>controller:ApiCommentController</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Comment</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ApiCommentService</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>vo<span class="token punctuation">.</span></span><span class="token class-name">HttpResult</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiCommentController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApiCommentService</span> apiCommentService<span class="token punctuation">;</span>

    <span class="token comment">//query</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apiCommentService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//modify</span>
    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}/{author}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">modifyBy</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> author<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comment</span> comment1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        comment1<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Comment</span> comment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apiCommentService<span class="token punctuation">.</span><span class="token function">updateComment</span><span class="token punctuation">(</span>comment1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//delete</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/comments/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpResult</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>apiCommentService<span class="token punctuation">.</span><span class="token function">deleteComment</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">HttpResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//add</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h4 id="基于api的缓存数据的-json-格式化" tabindex="-1"><a class="header-anchor" href="#基于api的缓存数据的-json-格式化" aria-hidden="true">#</a> 基于api的缓存数据的 json 格式化</h4><blockquote><p>自定义RedisTemplate(基于api的缓存数据json格式化)</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheManager</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">RedisSerializationContext</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">RedisSerializer</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">Duration</span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Configuration</span>   <span class="token comment">// 定义一个配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用JSON格式序列化对象，对缓存数据key和value进行转换</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jacksonSerial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 解决查询缓存转换异常的问题</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span>ALL<span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span>ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span>NON_FINAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jacksonSerial<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置RedisTemplate模板API的序列化方式为JSON</span>
        template<span class="token punctuation">.</span><span class="token function">setDefaultSerializer</span><span class="token punctuation">(</span>jacksonSerial<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

   

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj6g9i9j612t0fnabt02.jpg" alt="image-20200711135024037" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj9qa32j61jc0q7qaz02.jpg" alt="image-20200711141704095" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><h2 id="集成-ehcache-缓存框架" tabindex="-1"><a class="header-anchor" href="#集成-ehcache-缓存框架" aria-hidden="true">#</a> 集成 Ehcache 缓存框架</h2><p><code>EhCache</code> 是一个纯 Java 的进程内缓存框架，具有快速、精干等特点，是 <code>Hibernate</code> 中默认 <code>CacheProvider</code> 。</p><p><code>Spring</code> 提供了对缓存功能的抽象：即允许绑定不同的缓存解决方案（如 <code>Ehcache</code> ）。它支持注解方式使用缓存，非常方便。</p><h3 id="ehcache-和-redis-比较" tabindex="-1"><a class="header-anchor" href="#ehcache-和-redis-比较" aria-hidden="true">#</a> <strong>ehcache 和 redis 比较</strong></h3><p><code>ehcache</code> 直接在 <code>jvm</code> 虚拟机中缓存，速度快，效率高；但是缓存共享麻烦，集群分布式应用不方便。</p><p><code>redis</code> 是通过 <code>socket</code> 访问到缓存服务，效率比 <code>ehcache</code> 低，比数据库要快很多，处理集群和分布式缓存方便，有成熟的方案。如果是单个应用或者对缓存访问要求很高的应用，用 <code>ehcache</code>。如果是大型系统，存在缓存共享、分布式部署、缓存内容很大的，建议用 <code>redis</code> 。</p><p><code>ehcache</code> 也有缓存共享方案，不过是通过 <code>RMI</code> 或者 <code>Jgroup</code> 多播方式进行广播缓存通知更新，缓存共享复杂，维护不方便；简单的共享可以，但是涉及到缓存恢复，大数据缓存，则不合适。</p><h3 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h3><h4 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> <strong>pom</strong></h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-cache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.sf.ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="src-main-resources-ehcache-xml" tabindex="-1"><a class="header-anchor" href="#src-main-resources-ehcache-xml" aria-hidden="true">#</a> <strong>src/main/resources/ehcache.xml</strong></h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ehcache</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mycache<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
       diskStore：为缓存路径，ehcache分为内存和磁盘两级，此属性定义磁盘的缓存位置。参数解释如下：
       user.home – 用户主目录
       user.dir  – 用户当前工作目录
       java.io.tmpdir – 默认临时文件路径
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>diskStore</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.io.tmpdir/Tmp_EhCache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
       defaultCache：默认缓存策略，当ehcache找不到定义的缓存时，则使用这个缓存策略。只能定义一个。
     --&gt;</span>
    <span class="token comment">&lt;!--
      name:缓存名称。
      maxElementsInMemory:缓存最大数目
      maxElementsOnDisk：硬盘最大缓存个数。
      eternal:对象是否永久有效，一但设置了，timeout将不起作用。
      overflowToDisk:是否保存到磁盘，当系统宕机时
      timeToIdleSeconds:设置对象在失效前的允许闲置时间（单位：秒）。
      仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
      timeToLiveSeconds:设置对象在失效前允许存活时间（单位：秒）。
      最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，
			默认是0.，也就是对象存活时间无穷大。
      diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists
		 between restarts of the Virtual Machine. The default value is false.
      diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。
		默认是30MB。每个Cache都应该有自己的一个缓冲区。
      diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
      memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，
		Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。
      你可以设置为FIFO（先进先出）或是LFU（较少使用）。
      clearOnFlush：内存数量最大时是否清除。
      memoryStoreEvictionPolicy:可选策略有：LRU（最近最少使用，默认策略）、
		FIFO（先进先出）、LFU（最少访问次数）。
      FIFO，first in first out，这个是大家最熟的，先进先出。
      LFU， Less Frequently Used，就是上面例子中使用的策略，
			直白一点就是讲一直以来最少被使用的。如上面所讲，缓存的元素有一个hit属性，hit值最小的将会被清出缓存。
      LRU，Least Recently Used，最近最少使用的，缓存的元素有一个时间戳，
			当缓存容量满了，而又需要腾出地方来缓存新的元素的时候，
      那么现有缓存元素中时间戳离当前时间最远的元素将被清出缓存。
   --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defaultCache</span>
            <span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>259200<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LRU<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>users<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LRU<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ehcache</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h4 id="application-xml" tabindex="-1"><a class="header-anchor" href="#application-xml" aria-hidden="true">#</a> <strong>application.xml</strong></h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## 缓存的配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">ehcache</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>ehcache.xml
      
<span class="token comment">## 开启dao层的dubug日志，打印出sql语句，便于缓存测试分析</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
	<span class="token key atrule">level</span><span class="token punctuation">:</span>
		<span class="token key atrule">com.wukong.dao</span><span class="token punctuation">:</span> debug
		
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="实体类序列化-1" tabindex="-1"><a class="header-anchor" href="#实体类序列化-1" aria-hidden="true">#</a> <strong>实体类序列化</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="启动类-3" tabindex="-1"><a class="header-anchor" href="#启动类-3" aria-hidden="true">#</a> <strong>启动类</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>

<span class="token annotation punctuation">@EnableCaching</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;Hello World!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="service层设置缓存" tabindex="-1"><a class="header-anchor" href="#service层设置缓存" aria-hidden="true">#</a> <strong>Service层设置缓存</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#username&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       
    <span class="token punctuation">}</span>
  

    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

		<span class="token comment">// 添加用户，不需要添加到缓存容器中</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

  
  	<span class="token comment">// 修改用户，返回类型不能是void，</span>
  	<span class="token comment">// 参数是对象是，使用 #user.id 作为关键词</span>
  	<span class="token comment">// 当然也可以直接使用@CacheEvict ,修改数据库同时删除缓存容器中该数据</span>
    <span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#user.id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">modifyUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
  	<span class="token comment">// @CacheEvict 作用： 清空缓存空间</span>
    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> allEntries <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       

    <span class="token punctuation">}</span>
  
		<span class="token comment">//参数是封装对象时，可以使用多个key ，写法如下</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span> <span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token string">&quot;#userParams.pageNum+&#39;-&#39;+#userParams.pageSize+&#39;-&#39;+#userParams.username&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserPageList</span><span class="token punctuation">(</span><span class="token class-name">UserParams</span> userParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  
  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/cache-management.html.vue?vue&type=template&id=46152406

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/cache-management.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const cache_management_html = (__exports__);

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
//# sourceMappingURL=564.app.js.map