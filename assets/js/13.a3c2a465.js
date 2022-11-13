(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(t,r,a){"use strict";a.r(r);var e=a(14),o=Object(e.a)({},function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("PicGo-Core是"),r("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo"),r("OutboundLink")],1),t._v("2.0版本里将会预置的底层核心组件。它可以看做是一个简单的上传流程系统。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("除个别特意声明外，本文档里的"),r("code",[t._v("picgo")]),t._v("与"),r("code",[t._v("PicGo-Core")]),t._v("将视为同一个东西。而"),r("code",[t._v("PicGo")]),t._v("将视为"),r("code",[t._v("picgo")]),t._v("的"),r("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron版"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),r("ul",[r("li",[t._v("支持CLI调用")]),t._v(" "),r("li",[t._v("支持API调用")]),t._v(" "),r("li",[t._v("支持插件系统")])]),t._v(" "),r("h2",{attrs:{id:"它是如何工作的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的","aria-hidden":"true"}},[t._v("#")]),t._v(" 它是如何工作的？")]),t._v(" "),r("p",[t._v("下图是PicGo-Core的生命周期：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://pic.molunerfinn.com/picgo/docs/core-lifecycle.png",alt:"flow"}})]),t._v(" "),r("h3",{attrs:{id:"_4个部件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4个部件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4个部件")]),t._v(" "),r("ol",[r("li",[t._v("Input（输入）：接受来自外部的图片输入，默认是通过路径或者完整的图片base64信息")]),t._v(" "),r("li",[t._v("Transformer（转换器）：把输入转换成可以被上传器上传的图片对象（包含图片尺寸、base64、图片名等信息）")]),t._v(" "),r("li",[t._v("Uploader（上传器）：将来自转换器的输出上传到指定的地方，默认的上传器将会是SM.MS")]),t._v(" "),r("li",[t._v("Output（输出）：输出上传的结果，通常可以在输出的imgUrl里拿到结果")])]),t._v(" "),r("h3",{attrs:{id:"_3个生命周期钩子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3个生命周期钩子","aria-hidden":"true"}},[t._v("#")]),t._v(" 3个生命周期钩子")]),t._v(" "),r("ol",[r("li",[t._v("beforeTransform：可以获取input信息")]),t._v(" "),r("li",[t._v("beforeUpload：可以获取通过转换器的output信息")]),t._v(" "),r("li",[t._v("afterUpload：可以获取最终的output信息")])]),t._v(" "),r("p",[t._v("使用者可以通过CLI输入图片或者通过API调用输入图片，而后picgo将会按照上述生命周期流程实现图片上传并获取URL。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("插件可以开发不同的Uploader、Transformer，还可以接入3个生命周期钩子实现复杂的上传需求。")])])])},[],!1,null,null,null);r.default=o.exports}}]);