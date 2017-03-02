




var bus = require('../../utils/eventBus');
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
            styleObj: obj,
            phone:''

        }
    },
    methods: {
        validate:function(){
            var errorMsg = '';
            if(this.phone.length !== 11){
                errorMsg = "长度应为 11 位！";
            }else if (!this.phone.substr(0,2).match(/[1][3-9]/)){
                errorMsg =  "格式不正确！";
            }else if(!this.phone.match(/[0-9]{11}/)){
                errorMsg = "只能填写数字！";
            }
            return errorMsg;
        },
        sendMsg: function(){
            var valMsg = this.validate();
            bus.$emit('phoneNum',valMsg);
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<input class=\"_input\" :class=\"classObj\" type=\"tel\" name=\"\" :placeholder=\"placeholder\" v-on:input=\"sendMsg\" v-model=\"phone\" :maxlength=\"max\" required=\"required\">\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-08467336", module.exports)
  } else {
    hotAPI.update("_v-08467336", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}