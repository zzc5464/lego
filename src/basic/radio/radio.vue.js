var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nspan[_v-0650cddc] {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #dcdcdc;\n    border-radius: 50%;\n    background-color: transparent;\n}\n.active[_v-0650cddc]:after{\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -14px;\n    margin-left: -14px;\n    width: 28px;\n    height: 28px;\n    border: none;\n    background-color: #d7ac62;\n    border-radius: 50%;\n}\n")






module.exports = {
    props: ['checked'],
    data: function() {
        return {
            isChecked: this.checked
        }
    },
    methods: {
        tap: function() {
            console.log(this.isChecked);
            this.isChecked = !this.isChecked;
            
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span @click=\"tap\" :class=\"{active: isChecked}\" :checked=\"isChecked\" _v-0650cddc=\"\">\n</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nspan[_v-0650cddc] {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #dcdcdc;\n    border-radius: 50%;\n    background-color: transparent;\n}\n.active[_v-0650cddc]:after{\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -14px;\n    margin-left: -14px;\n    width: 28px;\n    height: 28px;\n    border: none;\n    background-color: #d7ac62;\n    border-radius: 50%;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0650cddc", module.exports)
  } else {
    hotAPI.update("_v-0650cddc", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}