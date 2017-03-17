'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('lego');

function AssembleController () {
    this.moduleName = 'demo';
    this.name       = 'assemble';
    this.cssFile    = 'demo.assemble.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = {
        flype: 'flype'
    }

    this.VueManager = VueManager;
}

AssembleController.prototype = new FController({
    flype: function () {
        
    }
});

(new AssembleController()).initController({});