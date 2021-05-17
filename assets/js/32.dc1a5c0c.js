(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{408:function(t,a,s){"use strict";s.r(a);var r=s(26),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基础信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础信息"}},[t._v("#")]),t._v(" 基础信息")]),t._v(" "),s("h2",{attrs:{id:"常见错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见错误码"}},[t._v("#")]),t._v(" 常见错误码")]),t._v(" "),s("p",[s("strong",[t._v("常见HTTP错误码")])]),t._v(" "),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("4XX 错误码用于指示错误的请求内容、行为、格式")])]),t._v(" "),s("li",[s("p",[t._v("5XX 错误码用于指示Bingbon服务侧的问题")])])]),t._v(" "),s("h3",{attrs:{id:"错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误码"}},[t._v("#")]),t._v(" 错误码:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("400 Bad Request – Invalid request format 请求格式无效")])]),t._v(" "),s("li",[s("p",[t._v("401 Unauthorized – Invalid API Key 无效的API Key")])]),t._v(" "),s("li",[s("p",[t._v("403 Forbidden – You do not have access to the requested resource 请求无权限")])]),t._v(" "),s("li",[s("p",[t._v("404 - Not Found 没有找到请求")])]),t._v(" "),s("li",[s("p",[t._v("429 - Too Many Requests 请求太频繁被系统限流")])]),t._v(" "),s("li",[s("p",[t._v("418 - 表示收到429后继续访问，于是被封了")])]),t._v(" "),s("li",[s("p",[t._v("500 - Internal Server Error – We had a problem with our server 服务器内部错误")])]),t._v(" "),s("li",[s("p",[t._v("504 - 表示API服务端已经向业务核心提交了请求但未能获取响应(特别需要注意的是504代码不代表请求失败，而是未知。很可能已经得到了执行，也有可能执行失败，需要做进一步确认)")])])]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果失败，response body 带有错误描述信息")])]),t._v(" "),s("li",[s("p",[t._v("每个接口都有可能抛出异常")])])]),t._v(" "),s("h2",{attrs:{id:"时间戳规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间戳规范"}},[t._v("#")]),t._v(" 时间戳规范")]),t._v(" "),s("p",[t._v("除非另外指定，API中的所有时间戳均以微秒为单位返回。")]),t._v(" "),s("p",[t._v("请求的时间戳必须在API服务时间的30秒内，否则请求将被视为过期并被拒绝。如果本地服务器时间和API服务器时间之间存在较大的偏差，那么我们建议您使用通过查询API服务器时间来更新http header。")]),t._v(" "),s("p",[t._v("例如 "),s("code",[t._v("1587091154123")])]),t._v(" "),s("h2",{attrs:{id:"数字规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字规范"}},[t._v("#")]),t._v(" 数字规范")]),t._v(" "),s("p",[t._v("为了保持跨平台时精度的完整性，十进制数字作为字符串返回。建议您在发起请求时也将数字转换为字符串以避免截断和精度错误。")]),t._v(" "),s("p",[t._v("整数（如交易编号和顺序）不加引号。")]),t._v(" "),s("h2",{attrs:{id:"频率限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频率限制"}},[t._v("#")]),t._v(" 频率限制")]),t._v(" "),s("p",[t._v("如果请求过于频繁系统将自动限制请求。")]),t._v(" "),s("h3",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[t._v("#")]),t._v(" REST API")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("行情接口：通过IP限制公共接口的调用，每1秒最多60个请求。")])]),t._v(" "),s("li",[s("p",[t._v("账户和交易接口：通过用户ID限制私人接口的调用，每1秒最多10个请求。")])]),t._v(" "),s("li",[s("p",[t._v("某些接口的特殊限制在具体的接口上注明")])])]),t._v(" "),s("h2",{attrs:{id:"查询系统时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询系统时间"}},[t._v("#")]),t._v(" 查询系统时间")]),t._v(" "),s("p",[s("strong",[t._v("HTTP请求")])]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("    # Request\n    POST api/v1/common/server/time\n")])])]),s("p",[s("strong",[t._v("请求方式")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("GET / POST\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("无\n")])])]),s("p",[s("strong",[t._v("返回值说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("Int64")]),t._v(" "),s("td",[t._v("错误码，0表示成功，不为0表示异常失败")])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("错误信息提示")])]),t._v(" "),s("tr",[s("td",[t._v("currentTime")]),t._v(" "),s("td",[t._v("Int64")]),t._v(" "),s("td",[t._v("系统当前时间，单位毫秒")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    # Response\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currentTime"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1534431933321")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);