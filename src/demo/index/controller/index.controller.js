'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('../../../utils/gum.vue.manager'),
    tplIndexView    = require('../views/tpl.index');

function IndexController () {
    this.moduleName = 'demo';
    this.name       = 'index';
    this.cssFile    = 'demo.index.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = { 'index' : 'index' }
    this.VueManager = VueManager;
}

IndexController.prototype = new FController({
    index: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplIndexView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }
        show.call(this, {
            // DATA
        })
    }
});

(new IndexController()).initController({});