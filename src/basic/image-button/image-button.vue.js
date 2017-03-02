var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.share[_v-1ffcc264]{\n    text-align: center;\n}\nimg[_v-1ffcc264] {\n    display: inline-block;\n    border: none;\n    padding: 0;\n    text-align: center;\n    border-radius: 4px;\n    overflow: hidden;\n    margin: 0 auto;\n}\n")








var child = require('../text/text.vue.js');
module.exports = {
    props: [ 'width', 'height', 'filled', 'position', 'src', 'size', 'color'],
    data: function () {
        return {
            pos: this.position,
            sobj: {
                width: (this.width || 4) + 'rem' ,
                height: (this.height || 4) + 'rem'
            },
            obj: {
                width: (this.width || 4) + 'rem' ,
                height: (this.height || 4) + 'rem'
            },
            tobj: {
                fontSize: (this.size || .75) + 'rem',
                color: this.color || '#666'
            }
        };
    },
    methods: {
        tapping: function(){
            this.pos = !this.pos;
            
        }
    },
    components: {
        'txt': child
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"share\" @click=\"tapping\" _v-1ffcc264=\"\">\n    <img :style=\"obj\" :src=\"src\" _v-1ffcc264=\"\"><br _v-1ffcc264=\"\">\n    <txt :style=\"tobj\" v-show=\"pos\" _v-1ffcc264=\"\"><slot _v-1ffcc264=\"\"></slot></txt>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.share[_v-1ffcc264]{\n    text-align: center;\n}\nimg[_v-1ffcc264] {\n    display: inline-block;\n    border: none;\n    padding: 0;\n    text-align: center;\n    border-radius: 4px;\n    overflow: hidden;\n    margin: 0 auto;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1ffcc264", module.exports)
  } else {
    hotAPI.update("_v-1ffcc264", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}