'use strict';

var FController         = require('fcontroller'),
    VueManager          = require('lego'),
    
    tplFlypeView        = require('../views/tpl.flype'),
    tplNotetipsView     = require('../views/tpl.notetips'),
    tplHammertipsView   = require('../views/tpl.hammertips'),
    tplPasswordView     = require('../views/tpl.password'),
    tplProgressView     = require('../views/tpl.progress'),
    tplStageView        = require('../views/tpl.stage'),
    tplStepwiseView     = require('../views/tpl.stepwise'),
    tplTimelineView     = require('../views/tpl.timeline'),
    tplTimepointView    = require('../views/tpl.timepoint'),
    tplProtocolView     = require('../views/tpl.protocol'),
    tplAssetheaderView     = require('../views/tpl.assetheader'),

    tplTableView        = require('../views/tpl.table'),
    tplDockView         = require('../views/tpl.dock'),
    tplPanelView        = require('../views/tpl.panel');

function AssembleController () {
    this.moduleName = 'demo';
    this.name       = 'assemble';
    this.cssFile    = 'demo.assemble.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = {
        flype       : 'flype',
        notetips    : 'notetips',
        hammertips  : 'hammertips',
        password    : 'password',
        progress    : 'progress',
        stage       : 'stage',
        stepwise    : 'stepwise',
        timeline    : 'timeline',
        timepoint   : 'timepoint',
        protocol    : 'protocol',
        table       : 'table',
        dock        : 'dock',
        panel       : 'panel',
        assetheader : 'assetheader'
    }

    this.VueManager = VueManager;
}

AssembleController.prototype = new FController({
    flype: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplFlypeView(data), data, '可折叠信息', function (app) {
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
    notetips: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplNotetipsView(data), data, '小提示展示', function (app) {
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
    hammertips: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplHammertipsView(data), data, '小提示展示', function (app) {
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
            this.renderVUE(tplPasswordView(data), data, '密码展示', function (app) {
                var ss = $('#pwd')[0].getAttribute('check');
                console.log(ss);
            });
        }

        show.call(this, {
            len: 2
        });
    },
    progress: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplProgressView(data), data, '流程进度展示', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
            ele: {
                desc1: '领取信息1',
                desc2: '领取信息2',
                desc3: '领取信息3',
                desc4: '领取信息4'
            },
            ele1: {
                desc1: '交易密码验证',
                desc2: '手机号码验证'
            },
            ele2: {
                desc1: '领取信息1',
                desc2: '领取信息2',
                desc3: '领取信息3'
            },
            ele3: {
                desc1: '',
                desc2: '',
                desc3: '',
                desc4: ''
            }
        });
    },
    stepwise: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplStepwiseView(data), data, '进度展示', function (app) {
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
            this.renderVUE(tplTimelineView(data), data, '时间段', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {
           ele: [
                {
                    time: '2016-04-19',
                    desc: '提交申购'
                },
                {
                    time: '2016-04-20',
                    desc: '审核成功'
                },
                {
                    time: '2016-04-21',
                    desc: '等待结果'
                },
                {
                    time: '2016-04-22',
                    desc: '等待收益'
                }
            ],
            ele2: [
                {
                    time: '2016-04-19',
                    desc: '提交申购'
                },
                {
                    time: '2016-04-20',
                    desc: '审核成功'
                },
                {
                    time: '2016-04-21',
                    desc: '等待结果'
                }
            ]
        });
    },
    timepoint: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTimepointView(data), data, '时间段', function (app) {
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
            this.renderVUE(tplProtocolView(data), data, '协议同意', function (app) {
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

    table: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTableView(data), data, '表格示例', function (app) {});
        }

        show.call(this, {});
    },

    dock: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplDockView(data), data, '按钮组件', function (app) {});
        }

        show.call(this, {});
    },

    panel: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplPanelView(data), data, '文字面板', function (app) {});
        }

        show.call(this, {});
    },

    assetheader: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplAssetheaderView(data), data, '文字面板', function (app) {});
        }

        show.call(this, {});
    }
});

(new AssembleController()).initController({});