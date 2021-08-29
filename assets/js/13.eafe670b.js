(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{195:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("picgo 需要配置文件来启动。当你未指定配置文件的时候，picgo 将会使用默认配置文件来启动。")]),s._v(" "),a("h2",{attrs:{id:"默认配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认配置文件")]),s._v(" "),a("p",[s._v("picgo 的默认配置文件为"),a("code",[s._v("~/.picgo/config.json")]),s._v("。其中"),a("code",[s._v("~")]),s._v("为用户目录。不同系统的用户目录不太一样。")]),s._v(" "),a("p",[s._v("linux 和 macOS 均为"),a("code",[s._v("~/.picgo/config.json")]),s._v("。")]),s._v(" "),a("p",[s._v("windows 则为"),a("code",[s._v("C:\\Users\\你的用户名\\.picgo\\config.json")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"自动生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成","aria-hidden":"true"}},[s._v("#")]),s._v(" 自动生成")]),s._v(" "),a("p",[a("strong",[s._v("通常来说你只需要配置 "),a("code",[s._v("Uploader")]),s._v(" 即可，所以你可以通过 "),a("code",[s._v("picgo set uploader")]),s._v(" 来进入交互式命令行，配置成功后会自动生成配置文件，无需复制粘贴！其他更多的命令可以参考 "),a("router-link",{attrs:{to:"/zh/guide/commands.html"}},[s._v("CLI 命令")]),s._v(" 一章。")],1)]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("同时，填好图床配置之后，请务必通过 "),a("code",[s._v("picgo use uploader")]),s._v(" 选择当前要使用的 "),a("code",[s._v("Uploader")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ picgo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" uploader\n? Choose a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" uploader "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  smms\n❯ tcyun\n  github\n  qiniu\n  imgur\n  aliyun\n  upyun\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Move up and down to reveal "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" choices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"手动生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动生成","aria-hidden":"true"}},[s._v("#")]),s._v(" 手动生成")]),s._v(" "),a("p",[s._v("如果你要手动生成配置文件，需要自己创建对应的目录、JSON 文件以及至少有如下的配置项（因此还是推荐通过命令行自动生成配置文件）：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"picBed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uploader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smms"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代表当前的默认上传图床为 SM.MS,")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"smms"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从 https://sm.ms/home/apitoken 获取的 token")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"picgoPlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为插件预留")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"picbed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed")]),s._v(" "),a("p",[s._v("作为 picgo 最主要的配置项，picBed 里包括了当前上传图床，以及所有上传图床的配置。")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("插件开发者注意")]),s._v(" "),a("p",[s._v("如果一个 Uploader 的名字为"),a("code",[s._v("xxx")]),s._v("，那么它的配置信息会放置在"),a("code",[s._v("picBed.xxx")]),s._v("里。这个将有助于 PicGo 的 electron 版本进行配置。")])]),s._v(" "),a("h3",{attrs:{id:"picbed-uploader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-uploader","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.uploader")]),s._v(" "),a("ul",[a("li",[s._v("type: string")]),s._v(" "),a("li",[s._v("default: "),a("code",[s._v("smms")])])]),s._v(" "),a("p",[s._v("表明当前的上传图床是哪个。默认值是"),a("code",[s._v("smms")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"picbed-current"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-current","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.current")]),s._v(" "),a("p",[s._v("作用与"),a("code",[s._v("picBed.uploader")]),s._v("一致，主要是为了兼容 PicGo 的 electron 版本而留下的配置。未来有可能抛弃。")]),s._v(" "),a("h3",{attrs:{id:"picbed-smms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-smms","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.smms "),a("Badge",{attrs:{text:"1.4.7+"}})],1),s._v(" "),a("p",[s._v("SMMS 图床的相关配置。注册并登录 "),a("a",{attrs:{href:"https://sm.ms/home/apitoken",target:"_blank",rel:"noopener noreferrer"}},[s._v("smms"),a("OutboundLink")],1),s._v(" 获取 "),a("code",[s._v("token")]),s._v("。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#smms",target:"_blank",rel:"noopener noreferrer"}},[s._v("wiki"),a("OutboundLink")],1),s._v(" 进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册后获取的 api token")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"picbed-qiniu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-qiniu","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.qiniu")]),s._v(" "),a("p",[s._v("七牛图床的相关配置。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#%E4%B8%83%E7%89%9B%E5%9B%BE%E5%BA%8A",target:"_blank",rel:"noopener noreferrer"}},[s._v("wiki"),a("OutboundLink")],1),s._v("进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储空间名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义域名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"z0"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"z1"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"z2"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"na0"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"as0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储区域编号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 网址后缀，比如？imgslim")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义存储路径，比如 img/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"picbed-upyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-upyun","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.upyun")]),s._v(" "),a("p",[s._v("又拍云的相关配置。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#%E5%8F%88%E6%8B%8D%E4%BA%91",target:"_blank",rel:"noopener noreferrer"}},[s._v("wiki"),a("OutboundLink")],1),s._v("进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储空间名，及你的服务名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"operator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 操作员")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 针对图片的一些后缀处理参数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义存储路径，比如 img/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加速域名，注意要加 http://或者 https://")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"picbed-tcyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-tcyun","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.tcyun")]),s._v(" "),a("p",[s._v("腾讯云 COS 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#腾讯云 cos) 进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"secretId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储桶名，v4 和 v5 版本不一样")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"appId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储区域，例如 ap-beijing-1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义存储路径，比如 img/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义域名，注意要加 http://或者 https://")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v5"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v4"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// COS 版本，v4 或者 v5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"picbed-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-github","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.github")]),s._v(" "),a("p",[s._v("GitHub 图床的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github 图床)进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 仓库名，格式是 username/reponame")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// github token")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义存储路径，比如 img/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义域名，注意要加 http://或者 https://")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"branch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分支名，默认是 main")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"picbed-aliyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-aliyun","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.aliyun")]),s._v(" "),a("p",[s._v("阿里云 OSS 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#阿里云 oss) 进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessKeyId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessKeySecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储空间名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储区域代号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义存储路径")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义域名，注意要加 http://或者 https://")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 针对图片的一些后缀处理参数 PicGo 2.2.0+ PicGo-Core 1.4.0+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"picbed-imgur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-imgur","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.imgur")]),s._v(" "),a("p",[s._v("Imgur 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#imgur 图床)进行配置。")]),s._v(" "),a("p",[s._v("默认值如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clientId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// imgur 的 clientId")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代理地址，仅支持 http 代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"picbed-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-proxy","aria-hidden":"true"}},[s._v("#")]),s._v(" picBed.proxy")]),s._v(" "),a("p",[s._v("自定义代理配置，picgo 内部使用 "),a("code",[s._v("request")]),s._v(" 进行图片上传等网络请求，"),a("code",[s._v("picBed.proxy")]),s._v(" 将会被用作 "),a("a",{attrs:{href:"https://github.com/request/request#proxies",target:"_blank",rel:"noopener noreferrer"}},[s._v("request 的 proxy 配置"),a("OutboundLink")],1),s._v("，目前只支持 HTTP 代理。 默认为空表示不设置代理。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:1081"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"picgoplugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgoplugins","aria-hidden":"true"}},[s._v("#")]),s._v(" picgoPlugins")]),s._v(" "),a("p",[s._v("这个配置项将会将所有插件名放置进去。主要用于判断插件是否被启用或者禁用。 "),a("strong",[s._v("picgo 自动生成，不需要配置！")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"picgo-plugin-xxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该插件被启用")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"picgo-plugin-yyy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该插件被禁用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"transformer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transformer","aria-hidden":"true"}},[s._v("#")]),s._v(" transformer")]),s._v(" "),a("p",[s._v("这个配置项主要用于存放第三方插件里的 Transformer 的相关配置。")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("插件开发者注意")]),s._v(" "),a("p",[s._v("如果一个 Transformer 的名字为"),a("code",[s._v("xxx")]),s._v("，那么它的配置信息会放置在"),a("code",[s._v("transformer.xxx")]),s._v("里。这将有助于 PicGo 的 electron 版本进行配置。")])]),s._v(" "),a("p",[s._v("默认值："),a("code",[s._v("{}")])]),s._v(" "),a("h2",{attrs:{id:"picgo-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgo-plugin","aria-hidden":"true"}},[s._v("#")]),s._v(" picgo-plugin-*")]),s._v(" "),a("p",[s._v("如果你为 picgo 开发了一个插件，如果这个插件本身需要一些配置项，那么这个插件对应的配置应该直接放置在配置文件下的同名配置里：")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"picgo-plugin-xxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);