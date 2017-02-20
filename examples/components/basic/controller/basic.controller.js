'use strict';

var FController = require('fcontroller'),
    tplIndexView = require('../views/tpl.index');

function BasicController () {
    this.moduleName = 'components';
    this.name = 'basic';
    this.cssFile = 'basic.css';
    this.classList = [ 'basic' ];
    this.routers = {
        'index': 'index'
    }
}

BasicController.prototype = new FController({
    index: function () {
        this.renderHTML(tplIndexView(), {title: 'basic'}, function () {});
    }
});

(new BasicController()).initController({});