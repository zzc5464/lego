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
    show: function (title, tpl, callback, data) {
        var html;

        html     = tpl(data);
        title    = title || '';
        data     = data  || {};
        callback = function () {};

        this.renderVUE(html, data, title, function (app) {
            callback();
        });
    },

    flype: function () {
        this.show('可折叠信息', tplFlypeView);
    },

    stick: function () {
        this.show('小提示展示', tplStickView);
    },

    remarks: function () {
        this.show('小提示展示', tplRemarksView);
    },

    password: function () {
        this.show('密码展示', tplPasswordView);
    },

    stages: function () {
        this.show('流程进度展示', tplStagesView);
    },

    progress: function () {
        this.show('流程进度展示', tplProgressView);
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
        this.show('时间段', tplTimelineView);
    },

    protocol: function () {
        this.show('协议同意', tplProtocolView);
    },

    table: function () {
        this.show('表格示例', tplTableView);
    },

    dock: function () {
        this.show('按钮组件', tplDockView);
    },

    panel: function () {
        this.show('文字面板', tplPanelView);
    },

    lead: function () {
        this.show('头条', tplLeadView);
    }
});

(new AssembleController()).initController({});