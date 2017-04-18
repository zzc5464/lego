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
            this.renderVUE(tplIndexView(data), data, 'LEGO', function (app) {
                $('#a-table').tap(function(){
                    navigate('demo/assemble/table');
                });
                $('#a-dock').tap(function(){
                    navigate('demo/assemble/dock');
                });
                $('#a-panel').tap(function(){
                    navigate('demo/assemble/panel');
                });

                $('#a-flype').tap(function(){
                    navigate('demo/assemble/flype');
                });
                $('#a-stick').tap(function(){
                    navigate('demo/assemble/stick');
                });
                $('#a-remarks').tap(function(){
                    navigate('demo/assemble/remarks');
                });
                $('#a-protocol').tap(function(){
                    navigate('demo/assemble/protocol');
                });
                $('#a-stages').tap(function(){
                    navigate('demo/assemble/stages');
                });
                $('#a-password').tap(function(){
                    navigate('demo/assemble/password');
                });
                $('#a-stepwise').tap(function(){
                    navigate('demo/assemble/stepwise');
                });
                $('#a-timeline').tap(function(){
                    navigate('demo/assemble/timeline');
                });
                $('#a-lead').tap(function(){
                    navigate('demo/assemble/lead');
                });

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