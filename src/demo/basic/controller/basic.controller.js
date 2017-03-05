'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('../../../utils/gum.vue.manager'),
    tplTextView     = require('../views/tpl.text'),
    tplButtonView   = require('../views/tpl.button'),
    tplFieldView   = require('../views/tpl.field'),
    tplIconView   = require('../views/tpl.icon'),
    tplImageView   = require('../views/tpl.image'),
    tplListView   = require('../views/tpl.list');

function BasicController () {
    this.moduleName = 'demo';
    this.name       = 'basic';
    this.cssFile    = 'demo.basic.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = { 
        'text' : 'text',
        'button' : 'button',
        'field' : 'field',
        'icon' : 'icon',
        'image' : 'image',
        'list' : 'list'
    }
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
        });
    },
    button: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplButtonView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        });
    },
    field: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplFieldView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        });
    },
    icon: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplIconView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        });
    },
    image: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplImageView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        });
    },
    list: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplListView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
            });
        }

        show.call(this, {
            // DATA
        });
    }
    
});

(new BasicController()).initController({});