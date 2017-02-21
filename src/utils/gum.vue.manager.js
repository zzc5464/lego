'use strict';

var Vue = require('vue/dist/vue.common');

var components = {
    'b-text': require('../basic/text/text.vue.js'),
    'b-highlight': require('../basic/highlight/highlight.vue.js'),
    'b-skeleton': require('../basic/skeleton/skeleton.vue.js'),
    'b-icon': require('../basic/icon/icon.vue.js'),
    'b-image': require('../basic/image/image.vue.js'),
    'b-svg': require('../basic/svg/svg.vue.js'),
    'p-main': require('../page/main/main.vue.js'),
    'p-footer': require('../page/footer/footer.vue.js'),
    'p-header': require('../page/header/header.vue.js'),
    'p-cover': require('../page/cover/cover.vue.js'),
    'p-mask': require('../page/mask/mask.vue.js'),
    'p-presentation': require('../page/presentation/presentation.vue.js'),
    'p-popup': require('../page/popup/popup.vue.js')
};

function VueManager() {
    this.instance = null;
}

VueManager.prototype = {
    getInstance: function(opts) {
        this.instance && this.instance.$destroy();
        this.instance = new Vue(this.registerComponents(opts));

        return this.instance;
    },

    registerComponents: function(opts) {
        opts.components = components;

        return opts;
    }
}

module.exports = new VueManager();