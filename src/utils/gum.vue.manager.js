'use strict';

var Vue = require('vue/dist/vue.common');

var components = {
    'b-text': require('../basic/text/text.vue.js'),
    'b-highlight': require('../basic/highlight/highlight.vue.js'),
    'b-skeleton': require('../basic/skeleton/skeleton.vue.js'),

    'b-icon': require('../basic/icon/icon.vue.js'),

    'b-image': require('../basic/image/image.vue.js'),
    'b-svg': require('../basic/svg/svg.vue.js'),

    'b-button': require('../basic/button/button.vue.js'),
    'b-text-button': require('../basic/text-button/text-button.vue.js'),
    'b-tab-button': require('../basic/tab-button/tab-button.vue.js'),
    'b-image-button': require('../basic/image-button/image-button.vue.js'),

    'b-text-field': require('../basic/text-field/text-field.vue.js'),
    'b-address-field': require('../basic/text-field/text-field.vue.js'),
    'b-email-field': require('../basic/text-field/text-field.vue.js'),
    'b-number-field': require('../basic/number-field/number-field.vue.js'),
    'b-tel-field': require('../basic/tel-field/tel-field.vue.js'),

    'p-main': require('../page/main/main.vue.js'),
    'p-footer': require('../page/footer/footer.vue.js'),
    'p-header': require('../page/header/header.vue.js'),
    'p-cover': require('../page/cover/cover.vue.js'),
    'p-mask': require('../page/mask/mask.vue.js'),
    's-single-cell': require('../structure/single-cell/single-cell.vue.js'),
    's-cell': require('../structure/cell/cell.vue.js'),
    's-column': require('../structure/column/column.vue.js'),
    's-flex-column': require('../structure/flex-column/flex-column.vue.js'),
    's-sticker': require('../structure/sticker/sticker.vue.js'),
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