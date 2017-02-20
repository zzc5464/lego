(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 Controller基类
 */
var common = require("common");
function Controller(extendObj) {
    this.common = common;
    this.request = common.request = {request: common.ajax}; //兼容之前的代码

    //复制属性
    var vars = ['$', 'aop', 'toast', 'alerts', 'ajax', 'platformUtil', 'bridge'];
    for (var i = 0; i < vars.length; i++)
        this[vars[i]] = common[vars[i]];

    //扩展方法
    this.extend(extendObj);
}
Controller.prototype = {
    initController: function (model) {
        //避免重复initModule
        !this.curModule && this.common.initModule(this);
        model=this.model||model;
        if(model!==undefined){
       		model.ajax = this.ajax;
        	this.model = model;
        	model.controller=this;
        }
    },
    
    /**
     * 跳转到指定页面
     * 
     * @param {string} hash - 指定页面的地址
     * @param {Object|boolean} [ctx] - 若为 object 则传给下个页面的参数值；若为 boolean 类型，则相当于 noHistory
     * @param {boolean} [noHistory] - 避免将当前页面地址记入历史，若 ctx 为 boolean 类型，则此项参数不起作用
     */
    navigate: function (hash, ctx, noHistory) {
        if (ctx && typeof ctx === 'object') {
            this.curRouter.navigate(hash, noHistory, ctx);
        } else {
            noHistory = ctx;
            this.curRouter.navigate(hash, noHistory);
        }
    },

    /**
     * 抹除从现在到对应 hash 之间（不包括 hash 本身）的历史记录
     * 
     * @param {string} hash - 目标 hash 记录值
     * @param {boolean} fuzzy - 目标 hash 是否模糊匹配，如果为真，只要匹配部份即可；如果为假或空，则要求精确匹配
     */
    eraseHistory: function (hash, fuzzy) {
        var history = this.curRouter.historyHash;
        var p = history.pop();

        function match (src, dest, fuzzy) {
            return fuzzy ? src.indexOf(dest) > -1 : src === dest;
        }

        while (p && !match(p, hash, fuzzy)) {
            p = history.pop();
        }

        p && history.push(p);
    },

    across: function (hash, noHistory) {
        this.curRouter.across(hash, noHistory);
    },
    render: function (data, callback) {
        callback && (data.callback = callback);
        this.curModule._render(data, this);
    },
    renderHTML: function (html, data, callback) {
        this.curModule._renderHTML(html, 
            data, callback);
    },
    setRouter: function (router) {
        this.curRouter = router;
    },
    extend: function (extendObj) {
        for (var n in extendObj) {
            this[n] = extendObj[n];
        }
    },
    setRequest: function (modle) {
        modle.setRequest(this.common.request);
    }
};
module.exports = Controller;

},{"common":"common"}],2:[function(require,module,exports){
'use strict';

var Controller = require('../../../Controller'),
    model = require('../model/my.assets.model'),
    assetListView = require('../views/tpl.asset.list'),
    assetListItemView = require('../views/tpl.asset.list.item'),
    assetListEmptyView = require('../views/tpl.asset.list.empty'),
    assetInfoView = require('../views/tpl.asset.info'),
    assetDetailView = require('../views/tpl.asset.detail'),
    qaEmptyView = require('../views/tpl.qa.empty'),
    qaAnswerEmptyView = require('../views/tpl.qa.answer.empty'),
    transListView = require('../views/tpl.transaction.list'),
    transListItemView = require('../views/tpl.transaction.list.item'),
    transListEmptyView = require('../views/tpl.transaction.empty'),
    transDetailView = require('../views/tpl.transaction.detail');

// 调试选项，若置为 true ，则显示工资宝
var __debug__ = false;

function MyAssetsController() {
    this.moduleName = 'components';
    this.name = 'basic';
    this.cssFile = 'components.basic.css';
    this.classList = ['my-assets'];

    this.routers = {
        'index': 'assetList',
        'info/:id/:amount/:status': 'assetInfo',
        'detail/:id/:amount/:status': 'assetDetail',
        'transList': 'transactionList',
        'transDetail/:tt/:ti/:pi/:pt': 'transactionDetail',
        'qa/:sid/:id/:amount/:status': 'qa',
        'answer/:sid/:id/:file/:a/:s': 'answer',
        'login': 'login'
    }

    this.urls = {
        financial: 'index.html#gum/financial.products/financial.products/financials/order/categories',
        currency: 'index.html#gum/currency.funds/index',
        fuying7: 'financing/fuying7/index',
        statics: '../gum/client/modules/financial.products/statichtmls/series/'
    }

    this.cache = {}
}

MyAssetsController.prototype = new Controller({
    assetList: function() {
        var $ = this.$,
            bridge = this.bridge,
            page = 1,
            size = 10,
            sumOfPages = 0,
            isLoading = false,
            sNames = { 'C0': '（待成立）' },
            curHash = 'index.html#components/basic/index';

        window.navigate = this.navigate.bind(this);
        window.router = this.curRouter;

        function append(html) {
            var el = $('#finan-list')[0];
            if (el) {
                el.innerHTML += html;
            }
        }

        function loadPage() {
            if (page > sumOfPages) { return; }
            isLoading = true;
            console.log('onPageLoading');
            model.queryMyAssets(page, size, function(resp) {
                page++;
                isLoading = false;
                append(assetListItemView({
                    sNames: sNames,
                    products: resp.productAssetsDTOs
                }));
            }, function() {
                isLoading = false;
            });
        }

        function onScroll(e) {
            var st = e.target.scrollTop,
                sh = e.target.scrollHeight,
                wh = window.innerHeight,
                off = wh + 10, // 提前一个页面，触发加载页面的请求
                isScrolledToBottom = (sh - st - wh < off);

            !isLoading && isScrolledToBottom && loadPage.call(this);
        }

        function show(resp) {
            var data = {
                sNames: sNames,
                unused: resp.totalAssetsAmount === '',
                total: resp.totalAssetsAmount || 0,
                products: bridge.js_pwd_keyboard || __debug__ ?
                    resp.productAssetsDTOs // 如果支持密码键盘，显示所有资产条目
                    :
                    resp.productAssetsDTOs.slice(2) // 如果不支持密码键盘，隐藏工资宝条目
            }

            var html = data.products.length > 0 ?
                assetListView(data) :
                assetListEmptyView(data);

            this.renderHTML(html, {
                title: '我的资产'
            }, function() {
                if ($('#content')[0]) {
                    page++;
                    sumOfPages = resp.totalPage;
                    $('#scroller')[0].onscroll = onScroll;
                }

                $('#finan-btn').tap((function() {
                    this.across(this.urls.financial + '/' + curHash.encode());
                }).bind(this));

                $('#trans-btn').tap((function() {
                    this.navigate('components/basic/transList');
                }).bind(this));

                $('#finan-list').tap((function(e) {
                    var el = this._find(e.target, 'li');
                    if (!el) { return; }

                    var t = el.getAttribute('data-product-type'),
                        i = el.getAttribute('data-product-id'),
                        a = el.getAttribute('data-assetsAmount'),
                        s = el.getAttribute('data-status'),
                        c = el.getAttribute('data-fundCode');

                    (t === '1') ?
                    (c === 'PA9003') ?
                    this.across(this.urls.currency): this.navigate(this.urls.fuying7): this.navigate('components/basic/info/' + i + '/' + a + '/' + s);

                }).bind(this), 1, 0, 'li');

                data.products.length > 0 && resp.totalPage > 1 && loadPage.call(this);
            });
        }

        model.queryMyAssets(page, size, show.bind(this));
    },

    assetInfo: function(id, amount, status) {
        var $ = this.$;

        function show(resp) {
            var termDays = parseInt(resp.financProductInfo.termDays),
                date1 = resp.financProductInfo.startDate.toDate(),
                date2 = resp.financProductInfo.productBuild.toDate(),
                date3 = date2.addDays(termDays),
                remainDays = date3.getTotalDays(new Date());

            var sNames = {
                    'C0': '产品<br/>待成立',
                    'C1': '还剩<br/>' + remainDays + '天',
                    'C2': '产品<br/>赎回中',
                    'C3': '产品<br/>赎回中',
                    'C4': '产品<br/>赎回中',
                    'C5': '产品<br/>赎回中',
                    'C7': '产品<br/>未成立'
                },
                tNames = { '01': '购买', '02': '赎回' }

            var data = {
                amount: amount,
                status: status,
                sNames: sNames,
                tNames: tNames,
                name: resp.financProductInfo.productName,
                benefit: resp.financProductInfo.benefitRate,
                trans: resp.transactionSuccessList,
                date1: date1,
                date2: date2,
                date3: date3
            }

            this.renderHTML(assetInfoView(data), {
                title: '产品信息'
            }, (function() {
                $('#buy-btn').tap((function() {
                    var url = 'index.html#components/basic/info/' +
                        id + '/' + amount + '/' + status;
                    this.across(this.urls.financial + '/' + url.encode());
                }).bind(this));

                $('#detail-btn').tap((function() {
                    this.navigate('components/basic/detail/' +
                        id + '/' + amount + '/' + status);
                }).bind(this));

                this.cache[id] = resp;
            }).bind(this));
        }

        model.queryProductAssetsDetail(id, show.bind(this));
    },

    assetDetail: function(id, amount, status) {
        var $ = this.$,
            bridge = this.bridge;

        function show(resp) {
            var data = {
                name: resp.financProductInfo.productName,
                termDays: parseInt(resp.financProductInfo.termDays),
                benefit: resp.financProductInfo.benefitRate,
                date3: resp.financProductInfo.productComeDate.toDate(),
                description: resp.financProductInfo.productDesc,
                provider: resp.financProductInfo.productProvider,
                raiseUrl: resp.financProductInfo.raiseUrl,
                riskUrl: resp.financProductInfo.riskUrl,
                trustBookUrl: resp.financProductInfo.trustBookUrl
            }

            this.renderHTML(assetDetailView(data), {
                title: '产品信息'
            }, (function() {
                $('#qa-btn').tap((function() {
                    this.navigate('components/basic/qa/' +
                        resp.financProductInfo.idCsspProductSeries +
                        '/' + id + '/' + amount + '/' + status);
                }).bind(this));

                $('#intro-btn').tap(function() {
                    bridge.js_pdf_viewer({
                        url: data.trustBookUrl,
                        title: '交易说明'
                    });
                });

                $('#muji-btn').tap(function() {
                    bridge.js_pdf_viewer({
                        url: data.raiseUrl,
                        title: '募集公告'
                    });
                });

                $('#risk-btn').tap(function() {
                    bridge.js_pdf_viewer({
                        url: data.riskUrl,
                        title: '风险揭示书'
                    });
                });
            }).bind(this));
        }

        var resp = this.cache[id];
        resp ? show.call(this, resp) :
            model.queryProductAssetsDetail(id, show.bind(this));
    },

    transactionList: function() {
        var $ = this.$,
            page = 1,
            size = 15,
            sumOfPages = 0,
            isLoading = false;

        function append(html) {
            var el = $('#trans-list')[0];
            if (el) {
                el.innerHTML += html;
            }
        }

        function loadPage() {
            if (page > sumOfPages) { return; }
            isLoading = true;
            console.log('onPageLoading');
            model.queryTransactionNotes(page, size, function(resp) {
                page++;
                isLoading = false;
                append(transListItemView({
                    trans: resp.transactionNotes
                }));
            }, function() {
                isLoading = false;
            });
        }

        function onScroll(e) {
            var st = e.target.scrollTop,
                sh = e.target.scrollHeight,
                wh = window.innerHeight,
                off = wh + 10, // 提前一个页面，触发加载页面的请求
                isScrolledToBottom = (sh - st - wh < off);
            !isLoading && isScrolledToBottom && loadPage.call(this);
        }

        function show(resp) {
            var html = resp.transactionNotes.length > 0 ?
                transListView({ trans: resp.transactionNotes }) :
                transListEmptyView();

            this.renderHTML(html, {
                title: '交易记录'
            }, function() {
                if ($('#trans-list')[0]) {
                    page++;
                    sumOfPages = resp.totalPage;
                    $('#scroller')[0].onscroll = onScroll;
                }

                $('#trans-list').tap((function(e) {
                    var el = this._find(e.target, 'li');
                    if (!el) { return; }

                    var pt = el.getAttribute('data-product-type'),
                        ti = el.getAttribute('data-transaction-id'),
                        tt = el.getAttribute('data-transaction-type'),
                        pi = el.getAttribute('data-product-id');

                    this.navigate('components/basic/transDetail/' +
                        tt + '/' + ti + '/' + pi + '/' + pt);

                }).bind(this), 1, 0, 'li');

                // 在第一页显示出来之后，预加载第二页
                resp.totalPage > 1 && loadPage.call(this);
            });
        }

        model.queryTransactionNotes(page, size, show.bind(this));
    },

    transactionDetail: function(tt, ti, pi, pt) {
        var sNames = {
                'C0': '待成立',
                'C1': '已成立',
                'C2': '赎回中',
                'C3': '赎回中',
                'C4': '赎回中',
                'C5': '赎回中',
                'C6': '兑付成功',
                'C7': '未成立',
                'C8': '已退款'
            },
            iNames = {
                '1': '身份证',
                '2': '护照',
                '3': '军官证'
            }

        function show(resp) {
            var t = resp.transactionNoteDetail,
                data;

            data = {
                tStatus: t.transactionStatus,
                name: t.productName,
                orderDate: t.orderDate,
                pType: resp.productType,
                pStatus: t.productStatus,
                benefit: t.benefitRate,
                termDays: t.termDays,
                date3: t.productExpireDate.toDate(),
                bankNo: t.consignBankNo,
                userName: t.consignUserName,
                idType: t.consignIdtype,
                idNo: t.consignIdNo,
                amount: t.transactionAmount,
                sNames: sNames,
                iNames: iNames,
                errMsg: t.errMsg
            }

            this.renderHTML(transDetailView(data), {
                title: '交易记录'
            }, function() {});
        }

        model.queryTransactionNoteDetail(tt, ti, pi, pt,
            show.bind(this));
    },

    qa: function(sid, id, amount, status) {
        var $ = this.$,
            navigate = this.navigate.bind(this);

        function answers(el) {
            var file = el.getAttribute('data-href');
            file && navigate(
                'components/basic/answer/' + sid + '/' + id + '/' +
                file + '/' + amount + '/' + status);
        }

        function success(resp) {
            resp = resp.replace(/href/g, 'data-href');
            this.renderHTML(resp, {
                title: '常见问题'
            }, function() {
                $('.qa-title').tap(function(e) {
                    e.preventDefault();
                    answers(this);
                });
            });
        }

        function fail() {
            this.renderHTML(qaEmptyView(), {
                title: '常见问题'
            }, function() {});
        }

        model.loadStatics(this.urls.statics + sid + '/questions.html',
            success.bind(this), fail.bind(this));
    },

    answer: function(sid, id, file, a, s) {
        function success(resp) {
            this.renderHTML(resp, {
                title: '常见问题'
            }, function() {});
        }

        function fail() {
            this.renderHTML(qaAnswerEmptyView(), {
                title: '常见问题'
            }, function() {});
        }

        model.loadStatics(this.urls.statics + sid + '/' + file,
            success.bind(this), fail.bind(this));
    },

    login: function() {
        var redirect = function() {
            this.navigate('components/basic/index', false);
        }

        model.simulateLogin(redirect.bind(this));
    },

    _find: function(el, selector) {
        var p = Element.prototype;
        var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };

        while (el && el instanceof HTMLElement && !f.call(el, selector)) {
            el = el.parentNode;
        }

        return el instanceof HTMLElement ? el : null;
    }
});

(new MyAssetsController()).initController(model);
},{"../../../Controller":1,"../model/my.assets.model":3,"../views/tpl.asset.detail":4,"../views/tpl.asset.info":5,"../views/tpl.asset.list":8,"../views/tpl.asset.list.empty":6,"../views/tpl.asset.list.item":7,"../views/tpl.qa.answer.empty":9,"../views/tpl.qa.empty":10,"../views/tpl.transaction.detail":11,"../views/tpl.transaction.empty":12,"../views/tpl.transaction.list":14,"../views/tpl.transaction.list.item":13}],3:[function(require,module,exports){
'use strict';

var urls = {
    queryMyProductAssets: '/m/queryMyProductAssets.do',
    queryMyAssets: '/m/queryMyAssets.do',
    queryProductAssetsDetail: '/m/queryProductAssetsDetail.do',
    queryTransactionNotes: '/m/queryTransactionNotes.do',
    queryTransactionNoteDetail: '/m/queryTransactionNoteDetail.do',
    simulateLogin: '/m/simulateLogin.dox'
}

function MyAssetsModel() {}

MyAssetsModel.prototype.queryMyProductAssets = function(pageNo, PageSize, success, fail) {
    this.ajax({
        url: urls.queryMyProductAssets,
        data: { pageNo: pageNo, pageSize: pageSize },
        noMask: true
    }, success, fail);
}

MyAssetsModel.prototype.queryMyAssets = function(pageNo, pageSize, callback) {
    this.ajax({
        url: urls.queryMyAssets,
        data: { pageNo: pageNo, pageSize: pageSize },
        noMask: true
    }, callback);
}

MyAssetsModel.prototype.queryProductAssetsDetail = function(id, callback) {
    this.ajax({
        url: urls.queryProductAssetsDetail,
        data: { idCsspProduct: id },
        noMask: true
    }, callback);
}

MyAssetsModel.prototype.queryTransactionNotes = function(pageNo, pageSize, success, fail) {
    this.ajax({
        url: urls.queryTransactionNotes,
        data: { pageNo: pageNo, pageSize: pageSize },
        noMask: true
    }, success, fail);
}

MyAssetsModel.prototype.queryTransactionNoteDetail = function(tt, ti, pi, pt, callback) {
    this.ajax({
        url: urls.queryTransactionNoteDetail,
        data: {
            transactionType: tt,
            transactionId: ti,
            idCsspProduct: pi,
            productType: pt
        },
        noMask: true
    }, callback);
}

MyAssetsModel.prototype.loadStatics = function(url, success, fail) {
    this.ajax({
        url: url,
        data: {},
        type: 'html',
        method: 'get',
        noMask: true
    }, success, fail);
}

MyAssetsModel.prototype.simulateLogin = function(callback) {
    this.ajax({
        url: urls.simulateLogin,
        // data: { userId: 'US00000001009364' },
        // data: { userId: 'US00000003479407' },
        data: { userId: 'US00000003479419' },
        noMask: true
    }, callback);
}

module.exports = new MyAssetsModel();
},{}],4:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"0e2c1900470695887e1b36fd25ecb3b5"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.asset.detail",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.name,e=a.termDays,f=a.benefit,g=a.date3,h=a.description,i=a.provider,j=a.raiseUrl,k=a.riskUrl,l=a.trustBookUrl,m="";return m+='<div class="asset-detail gum-view"> <div class="inner"> <h2 class="img-border-btm">',m+=c(d),m+='</h2> <ul class="detail img-border-btm"> <li> <label>\u4ea7\u54c1\u671f\u9650:</label> <div>',m+=c(e),m+="\u5929</div> </li> <li> <label>\u9884\u8ba1\u5e74\u5316\u6536\u76ca:</label> <div>",m+=c(f.toCurrency()),m+="%</div> </li> <li> <label>\u9884\u8ba1\u5230\u671f\u65e5:</label> <div>",m+=c(g.toFormatString("yyyy-MM-dd")),m+='</div> </li> </ul> <ul class="detail product-desc img-border-btm"> <li> <label>\u4ea7\u54c1\u8bf4\u660e:</label> <div>',m+=c(h),m+="</div> <footer></footer> </li> </ul> <ul> ","01"===i?(m+=" ",""!==j&&(m+=' <li id="muji-btn"> <label>\u52df\u96c6\u516c\u544a</label> <div class="sel"></div> </li> '),m+=" ",""!==k&&(m+=' <li id="risk-btn"> <label>\u98ce\u9669\u63ed\u793a\u4e66</label> <div class="sel"></div> </li> '),m+=" "):(m+=" ",""!==l&&(m+=' <li id="intro-btn"> <label>\u4ea4\u6613\u8bf4\u660e</label> <div class="sel"></div> </li> '),m+=' <li id="qa-btn"> <label>\u5e38\u89c1\u95ee\u9898</label> <div class="sel"></div> </li> '),m+=" </ul> </div> </div>",new String(m)});
},{"template":15}],5:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"cdb86d526dc10c337e8cac33a738f2ed"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.asset.info",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.name,e=a.amount,f=a.benefit,g=b.$string,h=a.sNames,i=a.status,j=a.date1,k=a.date2,l=a.date3,m=a.i,n=a.l,o=a.trans,p=a.tNames,q="";q+='<div class="asset gum-view"> <header> <h1>',q+=c(d),q+="</h1> <h2>",q+=c(e.toCurrency()),q+="</h2> <h3>\u6301\u6709\u8d44\u4ea7\uff08\u5143\uff09</h3> <h4>\u9884\u671f\u5e74\u5316\u6536\u76ca\u7387&nbsp;",q+=c(f.toCurrency()),q+="%</h4> <aside>",q+=g(h[i]||""),q+="</aside> </header> ","C0"===i||"C7"===i?(q+=' <ul id="timelineStatus" class="timeline"> <li class="active"><strong>\u4ea7\u54c1\u8d77\u552e\u65e5</strong>',q+=c(j.toFormatString("yyyy-MM-dd")),q+="</li> <li><strong>\u4ea7\u54c1\u6210\u7acb\u65e5</strong>",q+=c(k.toFormatString("yyyy-MM-dd")),q+="</li> <li><strong>\u9884\u8ba1\u5230\u671f\u65e5</strong>",q+=c(l.toFormatString("yyyy-MM-dd")),q+="</li> </ul> "):"C1"===i?(q+=' <ul id="timelineStatus" class="timeline timeline-all"> <li class="active"><strong>\u4ea7\u54c1\u8d77\u552e\u65e5</strong>',q+=c(j.toFormatString("yyyy-MM-dd")),q+='</li> <li class="active"><strong>\u4ea7\u54c1\u6210\u7acb\u65e5</strong>',q+=c(k.toFormatString("yyyy-MM-dd")),q+="</li> <li><strong>\u9884\u8ba1\u5230\u671f\u65e5</strong>",q+=c(l.toFormatString("yyyy-MM-dd")),q+="</li> </ul> "):("C2"===i||"C3"===i||"C4"===i||"C5"===i)&&(q+=' <ul id="timelineStatus" class="timeline timeline-all"> <li class="active"><strong>\u4ea7\u54c1\u8d77\u552e\u65e5</strong>',q+=c(j.toFormatString("yyyy-MM-dd")),q+='</li> <li class="active"><strong>\u4ea7\u54c1\u6210\u7acb\u65e5</strong>',q+=c(k.toFormatString("yyyy-MM-dd")),q+='</li> <li class="active"><strong>\u9884\u8ba1\u5230\u671f\u65e5</strong>',q+=c(l.toFormatString("yyyy-MM-dd")),q+="</li> </ul> "),q+=' <ul> <li id="detail-btn"> <label>\u4ea7\u54c1\u8be6\u60c5</label> <div class="sel"></div> </li> </ul> <ul class="list-view"> ';for(var m=0,n=o.length;n>m;m++)q+=' <li class="purchase"> <header><strong>',q+=c(p[o[m].transactionType]),q+="\u6210\u529f</strong></header> <footer>",q+=c(o[m].transactionDate),q+="</footer> <div>",q+=c(o[m].transactionAmount.toCurrency()),q+="</div> </li> ";return q+=' </ul> </div> <footer class="asset"> <button id="buy-btn" class="default">\u7ee7\u7eed\u8d2d\u4e70</button> </footer>',new String(q)});
},{"template":15}],6:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"e029786162bc750f7ddef13df8fa4955"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.asset.list.empty",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.total,e="";return e+='<div class="summary summary-empty"> <header> <h1>\u603b\u8d44\u4ea7\uff08\u5143\uff09</h1> <h2>',e+=c(d.toCurrency()),e+='</h2> <button>\u4ea4\u6613\u8bb0\u5f55</button> <h3 class="icon-attention img-border-btm">\u603b\u8d44\u4ea7\u5305\u62ec\u5df2\u6210\u7acb\u4ea7\u54c1\u6301\u6709\u8d44\u4ea7\u53ca\u5f85\u6210\u7acb\u4ea7\u54c1\u51bb\u7ed3\u8d44\u4ea7</h3> </header> <h4 class="img-border-btm">\u6301\u6709\u4ea7\u54c1</h4> <ul> <li> <article>\u82b1\u94b1or\u7406\u8d22\uff1f\u7075\u6d3b\u638c\u63e1\uff01<br/>\u6d3b\u671f\u5b9a\u671f\u8fd9\u91cc\u90fd\u6709\u3002\u8fd8\u6709\u9ad8\u6536\u76ca\u4f55\u5fc5\u82e6\u82e6\u5b58\u94f6\u884c?</article> </li> </ul> </div> <footer class="summary"> <button id="enterCategories" class="default">\u8fdb\u5165\u7406\u8d22</button> </footer>',new String(e)});
},{"template":15}],7:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"38ebd68bee6653b0715a4a46450f0d15"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.asset.list.item",function(a){"use strict";for(var b=this,c=(b.$helpers,a.i),d=a.l,e=a.products,f=a.product,g=b.$escape,h=a.sNames,i="",c=0,d=e.length;d>c;c++){var f=e[c];i+=' <li class="img-border-btm" data-product-type="',i+=g(f.productType),i+='" data-product-id="',i+=g(f.idCsspProduct),i+='" data-assetsAmount="',i+=g(f.assetsAmount),i+='" data-status="',i+=g(f.productStatus),i+='"> <label> <strong>',i+=g(f.productName),i+="</strong> ",i+=g(h[f.productStatus]||""),i+=" </label> <div>",i+=g(f.assetsAmount.toCurrency()),i+="\u5143</div> </li> "}return new String(i)});
},{"template":15}],8:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"3cb86e4eaf066f59245499b867c60fd9"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.asset.list",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.total,e=a.unused,f=a.i,g=a.l,h=a.products,i=a.product,j=a.sNames,k="";k+='<div id="scroller" class="summary"> <div id="content" class="inner"> <header> <h1>\u603b\u8d44\u4ea7\uff08\u5143\uff09</h1> <h2>',k+=c(d.toCurrency()),k+="</h2> ",e||(k+=' <button id="trans-btn">\u4ea4\u6613\u8bb0\u5f55</button> '),k+=' <h3 class="icon-attention img-border-btm">\u603b\u8d44\u4ea7\u5305\u62ec\u5df2\u6210\u7acb\u4ea7\u54c1\u6301\u6709\u8d44\u4ea7\u53ca\u5f85\u6210\u7acb\u4ea7\u54c1\u51bb\u7ed3\u8d44\u4ea7</h3> </header> <h4 class="img-border-btm">\u6301\u6709\u4ea7\u54c1</h4> <ul id="finan-list"> ';for(var f=0,g=h.length;g>f;f++){var i=h[f];k+=' <li class="img-border-btm" data-product-type="',k+=c(i.productType),k+='" data-product-id="',k+=c(i.idCsspProduct),k+='" data-assetsAmount="',k+=c(i.assetsAmount),k+='" data-status="',k+=c(i.productStatus),k+='" data-fundCode="',k+=c(i.fundCode),k+='"> <label> <strong>',k+=c(i.productName),k+="</strong> ",k+=c(j[i.productStatus]||""),k+=" </label> <div>",k+=c(i.assetsAmount.toCurrency()),k+="\u5143</div> </li> "}return k+=' </ul> </div> </div> <footer class="summary"> <button id="finan-btn" class="default">\u8fdb\u5165\u7406\u8d22</button> </footer>',new String(k)});
},{"template":15}],9:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"0a6c50cdd9b636b18e15d3fa96342c3b"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.qa.answer.empty",'<div class="answer-empty empty-view"> <div class="inner"> <p>\u54ce\u5440\uff0c\u6ca1\u6709\u627e\u5230\u7b54\u6848\uff5e</p> </div> </div>');
},{"template":15}],10:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"8e00df4d065cbf0927694c7013e05a4f"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.qa.empty",'<div class="question-empty empty-view"> <div class="inner"> <p>\u54ce\u5440\uff0c\u6ca1\u6709\u627e\u5230\u5e38\u89c1\u95ee\u9898\uff5e</p> </div> </div>');
},{"template":15}],11:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"d0a3d9241b6b20086dbe0b4ed10bf42a"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.transaction.detail",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.tStatus,e=a.errMsg,f=a.name,g=a.pType,h=a.orderDate,i=a.sNames,j=a.pStatus,k=a.benefit,l=a.termDays,m=a.date3,n=a.bankNo,o=a.userName,p=a.iNames,q=a.idType,r=a.idNo,s=a.amount,t="";return t+='<div class="transaction-detail"> <div class="inner"> <h2 class="img-border-btm"> ',t+=c(d),t+=" <span>",t+=c(e),t+='</span> </h2> <ul class="img-border-btm"> <li> <label>\u4ea7\u54c1\u540d\u79f0:</label> <div> ',t+=c(f),t+=" </div> </li> ","1"===g&&(t+=" <li> <label>\u4ea4\u6613\u65f6\u95f4:</label> <div> ",t+=c(h),t+=" </div> </li> "),t+=" ","0"===g&&(t+=" <li> <label>\u4ea7\u54c1\u72b6\u6001:</label> <div> ",t+=c(i[j]||""),t+=" </div> </li> <li> <label>\u9884\u8ba1\u5e74\u5316\u6536\u76ca\u7387:</label> <div> ",t+=c(k.toCurrency()),t+="%</div> </li> <li> <label>\u6295\u8d44\u671f\u9650:</label> <div> ",t+=c(l),t+="\u5929</div> </li> <li> <label>\u9884\u8ba1\u5230\u671f\u65e5:</label> <div> ",t+=c(m.toFormatString("yyyy-MM-dd")),t+=" </div> </li> "),t+=' </ul> <ul class="img-border-btm"> <li> <label>\u5361\u53f7:</label> <div>****** ',t+=c(n.last(4)),t+=" </div> </li> <li> <label>\u6301\u5361\u4eba\u59d3\u540d:</label> <div> ",t+=c(o),t+=" </div> </li> <li> <label>\u8bc1\u4ef6\u7c7b\u578b:</label> <div> ",t+=c(p[q]||"\u5176\u4ed6"),t+=" </div> </li> <li> <label>\u8bc1\u4ef6\u53f7\u7801:</label> <div> ",t+=c(r),t+=' </div> </li> </ul> <ul class="img-border-btm"> <li> <label>\u8ba4\u8d2d\u91d1\u989d:</label> <div><strong>',t+=c(s.toCurrency()),t+="\u5143</strong></div> </li> </ul> </div> </div>",new String(t)});
},{"template":15}],12:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"8ea8f2970d61fdc30b962fcb3244e053"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.transaction.empty",'<div class="transaction-list-empty empty-view"> <div class="inner"> <p>\u76ee\u524d\u60a8\u8fd8\u6ca1\u6709\u76f8\u5173\u7684\u4ea4\u6613\u8bb0\u5f55</p> </div> </div>');
},{"template":15}],13:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"c29e89ad7f88416bac69560db9a33ba2"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.transaction.list.item",function(a){"use strict";for(var b=this,c=(b.$helpers,a.i),d=a.l,e=a.trans,f=b.$escape,g="",c=0,d=e.length;d>c;c++)g+=" ","01"===e[c].transactionType?(g+=' <li class="purchase unbinded img-border-btm" data-product-type="',g+=f(e[c].productType),g+='" data-transaction-id="',g+=f(e[c].transactionId),g+='" data-transaction-type="',g+=f(e[c].transactionType),g+='" data-product-id="',g+=f(e[c].idCsspProduct),g+='"> <header><strong>',g+=f(e[c].transactionStatus),g+="</strong> ",g+=f(e[c].productName),g+=" </header> <footer> ",g+=f(e[c].transactionFailReason),g+=" </footer> <label>+",g+=f(e[c].transactionAmount.toCurrency()),g+="</label> <span>",g+=f(e[c].transactionDate),g+="</span> </li> "):(g+=' <li class="redeem unbinded img-border-btm" data-product-type="',g+=f(e[c].productType),g+='" data-transaction-id="',g+=f(e[c].transactionId),g+='" data-transaction-type="',g+=f(e[c].transactionType),g+='" data-product-id="',g+=f(e[c].idCsspProduct),g+='"> <header><strong>',g+=f(e[c].transactionStatus),g+="</strong> ",g+=f(e[c].productName),g+=" </header> <footer> ",g+=f(e[c].transactionFailReason),g+=" </footer> <label>-",g+=f(e[c].transactionAmount.toCurrency()),g+="</label> <span>",g+=f(e[c].transactionDate),g+="</span> </li> "),g+=" ";return new String(g)});
},{"template":15}],14:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"e226a809af3155fa84d74f7688df1cb3"}*/
var template=require("template");module.exports=template("components/basic/views/tpl.transaction.list",function(a){"use strict";var b=this,c=(b.$helpers,a.i),d=a.l,e=a.trans,f=b.$escape,g="";g+='<div id="scroller" class="transaction-list"> <ul id="trans-list" class="list-view"> ';for(var c=0,d=e.length;d>c;c++)g+=" ","01"===e[c].transactionType?(g+=' <li class="purchase unbinded img-border-btm" data-product-type="',g+=f(e[c].productType),g+='" data-transaction-id="',g+=f(e[c].transactionId),g+='" data-transaction-type="',g+=f(e[c].transactionType),g+='" data-product-id="',g+=f(e[c].idCsspProduct),g+='"> <header><strong>',g+=f(e[c].transactionStatus),g+="</strong> ",g+=f(e[c].productName),g+=" </header> <footer> ",g+=f(e[c].transactionFailReason),g+=" </footer> <label>+",g+=f(e[c].transactionAmount.toCurrency()),g+="</label> <span>",g+=f(e[c].transactionDate),g+="</span> </li> "):(g+=' <li class="redeem unbinded img-border-btm" data-product-type="',g+=f(e[c].productType),g+='" data-transaction-id="',g+=f(e[c].transactionId),g+='" data-transaction-type="',g+=f(e[c].transactionType),g+='" data-product-id="',g+=f(e[c].idCsspProduct),g+='"> <header><strong>',g+=f(e[c].transactionStatus),g+="</strong> ",g+=f(e[c].productName),g+=" </header> <footer> ",g+=f(e[c].transactionFailReason),g+=" </footer> <label>-",g+=f(e[c].transactionAmount.toCurrency()),g+="</label> <span>",g+=f(e[c].transactionDate),g+="</span> </li> "),g+=" ";return g+=" </ul> </div>",new String(g)});
},{"template":15}],15:[function(require,module,exports){
/*TMODJS:{}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},module.exports=a}();
},{}]},{},[2]);
