'use strict';

var Vue = require('vue/dist/vue.common');

var components = {
    'b-text': require('../basic/text/text.vue.js'),
    'b-highlight': require('../basic/highlight/highlight.vue.js'),
    'b-skeleton': require('../basic/skeleton/skeleton.vue.js'),
    'b-icon': require('../basic/icon/icon.vue.js'),
    'b-image': require('../basic/image/image.vue.js'),
    'b-svg': require('../basic/svg/svg.vue.js')
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