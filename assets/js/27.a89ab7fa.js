(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(t,s,a){"use strict";a.r(s);var n=a(26),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"websocket-行情推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-行情推送"}},[t._v("#")]),t._v(" Websocket 行情推送")]),t._v(" "),a("h2",{attrs:{id:"_1-訂閱合約交易深度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-訂閱合約交易深度"}},[t._v("#")]),t._v(" 1. 訂閱合約交易深度")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("訂閱合約對盤口深度的數據的推送，此主題發送最新市場深度快照。快照頻率為每秒1次。\n")])])]),a("p",[a("strong",[t._v("訂閱類型")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 為 market.depth.$Symbol.$Step.$Level，比如market.depth.BTC-USDT.step0.level5\n")])])]),a("p",[a("strong",[t._v("訂閱參數")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數名")]),t._v(" "),a("th",[t._v("參數類型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v('合約名稱中需有"-"，如BTC-USDT')])]),t._v(" "),a("tr",[a("td",[t._v("step")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合併深度類型，step0，step1，step2，step3，step4，step5")])]),t._v(" "),a("tr",[a("td",[t._v("level")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("檔數, 如 level5，level10，level20，level50，level100")])])])]),t._v(" "),a("p",[a("strong",[t._v("備註")])]),t._v(" "),a("p",[t._v('"step" 合併深度類型')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("step0")]),t._v(" "),a("td",[t._v("不合併深度")])]),t._v(" "),a("tr",[a("td",[t._v("step1")]),t._v(" "),a("td",[t._v("按價格最小精度乘以10合併深度數據")])]),t._v(" "),a("tr",[a("td",[t._v("step2")]),t._v(" "),a("td",[t._v("按價格最小精度乘以100合併深度數據")])]),t._v(" "),a("tr",[a("td",[t._v("step3")]),t._v(" "),a("td",[t._v("按價格最小精度乘以1000合併深度數據")])]),t._v(" "),a("tr",[a("td",[t._v("step4")]),t._v(" "),a("td",[t._v("按價格最小精度乘以10000合併深度數據")])]),t._v(" "),a("tr",[a("td",[t._v("step5")]),t._v(" "),a("td",[t._v("按價格最小精度乘以100000合併深度數據")])])])]),t._v(" "),a("p",[t._v('"level" 深度檔數定義')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("level5")]),t._v(" "),a("td",[t._v("5檔")])]),t._v(" "),a("tr",[a("td",[t._v("level10")]),t._v(" "),a("td",[t._v("10檔")])]),t._v(" "),a("tr",[a("td",[t._v("level20")]),t._v(" "),a("td",[t._v("20檔")])]),t._v(" "),a("tr",[a("td",[t._v("level50")]),t._v(" "),a("td",[t._v("50檔")])]),t._v(" "),a("tr",[a("td",[t._v("level100")]),t._v(" "),a("td",[t._v("100檔")])])])]),t._v(" "),a("p",[a("strong",[t._v("推送數據")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回欄位")]),t._v(" "),a("th",[t._v("欄位說明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有錯誤信息，0為正常，1為有錯誤")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("訂閱的數據類型，例如 market.depth.BTC-USDT.step0.level5")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送內容")])]),t._v(" "),a("tr",[a("td",[t._v("asks")]),t._v(" "),a("td",[t._v("賣方深度")])]),t._v(" "),a("tr",[a("td",[t._v("bids")]),t._v(" "),a("td",[t._v("買方深度")])]),t._v(" "),a("tr",[a("td",[t._v("p")]),t._v(" "),a("td",[t._v("price價格")])]),t._v(" "),a("tr",[a("td",[t._v("v")]),t._v(" "),a("td",[t._v("volume數量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    # Response\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.depth.BTC-USDT.step0.level5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-訂單最新成交記錄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-訂單最新成交記錄"}},[t._v("#")]),t._v(" 2. 訂單最新成交記錄")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("訂閱單個合約的逐筆成交明細\n")])])]),a("p",[a("strong",[t._v("訂閱類型")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 為 market.trade.detail.$Symbol，比如market.trade.detail.BTC-USDT\n")])])]),a("p",[a("strong",[t._v("訂閱參數")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數名")]),t._v(" "),a("th",[t._v("參數類型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("欄位描述")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合約名稱")]),t._v(" "),a("td",[t._v('合約名稱中需有"-"，如BTC-USDT')])])])]),t._v(" "),a("p",[a("strong",[t._v("推送數據")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回欄位")]),t._v(" "),a("th",[t._v("欄位說明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有錯誤信息，0為正常，1為有錯誤")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("訂閱的數據類型，例如 market.tradeDetail.BTC-USDT")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送內容")])]),t._v(" "),a("tr",[a("td",[t._v("trades")]),t._v(" "),a("td",[t._v("逐筆成交")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("成交時間")])]),t._v(" "),a("tr",[a("td",[t._v("makerSide")]),t._v(" "),a("td",[t._v("吃單方向(Bid / Ask 買/賣)")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("成交價格")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("成交數量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" # Response\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.tradeDetail.BTC-USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trades"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-04-25T15:00:51.999Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"makerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.279563")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-04-25T15:00:51.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"makerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.279563")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-訂閱合約k線數據"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-訂閱合約k線數據"}},[t._v("#")]),t._v(" 3. 訂閱合約k線數據")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("訂閱單個合約的行情k線數據\n")])])]),a("p",[a("strong",[t._v("訂閱類型")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 為 market.kline.$Symbol.$KlineType，比如market.kline.$Symbol.BTC-USDT.1min\n")])])]),a("p",[a("strong",[t._v("訂閱參數")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數名")]),t._v(" "),a("th",[t._v("參數類型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("欄位描述")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合約名稱")]),t._v(" "),a("td",[t._v('合約名稱中需有"-"，如BTC-USDT')])]),t._v(" "),a("tr",[a("td",[t._v("klineType")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("k線類型")]),t._v(" "),a("td",[t._v("參考欄位說明，如分鐘，小時，周等")])])])]),t._v(" "),a("p",[a("strong",[t._v("備註")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("klineType 欄位說明")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1m一分鐘K線")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("3m三分鐘K線")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5m五分鐘K線")])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("15m十五分鐘K線")])]),t._v(" "),a("tr",[a("td",[t._v("30")]),t._v(" "),a("td",[t._v("30m三十分鐘K線")])]),t._v(" "),a("tr",[a("td",[t._v("60")]),t._v(" "),a("td",[t._v("1h一小時K線")])]),t._v(" "),a("tr",[a("td",[t._v("120")]),t._v(" "),a("td",[t._v("2h兩小時K線")])]),t._v(" "),a("tr",[a("td",[t._v("240")]),t._v(" "),a("td",[t._v("4h四小時K線")])]),t._v(" "),a("tr",[a("td",[t._v("360")]),t._v(" "),a("td",[t._v("6h六小時K線")])]),t._v(" "),a("tr",[a("td",[t._v("720")]),t._v(" "),a("td",[t._v("12h十二小時K線")])]),t._v(" "),a("tr",[a("td",[t._v("1D")]),t._v(" "),a("td",[t._v("1D日K線")])]),t._v(" "),a("tr",[a("td",[t._v("1W")]),t._v(" "),a("td",[t._v("1W周K線")])]),t._v(" "),a("tr",[a("td",[t._v("1M")]),t._v(" "),a("td",[t._v("1M月K線")])])])]),t._v(" "),a("p",[a("strong",[t._v("推送數據")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回欄位")]),t._v(" "),a("th",[t._v("欄位說明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有錯誤信息，0為正常，1為有錯誤")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送內容")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("數據類型")])]),t._v(" "),a("tr",[a("td",[t._v("klineInfosVo")]),t._v(" "),a("td",[t._v("K線數據")])]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("收盤價")])]),t._v(" "),a("tr",[a("td",[t._v("high")]),t._v(" "),a("td",[t._v("最高價")])]),t._v(" "),a("tr",[a("td",[t._v("low")]),t._v(" "),a("td",[t._v("最低價")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("收盤價")])]),t._v(" "),a("tr",[a("td",[t._v("statDate")]),t._v(" "),a("td",[t._v("k線時間")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("k線時間戳，單位是毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("成交量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" # Response\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"klineInfosVo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54564.31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54711.73")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54418.27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54577.41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-29T11:00:00.000+0800"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1619665200000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1607.0727000000002")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.kline.BTC-USDT.30min"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 數據類型")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("備註")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("更多返回錯誤代碼請看首頁的錯誤代碼描述\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);