'use strict';

var Vue = require('vue/dist/vue.common');

function Events () {
    this.events = new Vue();
}

Events.prototype.emit = function (a, b) {
    this.events.$emit(a, b);
}

Events.prototype.on = function (a, b) {
    this.events.$on(a, b);
}

module.exports = new Events();