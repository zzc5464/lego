(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../views/tpl.assetheader":2,"../views/tpl.dock":3,"../views/tpl.flype":4,"../views/tpl.hammertips":5,"../views/tpl.notetips":6,"../views/tpl.panel":7,"../views/tpl.password":8,"../views/tpl.progress":9,"../views/tpl.protocol":10,"../views/tpl.stage":11,"../views/tpl.stepwise":12,"../views/tpl.table":13,"../views/tpl.timeline":14,"../views/tpl.timepoint":15,"fcontroller":"fcontroller","lego":"lego"}],2:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"2c912d39848b84e524ba1d91320c362f"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.assetheader",'<s-cell height="1" bgcolor="white" > </s-cell> <assetheader > <span slot="thintitle">\u4ea4\u6613\u6210\u529f</span> <span slot="minidesc">\u7533\u8d2d\u6210\u529f </span> </assetheader> <s-cell height="1" bgcolor="white" > </s-cell> <assetheader :oneline=\'true\' > <span slot="thintitle">\u652f\u4ed8\u4e2d</span> </assetheader> <s-cell height="1" bgcolor="white" > </s-cell> <assetheader height=\'true\'> <span slot="minidesc">\u6301\u6709\u8d44\u4ea7 </span> <span slot="boldtitle">1110.00</span> </assetheader> <s-cell height="1" bgcolor="white" > </s-cell> <assetheader height=\'true\' :type=\'true\' > <span slot="ge-title">GE***\u9879\u76ee</span> <span slot="ge-name">\u674e\u4e50\u4e50</span> <span slot="ge-select">\u8ba1\u5212\u8be6\u60c5</span> <span slot="ge-time">\u8ba1\u5212\u521b\u5efa\u65f6\u95f4\uff1a2005-07-01</span> </assetheader> <modal type="1" > <span slot="content">\u5c0f\u4e3b\uff0c\u8fd9\u4e48\u82f1\u660e\u7684\u8d44\u4ea7\u8c03\u6574\u771f\u7684\u8981\u7ec8\u6b62\u5417\uff1f</span> </modal>');
},{"../../../template":16}],3:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"b9fac7f887f5ff1314aad5472d4c99ee"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.dock","<p-main bgcolor='offwhite'> <stub></stub> <dock filled='true' bgcolor='white'> <a-button id='button1'>\u786e\u5b9a</a-button> </dock> <stub></stub> <dock filled='false' bgcolor='white'> <a-button id='button2'>\u786e\u5b9a</a-button> </dock> <stub></stub> <dock bgcolor='white'> <a-button id='cancel'>\u53d6\u6d88</a-button> <a-button id='ok'>\u786e\u5b9a</a-button> </dock> </p-main> <p-footer> <dock bgcolor='white'> <a-button id='f-cancel'>\u53d6\u6d88</a-button> <a-button id='f-ok'>\u786e\u5b9a</a-button> </dock> </p-footer>");
},{"../../../template":16}],4:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"295138ca8bbaf2370119ba14abc576b2"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.flype",'<flype folded="true"> <b-text>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br> \u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002 </b-text> </flype>');
},{"../../../template":16}],5:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"9521bbcd8d61678aab95bd80e44f1d8b"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.hammertips","<hammertips> <b-text color='lightgrey' size='24' >\u60a8\u53ef\u5728<b-text color='coral'>2017-09-10 15:00</b-text> \u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1</b-text> </hammertips>");
},{"../../../template":16}],6:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"266d2570bc59d7bc2758d58210f54370"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.notetips","<notetips :cross='true'> <b-text>\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e0d\u4ee3\u8868\u7ba1\u7406\u4eba\u5bf9\u672a\u6765\u6536\u76ca\u7684\u627f\u8bfa</b-text> </notetips> <s-cell height='2' bgcolor=\"offwhite\" > </s-cell> <notetips> <b-text>\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e0d\u4ee3\u8868\u7ba1\u7406\u4eba\u5bf9\u672a\u6765\u6536\u76ca\u7684\u627f\u8bfa</b-text> </notetips>");
},{"../../../template":16}],7:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"cff69a6b68e2fb138017ac30e7fc75b5"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.panel","<p-main bgcolor='offwhite'> <stub></stub> <panel edit='false' bgcolor='white' border='false'> <a-title id='save' label='\u8054\u7cfb\u65b9\u5f0f'>\u4fdd\u5b58</a-title> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-row label='\u8bc1\u4ef6\u7c7b\u578b'>21234567989456462</text-row> <text-row label='\u51fa\u751f\u65e5\u671f'>1995-02-05</text-row> <text-row label='\u6027\u522b'>\u7537</text-row> <text-field-row label='\u6027\u522b' placeholder='\u8bf7\u8f93\u5165'>\u7537</text-field-row> </panel> </p-main>");
},{"../../../template":16}],8:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"67cde2d7e7156ec9ea7c0daf3e493139"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.password","<password :length='len' ></password> ");
},{"../../../template":16}],9:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"310a33e092fc9d8abff5daf699f8c4b0"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.progress"," <a-progress :ele='ele1' :length='2' step='_p2_step1' > </a-progress> <a-progress :ele='ele1' :length='2' step='_p2_step2' > </a-progress>  <a-progress :ele='ele2' :length='3' step='_p_step1' > </a-progress> <a-progress :ele='ele2' :length='3' step='_p3_step2' > </a-progress> <a-progress :ele='ele2' :length='3' step='_p3_step3' > </a-progress>  <a-progress :ele='ele' :length='4' step='_p_step1' > </a-progress> <a-progress :ele='ele' :length='4' step='_p_step2' > </a-progress> <a-progress :ele='ele' :length='4' step='_p_step3' > </a-progress> <a-progress :ele='ele' :length='4' step='_p_step4' > </a-progress>  <a-progress :ele='ele3' :length='4' step='_p_step1' :desc='true' > </a-progress> <a-progress :ele='ele3' :length='4' step='_p_step2' :desc='true'> </a-progress> <a-progress :ele='ele3' :length='4' step='_p_step3' :desc='true'> </a-progress> <a-progress :ele='ele3' :length='4' step='_p_step4' :desc='true'> </a-progress>");
},{"../../../template":16}],10:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"d4eaecf5a0e5c654dd6b10f843d4263e"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.protocol",'<protocol checked=\'true\'> <b-text size="24" color="light"> \u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f </b-text> <b-highlight id="link" size="24">\u300a\u5e73\u5b89\u76f4\u901a\u94f6\u884c\u8d26\u6237\u670d\u52a1\u534f\u8bae\u300b</b-highlight> </protocol>');
},{"../../../template":16}],11:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"8a4742761633f2756d99ae0409d35e58"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.stage","");
},{"../../../template":16}],12:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"34a6137da6d75dfc49c1d8128d2d6fc6"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.stepwise","<stepwise label='\u5df2\u5b8c\u6210 ' :rate='rate' :total='total'> </stepwise> <button id=\"tick\">\u70b9\u51fb</button>");
},{"../../../template":16}],13:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"72b3342e8d71795a6897a54a44953bc1"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.table","<p-main bgcolor='offwhite'> <stub></stub> <a-table bgcolor='white'> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-row label='\b\u516c\u53f8\u540d\u79f0'>\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8</text-row> <select-row label='\u5f00\u6237\u7701\u4efd'>\u8bf7\u9009\u62e9</select-row> </a-table> <stub></stub> <a-table bgcolor='white'> <text-field-row label='\u59d3\u540d' placeholder='\u8bf7\u8f93\u5165\u59d3\u540d' required='true'></text-field-row> <text-field-row label='\u59d3\u540d' placeholder='\u8bf7\u8f93\u5165\u59d3\u540d' value='\u9ed8\u8ba4\u503c' required='true'></text-field-row> <tel-field-row label='\u624b\u673a\u53f7\u7801' placeholder='\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801' required='true'></tel-field-row> <id-field-row label='\u8eab\u4efd\u8bc1\u53f7' placeholder='\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7' required='true'></id-field-row> <otp-field-row label='\u9a8c\u8bc1\u7801' placeholder='\u77ed\u4fe1\u9a8c\u8bc1\u7801' required='true'></otp-field-row> </a-table> </p-main>");
},{"../../../template":16}],14:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"1af5f06b081cc507c4421f2d09ce6001"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.timeline","<timeline :elements='ele'></timeline>  <timeline :elements='ele2'></timeline>");
},{"../../../template":16}],15:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"c6d6b81ef8719ad49198dc382f162992"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.timepoint"," <s-cell height='4'> <s-column width=\".789474\" align=\"left\"> </s-column> <s-flex-column> <timepoint :active='true'> <b-text slot='header'>\u63d0\u4ea4\u7533\u8d2d</b-text> <b-text slot='datatime'>2017-01-01</b-text> </timepoint> </s-flex-column> <s-flex-column> <timepoint> <b-text slot='header'>\u63d0\u4ea4\u7533\u8d2d</b-text> <b-text slot='datatime'>2017-01-02</b-text> </timepoint> </s-flex-column><s-flex-column> <timepoint> <b-text slot='header'>\u63d0\u4ea4\u7533\u8d2d</b-text> <b-text slot='datatime'>2017-01-02</b-text> </timepoint> </s-flex-column> <s-column width=\".789474\" align=\"left\"> </s-column> </s-cell> ");
},{"../../../template":16}],16:[function(require,module,exports){
/*TMODJS:{}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},module.exports=a}();
},{}]},{},[1]);
