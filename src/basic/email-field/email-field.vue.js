




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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<input class=\"_email_field\" :class=\"classObj\" :style=\"styleObj\" type=\"email\" :name=\"name\" :placeholder=\"placeholder\" :maxlength=\"max\" :required=\"required\">\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-47954578", module.exports)
  } else {
    hotAPI.update("_v-47954578", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}