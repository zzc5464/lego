




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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span class=\"_toggle\" @click=\"tap\" :class=\"{_toggle_active: !isChecked}\" :checked=\"isChecked\"></span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-44bb3c24", module.exports)
  } else {
    hotAPI.update("_v-44bb3c24", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}