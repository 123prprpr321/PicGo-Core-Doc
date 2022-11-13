(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{282:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"插件测试与发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件测试与发布","aria-hidden":"true"}},[s._v("#")]),s._v(" 插件测试与发布")]),s._v(" "),t("h2",{attrs:{id:"插件测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 插件测试")]),s._v(" "),t("h3",{attrs:{id:"普通插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通插件","aria-hidden":"true"}},[s._v("#")]),s._v(" 普通插件")]),s._v(" "),t("p",[s._v("首先确保你全局安装了"),t("code",[s._v("picgo")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" picgo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" picgo -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("然后运行一下"),t("code",[s._v("picgo -h")]),s._v("看看是否安装成功。（这步是必须的，因为第一次安装需要先运行一下，然后picgo会创建默认的配置文件和生成package.json等初始化操作）")])]),s._v(" "),t("p",[s._v("然后将你所写的插件的文件夹放到picgo"),t("RouterLink",{attrs:{to:"/zh/guide/config.html#默认配置文件"}},[s._v("默认的配置文件")]),s._v("所在的目录里。"),t("strong",[s._v("注意插件文件夹名字必须以"),t("code",[s._v("picgo-plugin-")]),s._v("作为前缀，否则安装的时候picgo将不会读取。")])],1),s._v(" "),t("p",[s._v("然后在picgo默认配置文件所在的目录下，输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ./picgo-plugin-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-plugin-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就能将你的插件安装到picgo所在的配置文件夹内，picgo在运行的时候也能读取了。之后可以根据你的开发需要，修改你的插件内容，并运行picgo相应的命令查看效果和测试。")]),s._v(" "),t("h3",{attrs:{id:"gui插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui插件","aria-hidden":"true"}},[s._v("#")]),s._v(" GUI插件")]),s._v(" "),t("p",[s._v("如果你想要开发一个GUI插件，那么你首先要去下载一下"),t("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("PicGo"),t("OutboundLink")],1),s._v("并安装。安装完毕后请打开软件，第一次运行将初始化配置。")]),s._v(" "),t("p",[t("strong",[s._v("如果你使用 PicGo 2.3.0+ 版本，可以直接使用插件导入功能，选择你所开发的picgo插件目录即可：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.molunerfinn.com/picgo/docs/202108282004729.png",alt:""}})]),s._v(" "),t("p",[s._v("否则参考如下：")]),s._v(" "),t("p",[s._v("electron版的PicGo配置文件的路径在不同的系统里是不同的：")]),s._v(" "),t("ul",[t("li",[s._v("Windows: "),t("code",[s._v("%APPDATA%\\picgo\\data.json")])]),s._v(" "),t("li",[s._v("Linux: "),t("code",[s._v("$XDG_CONFIG_HOME/picgo/data.json")]),s._v(" or "),t("code",[s._v("~/.config/picgo/data.json")])]),s._v(" "),t("li",[s._v("macOS: "),t("code",[s._v("~/Library/Application\\ Support/picgo/data.json")])])]),s._v(" "),t("p",[s._v("举例，在windows里你可以在：")]),s._v(" "),t("p",[t("code",[s._v("C:\\Users\\你的用户名\\AppData\\Roaming\\picgo\\data.json")]),s._v("找到它。")]),s._v(" "),t("p",[s._v("在linux里你可以在：")]),s._v(" "),t("p",[t("code",[s._v("~/.config/picgo/data.json")]),s._v("里找到它。")]),s._v(" "),t("p",[s._v("macOS同理。")]),s._v(" "),t("p",[s._v("此时你的插件目录比如在 "),t("code",[s._v("/usr/home/picgo-plugin-<your-plugin-name>")]),s._v("里，")]),s._v(" "),t("p",[s._v("在PicGo默认配置文件所在的目录下，输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" /usr/home/picgo-plugin-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-plugin-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就能将你的插件安装到PicGo所在的配置文件夹内，PicGo在运行的时候也能读取了。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("GUI插件的任何修改都需要 "),t("strong",[s._v("重启")]),s._v(" PicGo才能生效，重启不代表关闭主窗口再重新打开，而是 "),t("strong",[s._v("完全退出")]),s._v(" 整个PicGo的进程，然后再打开PicGo才能看到效果。主要原因是底层依赖了Node.js的"),t("code",[s._v("require")]),s._v("来加载插件，所以有运行时的缓存。PicGo在 "),t("code",[s._v("2.0.2")]),s._v(" 版本开始，可以通过右键菜单栏图标或者Mini窗口找到「重启应用」的按钮来快速重启应用。")])]),s._v(" "),t("h2",{attrs:{id:"插件发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件发布","aria-hidden":"true"}},[s._v("#")]),s._v(" 插件发布")]),s._v(" "),t("p",[s._v("为了让一个插件能够被其它人使用，你必须遵循"),t("code",[s._v("picgo-plugin-<name>")]),s._v("的命名约定将其发布到npm上。插件遵循命名约定之后就可以：")]),s._v(" "),t("ul",[t("li",[s._v("被其他用户搜索到。")]),s._v(" "),t("li",[s._v("通过"),t("code",[s._v("picgo install <name>")]),s._v("或者"),t("code",[s._v("picgo add <name>")]),s._v("来安装。")])]),s._v(" "),t("p",[s._v("比如你发布了一个叫做"),t("code",[s._v("picgo-plugin-wow")]),s._v("的插件，那么用户可以通过"),t("code",[s._v("picgo install wow")]),s._v("来安装。")]),s._v(" "),t("p",[s._v("PicGo的官方插件，你可以在PicGo的"),t("a",{attrs:{href:"https://github.com/PicGo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub主页"),t("OutboundLink")],1),s._v("找到。")]),s._v(" "),t("h3",{attrs:{id:"gui插件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui插件-2","aria-hidden":"true"}},[s._v("#")]),s._v(" GUI插件")]),s._v(" "),t("p",[s._v("如果你的插件不是专门针对GUI进行优化的（比如添加了guiMenu等），那么在electron版本的PicGo上安装的时候会有如下提示信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.molunerfinn.com/picgo/docs/5c39ce32045a7.png",alt:""}})]),s._v(" "),t("p",[s._v("并且如果未对GUI进行优化的插件，会在右上角显示一个"),t("code",[s._v("CLI")]),s._v("的标志：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.molunerfinn.com/picgo/docs/5c39ce678a412.png",alt:""}})]),s._v(" "),t("p",[s._v("如果你想要你的插件在"),t("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[s._v("PicGo"),t("OutboundLink")],1),s._v("软件上显示出图标、简介等信息，请遵循以下要求：")]),s._v(" "),t("ul",[t("li",[s._v("在npm包的根目录里放置一张"),t("code",[s._v("logo.png")]),s._v("，否则将会显示"),t("code",[s._v("PicGo")]),s._v("的默认LOGO。")]),s._v(" "),t("li",[s._v("在"),t("code",[s._v("package.json")]),s._v("里增加"),t("code",[s._v("description")]),s._v("字段用于介绍你的插件以及"),t("code",[s._v("homepage")]),s._v("字段用于指向你的插件的主页地址。")]),s._v(" "),t("li",[s._v("在"),t("code",[s._v("package.json")]),s._v("的"),t("code",[s._v("keywords")]),s._v("里添加"),t("code",[s._v('"picgo-gui-plugin"')]),s._v("用于告诉用户你的插件已经针对PicGo软件进行了优化。")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a picgo plugin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/XXX/XXX#readme"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"picgo-gui-plugin"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("如果你有"),t("code",[s._v("Uploader")]),s._v("或者"),t("code",[s._v("Transformer")]),s._v("，你需要将它们在插件的主入口文件中指明出来，以便PicGo能定位到它们：")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("register")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("helper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uploader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("helper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transformer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    register"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    uploader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <- 指明你的Uploader的name")]),s._v("\n    transformer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <- 指明你的Transformer的name")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h3",{attrs:{id:"提交awesome-picgo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交awesome-picgo","aria-hidden":"true"}},[s._v("#")]),s._v(" 提交Awesome-PicGo")]),s._v(" "),t("p",[s._v("为了让你的插件可以被更多人知道，在你发布完插件之后，可以向"),t("a",{attrs:{href:"https://github.com/PicGo/Awesome-PicGo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Awesome-PicGo"),t("OutboundLink")],1),s._v("项目提交一份PR，把你的优秀项目添加到Awesome-list里！")]),s._v(" "),t("p",[s._v("注意添加之前看看"),t("a",{attrs:{href:"https://github.com/PicGo/Awesome-PicGo/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("CONTRIBUTING"),t("OutboundLink")],1),s._v("是否符合添加要求")])])},[],!1,null,null,null);t.default=e.exports}}]);