(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{603:function(n,s,a){n.exports=a.p+"assets/img/randon.1256a9bd.png"},604:function(n,s,a){n.exports=a.p+"assets/img/randomcolor.72cb18df.gif"},646:function(n,s,a){"use strict";a.r(s);var e=a(15),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("1、随机公式")]),n._v(" "),e("blockquote",[e("p",[n._v("var random = Math.random()*(max-min)+min")])]),n._v(" "),e("p",[n._v("1.1、有了随机公式我们就可以来封装随机颜色")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function randomColor(){\n            let random = '#'\n            for(let i=0; i<6; i++){\n                random += parseInt(Math.random() * 15).toString(16)  //随机数取整，并转换成16进制\n            }\n            return random    //返回随机数\n        }\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("img",{attrs:{src:a(603)}}),n._v(" "),e("p",[n._v("1.2、咋们封装两个获取元素的函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("( $ = s => document.querySelector(s))()  //就是自调用函数\nfunction $$(s){ return document.querySelectorAll(s) }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("1.3、给按钮添加点击事件（点击按钮，div盒子变色）")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\n$('button').onclick = function(){\n            Array.from($$('div')).forEach(ele => {  \n                let bunch = randomColor()\n                Object.assign(ele.style,{      //  Object.assign将多个对象合并到一个身上\n                    background: bunch\n                })\n                ele.innerHTML = `<p>${bunch}</p>`  //还是显示一下吧\n            });\n        }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("最后的效果如下  ↓")]),n._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),e("img",{attrs:{src:a(604)}})])}),[],!1,null,null,null);s.default=t.exports}}]);