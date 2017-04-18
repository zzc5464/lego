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
         flype      : 'flype',
         stick      : 'stick',
         remarks    : 'remarks',
         password   : 'password',
         stages     : 'stages',
         stepwise   : 'stepwise',
         timeline   : 'timeline',
         protocol   : 'protocol',
         table      : 'table',
         dock       : 'dock',
         panel      : 'panel',
         lead       : 'lead'
    }

    this.VueManager = VueManager;
}

AssembleController.prototype = new FController({

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
        this.show('进度展示', tplStepwiseView);
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
    },

    show: function (title, tpl, callback, data) {

        title    = title || '';
        data     = data || {};
        callback = callback || function () {};

        this.renderVUE(tpl(data), data, title, function () {
            callback();
        });
    }
});

(new AssembleController()).initController({});