'use strict';

var Vue = require('vue/dist/vue.common');

var components = {
    'b-text'        : require('../basic/text/text.vue.js'),
    'test-parent'        : require('../basic/text/parent.vue.js'),
    'test-child'        : require('../basic/text/child.vue.js'),

    's-single-cell' : require('../structure/single-cell/single-cell.vue.js'),
    's-cell'        : require('../structure/cell/cell.vue.js'),
    's-column'      : require('../structure/column/column.vue.js'),
    's-flex-column' : require('../structure/flex-column/flex-column.vue.js'),
    's-sticker'     : require('../structure/sticker/sticker.vue.js'),

    'p-main'        : require('../page/main/main.vue.js'),
    'p-footer'      : require('../page/footer/footer.vue.js'),
    'p-header'      : require('../page/header/header.vue.js'),
    'p-cover'       : require('../page/cover/cover.vue.js'),
    'p-mask'        : require('../page/mask/mask.vue.js'),
    'p-presentation': require('../page/presentation/presentation.vue.js'),
    'p-popup'       : require('../page/popup/popup.vue.js')
};

function VueManager () {    
    this.instance = null;
}

VueManager.prototype = {
    getInstance: function (opts) {
        this.instance && this.instance.$destroy();
        this.instance = new Vue(this.registerComponents(opts));

        return this.instance;
    },

    registerComponents: function (opts) {
        opts.components = components;

        return opts;
    }
}

module.exports = new VueManager();