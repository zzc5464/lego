'use strict';

var FController         = require('fcontroller'),
    VueManager          = require('lego'),
    
    tplFlypeView        = require('../views/tpl.flype'),
    tplStickView        = require('../views/tpl.stick'),
    tplRemarksView      = require('../views/tpl.remarks'),
    tplPasswordView     = require('../views/tpl.password'),
    tplStagesView       = require('../views/tpl.stages'),
    tplStepwiseView     = require('../views/tpl.stepwise'),
    tplTimelineView     = require('../views/tpl.timeline'),
    tplProtocolView     = require('../views/tpl.protocol'),
    tplLeadView         = require('../views/tpl.lead'),

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
        stick       : 'stick',
        remarks     : 'remarks',
        password    : 'password',
        stages      : 'stages',
        stepwise    : 'stepwise',
        timeline    : 'timeline',
        protocol    : 'protocol',
        table       : 'table',
        dock        : 'dock',
        panel       : 'panel',
        lead        : 'lead'
    }

    this.VueManager = VueManager;
}

AssembleController.prototype = new FController({
    flype: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplFlypeView(data), data, '可折叠信息', function (app) {
            });
        }

        show.call(this, {
            folded: true
        });
    },
    stick: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplStickView(data), data, '小提示展示', function (app) {
            });
        }

        show.call(this, {
        });
    },

    remarks: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplRemarksView(data), data, '小提示展示', function (app) {
            });
        }

        show.call(this, {
        });
    },
    
    password: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplPasswordView(data), data, '密码展示', function (app) {
            });
        }

        show.call(this, {});
    },
    stages: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplStagesView(data), data, '流程进度展示', function (app) {
                // TODO: navigate to component demo pages.
                $('#link').tap(function(){
                    alert('333')
                });
            });
        }

        show.call(this, {});
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
        var dataRate = 3;
        var dataTotal = 5;

        function show (data) {
            this.renderVUE(tplStepwiseView(data), data, '进度展示', function (app) {
                // TODO: navigate to component demo pages.
                $('#tick').tap(function(){
                    dataRate++;
                    alert(1);
                });
            });
        }

        show.call(this, {
            rate: dataRate,
            total: dataTotal
        });
    },

    timeline: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplTimelineView(data), data, '时间段', function (app) {
            });
        }

        show.call(this, {});
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

    lead: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplLeadView(data), data, '头条', function (app) {});
        }

        show.call(this, {});
    }
});

(new AssembleController()).initController({});