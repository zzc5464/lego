




module.exports = {
    props: [ 'src', 'preload', 'width', 'height' ],

    data: function () {

        var obj = {};

        this.width  && (obj.width   = this.width  + 'rem');
        this.height && (obj.height  = this.height + 'rem');

        return {
            styleObj: obj
        }
    },

    methods: {
        load: function() {
            this.preload === 'true' && (function () {
                
                var img = new Image();
                img.src = this.src;

                if(img.complete) {
                    console.log('complete ok');
                    return;
                }

                img.onload = function(){
                    console.log('ok');
                }

            })();
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<img @load=\"load\" class=\"_image\" :style=\"styleObj\" :src=\"src\" :preload=\"preload\">\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-64bddec8", module.exports)
  } else {
    hotAPI.update("_v-64bddec8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}