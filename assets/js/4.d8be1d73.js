(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(t,e,n){"use strict";function i(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}n.d(e,"a",(function(){return i}))},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},340:function(t,e,n){"use strict";n(66);var i=n(341),a=n(325),s={components:{NavLink:n(312).a,DropdownLink:i.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.a)(t),{items:(t.items||[]).map(a.a)})}))}}},r=(n(362),n(26)),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null);e.a=o.exports},362:function(t,e,n){"use strict";n(326)},363:function(t,e,n){"use strict";n(327)},364:function(t,e,n){"use strict";n(328)},376:function(t,e,n){"use strict";n(347);var i=n(377),a=n(378),s=n(379),r=n(340),o=(n(96),n(66),n(67),n(46),n(95),n(313),n(319),n(320),n(341)),l=n(325),u={components:{NavLink:n(312).a,DropdownLink:o.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{};return[{text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===r}))||(r=s)),{text:l,link:r}}))}]}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(l.a)(t),{items:(t.items||[]).map(l.a)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},c=(n(363),n(26)),h=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports;function f(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var p={components:{SidebarButton:s.a,NavLinks:r.a,SearchBox:a.a,AlgoliaSearchBox:i.a,LanguageSwitch:h},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(f(this.$el,"paddingLeft"))+parseInt(f(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},g=(n(364),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),n("div",{staticClass:"navs"},[n("NavLinks",{staticClass:"can-hide"})],1),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("LanguageSwitch")],1)],1)}),[],!1,null,null,null));e.a=g.exports}}]);