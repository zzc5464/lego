'use strict';

var Vue = require('vue/dist/vue.common');

var components = {
    'b-text'        : require('../basic/text/text.vue.js')
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