var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n._childtext[_v-02d50f24] {\n    vertical-align: 2px;\n}\n")








var childText = require('../text/text.vue.js');
var childIcon = require('../icon/icon.vue.js');
module.exports = {
    props: ['size', 'color','name'],
    data: function() {
        return {
            obj: {
                fontSize: this.size + 'rem',
                color: this.color
            }
        }
    },
    methods: {
        tap: function(){
            console.log('please !!!')
        }
    },
    components: {
        'child-text': childText,
        'child-icon': childIcon
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span @click=\"tap\" _v-02d50f24=\"\">\n    <child-text :style=\"obj\" class=\"_select_text\" _v-02d50f24=\"\"><slot _v-02d50f24=\"\"></slot></child-text>\n    <child-icon name=\"angle-right-bold\" color=\"light\" size=\"28\" _v-02d50f24=\"\"></child-icon>\n</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n._childtext[_v-02d50f24] {\n    vertical-align: 2px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-02d50f24", module.exports)
  } else {
    hotAPI.update("_v-02d50f24", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}