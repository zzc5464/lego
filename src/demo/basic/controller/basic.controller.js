'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('lego'),
    tplTextView     = require('../views/tpl.text'),
    tplButtonView   = require('../views/tpl.button'),
    tplFieldView   = require('../views/tpl.field'),
    tplIconView   = require('../views/tpl.icon'),
    tplImageView   = require('../views/tpl.image'),
    tplListView   = require('../views/tpl.list'),
    tplFoldingView   = require('../views/tpl.folding'),
    tplUploadingView   = require('../views/tpl.uploading');

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
        'list' : 'list',
        'folding' : 'folding',
        'uploading': 'uploading'
    }
    this.VueManager = VueManager;
}

BasicController.prototype = new FController({
    text: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTextView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#back').tap(function(){
                    window.back();
                });
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
                $('#back').tap(function(){
                    window.back();
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    field: function () {
        var $ = this.$, navigate = this.navigate.bind(this);
        function sendCode (){
            alert('发送给后台了');
        }
        function show (data) {
            this.renderVUE(tplFieldView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#back').tap(function(){
                    window.back();
                });
            });
        }

        show.call(this, {
            sendcode:sendCode
        });
    },
    icon: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplIconView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#back').tap(function(){
                    window.back();
                });
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
                $('#back').tap(function(){
                    window.back();
                });
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
                $('#back').tap(function(){
                    window.back();
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    folding: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplFoldingView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#back').tap(function(){
                    window.back();
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    uploading: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplUploadingView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#back').tap(function(){
                    window.back();
                });
            });
        }

        show.call(this, {
            // DATA
        });
    }
    
});

(new BasicController()).initController({});