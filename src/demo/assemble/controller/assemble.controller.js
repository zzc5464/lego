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

function updatePageTitleIniOS (title) {
    document.title = title;

	//iframe 加载后的回调函数
	function unloadHandler() {
		ifrm.removeEventListener('load', unloadHandler, false);
		setTimeout(function(){
			document.body.removeChild(ifrm);
		}, 100);
	};
	
	//创建 iframe
	var ifrm = document.createElement('iframe');
	//iframe 指向图标文件
	//ifrm.src = '/favicon.ico';
	ifrm.src = 'assets/images/logo.png';
	ifrm.style.position = 'absolute';
	ifrm.style.top = '-1000px';
	
	//绑定回调函数
	ifrm.addEventListener('load', unloadHandler, false);
	
	//添加 iframe 至文档中
	document.body.appendChild(ifrm);
}

AssembleController.prototype = new FController({

    flype: function () {
        this.show('可折叠提示', tplFlypeView);
    },

    stick: function () {
        this.show('可关闭提示', tplStickView);
    },

    remarks: function () {
        this.show('注意事项', tplRemarksView);
    },

    password: function () {
        this.show('交易密码', tplPasswordView);
    },

    stages: function () {
        this.show('进度条', tplStagesView);
    },

    stepwise: function () {
        this.show('完成进度', tplStepwiseView);
    },

    timeline: function () {
        this.show('时间线', tplTimelineView);
    },

    protocol: function () {
        this.show('协议', tplProtocolView);
    },

    table: function () {
        this.show('表格&空行', tplTableView);
    },

    dock: function () {
        this.show('按钮', tplDockView);
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
            
            if (navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1) {
                updatePageTitleIniOS(title);
            }
            callback();
        });
    }
});

(new AssembleController()).initController({});