




module.exports = {
    props: [ 'name', 'size', 'align', 'max', 'placeholder', 'required' ],

    data: function() {
        var obj = {}, list = [];

        this.align 
        && (obj.textAlign = this.align);

        this.size 
        && list.push('_text_size_' + this.size + 'px');

        return {
            classObj: list,
            styleObj: obj
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<input class=\"_number_field\" :class=\"classObj\" :style=\"styleObj\" type=\"tel\" :name=\"name\" :placeholder=\"placeholder\" :maxlength=\"max\" :required=\"required\">\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0355bfa4", module.exports)
  } else {
    hotAPI.update("_v-0355bfa4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}