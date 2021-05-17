(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{389:function(t,s,a){"use strict";a.r(s);var r=a(26),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"account-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-interface"}},[t._v("#")]),t._v(" Account Interface")]),t._v(" "),a("h2",{attrs:{id:"_1-get-perpetual-swap-account-asset-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-perpetual-swap-account-asset-information"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1. Get Perpetual Swap Account Asset Information")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Get asset information of user‘s Perpetual Account\n")])])]),a("p",[a("strong",[t._v("HTTP Requests")])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("\t# Request\n    POST api/v1/user/getBalance\n")])])]),a("p",[a("strong",[t._v("Request Parameters")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Parameters")])]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[a("strong",[t._v("Field Description")])]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("apiKey")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td",[t._v("Interface Key")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td",[t._v("Timestamp of initiating the request, unit: ms")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("currency")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td",[t._v("Account Asset")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("Return Parameters")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Parameters")])]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("Int64")]),t._v(" "),a("td",[t._v("error code, 0 means successfully response, others means response failure")])]),t._v(" "),a("tr",[a("td",[t._v("msg")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Error Details Description")])]),t._v(" "),a("tr",[a("td",[t._v("userId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("User's ID")])]),t._v(" "),a("tr",[a("td",[t._v("currency")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("User‘s asset")])]),t._v(" "),a("tr",[a("td",[t._v("balance")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Asset Balance")])]),t._v(" "),a("tr",[a("td",[t._v("equity")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Net Asset Value")])]),t._v(" "),a("tr",[a("td",[t._v("unrealisedPNL")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Unrealized Profit/Loss")])]),t._v(" "),a("tr",[a("td",[t._v("realisedPNL")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("realized Profit/Loss")])]),t._v(" "),a("tr",[a("td",[t._v("availableMargin")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Available Margin")])]),t._v(" "),a("tr",[a("td",[t._v("usedMargin")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Used Margin")])]),t._v(" "),a("tr",[a("td",[t._v("freezedMargin")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Freezed Margin")])]),t._v(" "),a("tr",[a("td",[t._v("longLeverage")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("long Leverage")])]),t._v(" "),a("tr",[a("td",[t._v("shortLeverage")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("short Leverage")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# Response\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"equity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unrealisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"realisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"availableMargin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usedMargin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freezedMargin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longLeverage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shortLeverage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-perpetual-swap-positions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-perpetual-swap-positions"}},[t._v("#")]),t._v(" "),a("strong",[t._v("2. Perpetual Swap Positions")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Retrieve information on users' positions of Perpetual Swap.\n")])])]),a("p",[a("strong",[t._v("HTTP Requests")])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("    # Request\n    POST api/v1/user/getPositions\n")])])]),a("p",[a("strong",[t._v("Request Method")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("POST\n")])])]),a("p",[a("strong",[t._v("Request Parameters")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Parameters")])]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Field Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td",[t._v('There must be a hyphen/ "-" in the trading pair symbol. eg: BTC-USDT; Return all if the field is null.')])]),t._v(" "),a("tr",[a("td",[t._v("apiKey")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YES")]),t._v(" "),a("td",[t._v("Timestamp of initiating the request, unit: ms")])])])]),t._v(" "),a("p",[a("strong",[t._v("Return Parameters")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Parameters")])]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("Int64")]),t._v(" "),a("td",[t._v("error code, 0 means successfully response, others means response failure")])]),t._v(" "),a("tr",[a("td",[t._v("msg")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Error Details Description")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Trading pair symbol")])]),t._v(" "),a("tr",[a("td",[t._v("currency")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Asset Type")])]),t._v(" "),a("tr",[a("td",[t._v("positionId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Position ID")])]),t._v(" "),a("tr",[a("td",[t._v("positionSide")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Direction Long/Short")])]),t._v(" "),a("tr",[a("td",[t._v("marginMode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("margin mode Cross/Isolated")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Volume of opened positions")])]),t._v(" "),a("tr",[a("td",[t._v("availableVolume")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Volume of positions that can be closed")])]),t._v(" "),a("tr",[a("td",[t._v("unrealisedPNL")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Unrealized Profit/Loss")])]),t._v(" "),a("tr",[a("td",[t._v("realisedPNL")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Realized Profit/Loss")])]),t._v(" "),a("tr",[a("td",[t._v("margin")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Margin")])]),t._v(" "),a("tr",[a("td",[t._v("avgPrice")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Ave. price")])]),t._v(" "),a("tr",[a("td",[t._v("liquidatedPrice")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("Estimated Liquidation Price")])]),t._v(" "),a("tr",[a("td",[t._v("leverage")]),t._v(" "),a("td",[t._v("Float64")]),t._v(" "),a("td",[t._v("leverage")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n# Response\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"positions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BTC-USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"positionId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12345678"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"positionSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Long"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marginMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cross"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"availableVolume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unrealisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"realisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avgPrice"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"liquidatedPrice"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leverage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETH-USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"positionSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Short"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marginMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Isolated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"availableVolume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unrealisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"realisedPNL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avgPrice"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"liquidatedPrice"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leverage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);