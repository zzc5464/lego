'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('lego'),
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
                $('#text').tap(function(){
                    navigate('demo/basic/text');
                });
                $('#button').tap(function(){
                    navigate('demo/basic/button');
                });
                $('#field').tap(function(){
                    navigate('demo/basic/field');
                });
                $('#icon').tap(function(){
                    navigate('demo/basic/icon');
                });
                $('#image').tap(function(){
                    navigate('demo/basic/image');
                });
                $('#list').tap(function(){
                    navigate('demo/basic/list');
                });
         
            });
        }
        show.call(this, {
            // DATA
        })
    }
});

(new IndexController()).initController({});