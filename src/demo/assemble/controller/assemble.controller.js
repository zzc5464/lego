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
    tplPanelView        = require('../views/tpl.panel'),
    tplListView         = require('../views/tpl.list'),
    tplCommentView      = require('../views/tpl.comment'),
    tplTabbutton      = require('../views/tpl.tabbutton');

var events = require('events');

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
         lead       : 'lead',
         list       : 'list',
         comment    : 'comment',
         tabbutton  : 'tabbutton'
    }

    this.VueManager = VueManager;
}

function updatePageTitleIniOS (title) {
    document.title = title;

    var ua = navigator.userAgent;

    // 若当前浏览器不是 iPhone 下的微信，则直接返回
    if (!(/(micromessenger)+/i.test(ua) && /(iphone)+/i.test(ua))) {
        return;
    }

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
	ifrm.src = 'css/lego.css';
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
        var data = {
            message: '初始值',
            message1: '13311660002'
        }, $ = this.$;


        data.submit = function () {
            alert(data.message1);
        }

        this.show('文字面板', tplPanelView, function () {
            $('#save2').tap(function () {
                alert(data.message1);
                // var errors = [];
                // events.emit('validate', errors);

                // if (errors.length > 0) {
                //     //alert(JSON.stringify(errors));
                //     events.emit('fielderrors', errors);
                // } else {
                //     data.submit();
                // }
            });
        }, data);
    },

    lead: function () {
        this.show('头条', tplLeadView);
    },

    list: function () {
        this.show('列表', tplListView, null, {
            // list: [{name: '123'}, {name: '456'}],
            // 可供选择的银行卡 且 选中第一张 
            list: [
                {"bankName": "平安银行","bankNum":"3453","limit":"100"},
                {"bankName": "建设银行","bankNum":"1233","limit":"200"},
                {"bankName": "浦发银行","bankNum":"2333","limit":"30"}
            ],
            // 点击银行卡  跳转下一页
            list1: [
                {"bankName": "平安银行","bankNum":"3453","limit":"100","support":"1"}
            ],
            // 不支持充值的银行卡 
            list2: [
                {"bankName": "浦发银行","bankNum":"2333","limit":"30","support":"2"},
                {"bankName": "平安银行","bankNum":"3453","limit":"100","support":"2"}
            ],
            // 不支持充值的银行卡 
            list3: [
                {"bankName": "浦发银行","bankNum":"2333","limit":"30","support":"3"},
                {"bankName": "建设银行","bankNum":"1233","limit":"200","support":"3"}
            ],
            // 在途资产
            list4: [
                {"orderName": "工资宝","orderType":"赎回","orderTime":"2015-08-18 09:01:40","orderAmount":"500.50"},
                {"orderName": "定期产品","orderType":"申购","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"}
            ],
            // 账户明细
            list5: [
                {"orderName": "认购-","orderDesc":"财富121期","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"7008.50"},
                {"orderName": "赎回-","orderDesc":"财富121期","orderType":"2","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"},
                {"orderName": "在线充值","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"},
                {"orderName": "线下充值","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"}
            ],
            onTap: function (itemData) {
                console.log(itemData);
            }
        });
    },
    tabbutton: function () {
        this.show('TAB切换按钮', tplTabbutton);
    },

    show: function (title, tpl, callback, data) {

        title    = title || '';
        data     = data || {};
        callback = callback || function () {};

        this.renderVUE(tpl(data), data, title, function () {
            updatePageTitleIniOS(title);
            callback();
        });
    },
    comment: function () {
        this.show('成交量', tplCommentView);
    },
});

(new AssembleController()).initController({});