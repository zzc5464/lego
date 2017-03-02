





module.exports = {
    props: ['checked', 'name'],
    data: function() {
        return {
            isChecked: this.checked
        }
    },
    methods: {
        tap: function() {
            // console.log(this.isChecked);
            this.isChecked = !this.isChecked;
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span @click=\"tap\" :checked=\"isChecked\" class=\"_solid_checkbox\" :class=\"{_solid_checkbox_active: isChecked}\">\n</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-93fd89f8", module.exports)
  } else {
    hotAPI.update("_v-93fd89f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}