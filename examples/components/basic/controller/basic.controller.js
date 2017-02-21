'use strict';

var FController = require('fcontroller'),
    VueManager = require('../../../../src/utils/gum.vue.manager'),
    tplIndexView = require('../views/tpl.index');

function BasicController () {
    this.moduleName = 'components';
    this.name = 'basic';
    this.cssFile = 'basic.css';
    this.classList = [ 'basic' ];
    this.routers = {
        'index': 'index'
    }
    this.VueManager = VueManager;
}

BasicController.prototype = new FController({
    index: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplIndexView(data), data, '购买成功', function (app) {
                $('#done').tap(function () {
                    navigate('financing/fuying7/vue2');
                });
            });
        }
        show.call(this, {
            text: '我是一个占位符',
            text2:'vue content',
            list:[
               1,2,3,4
            ]
        })
    }
});

(new BasicController()).initController({});