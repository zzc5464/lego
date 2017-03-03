'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('../../../utils/gum.vue.manager'),
    tplTextView    = require('../views/tpl.text');

function BasicController () {
    this.moduleName = 'demo';
    this.name       = 'basic';
    this.cssFile    = 'demo.basic.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = { 'text' : 'text' }
    this.VueManager = VueManager;
}

BasicController.prototype = new FController({
    text: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTextView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        })
    }
});

(new BasicController()).initController({});