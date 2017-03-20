'use strict';

var FController         = require('fcontroller'),
    VueManager          = require('lego'),
    
    tplFlypeView        = require('../views/tpl.flype'),
    tplPasswordView          = require('../views/tpl.password'),
    tplProgressView     = require('../views/tpl.progress'),
    tplStepwiseView        = require('../views/tpl.stepwise'),
    tplTimelineView        = require('../views/tpl.timeline'),
    tplProtocolView     = require('../views/tpl.protocol');

function AssembleController () {
    this.moduleName = 'demo';
    this.name       = 'assemble';
    this.cssFile    = 'demo.assemble.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = {
        flype: 'flype',
        password: 'password',
        progress: 'progress',
        stepwise: 'stepwise',
        timeline: 'timeline',
        protocol: 'protocol'
    }

    this.VueManager = VueManager;
}

AssembleController.prototype = new FController({
    flype: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplFlypeView(data), data, '购买成功', function (app) {
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
    password: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplPasswordView(data), data, '购买成功', function (app) {
                
                
            });
        }

        show.call(this, {
            // DATA
        });
    },
    progress: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplProtocolView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    stepwise: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplStepwiseView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    timeline: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTimelineView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
            // DATA
        });
    },
    protocol: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplProtocolView(data), data, '购买成功', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
            // DATA
        });
    }
});

(new AssembleController()).initController({});