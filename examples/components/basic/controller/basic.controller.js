'use strict';

var FController = require('fcontroller'),
    VueManager = require('../../../../src/utils/gum.vue.manager'),
    tplIndexView = require('../views/tpl.index'),
    tplWwqView = require('../views/tpl.wangweiqi'),
    tplStrqView = require('../views/tpl.structure'),
    insuranceDetailView = require('../views/tpl.insurance.detail'),
    applicantInfoView = require('../views/tpl.applicant.info'),
    insuranceInterestView = require('../views/tpl.insurance.interest'),
    tplBeView = require('../views/tpl.basicexamples');

function BasicController () {
    this.moduleName = 'components';
    this.name = 'basic';
    this.cssFile = 'basic.css';
    this.classList = [ 'basic' ];
    this.routers = {
        'index'     : 'index',
        'index2'    :'index2',
        'index3'    :'index3',
        'index4'    :'index4',
        'wangweiqi' : 'wangweiqi',
        'basicexample' : 'basicexample',
        'structure': 'structure'
    }
    this.VueManager = VueManager;
}

BasicController.prototype = new FController({
    index: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function sendCode (){
            alert('发送给后台了');
        }

        function show (data) {
            this.renderVUE(tplIndexView(data), data, '购买成功', function (app) {
                $('#btn').tap(function(){
                    var phoneErr = $('#btn').attr('phone-err');
                    phoneErr && alert(phoneErr);
                })

            });
        }
        show.call(this, {
            text: '我是一个占位符',
            text2:'vue content',
            list:[
               1,2,3,4
            ],
            sendcode:sendCode
        })
    },
    index2: function () {
        var $ = this.$, navigate = this.navigate.bind(this);
        function show (data) {
            this.renderVUE(insuranceDetailView(data), data, '购买成功', function (app) {

            });
        }
        show.call(this, {
           
        })
    },
    index3: function () {
        var $ = this.$, navigate = this.navigate.bind(this);
        function show (data) {
            this.renderVUE(applicantInfoView(data), data, '购买成功', function (app) {

            });
        }
        show.call(this, {
           
        })
    },
    index4: function () {
        var $ = this.$, navigate = this.navigate.bind(this);
        function show (data) {
            this.renderVUE(insuranceInterestView(data), data, '购买成功', function (app) {

            });
        }
        show.call(this, {
           
        })
    },

    wangweiqi: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplWwqView(data), data, '购买成功', function (app) {
                $('#done').tap(function () {
                    navigate('financing/fuying7/vue2');
                });
            });
        }

        show.call(this, {
            text: 1000,
            text2:'vue content'
        });
    },

    basicexample: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplBeView(data), data, 'basic examples', function (app) {
                
            });
        }

        show.call(this, {
            
        });
    },

    structure: function () {
        var $ = this.$, navigate = this.navigate.bind(this);

        function show (data) {
            this.renderVUE(tplStrqView(data), data, 'structure examples', function (app) {
                
            });
        }

        show.call(this, {
            
        });
    }
});

(new BasicController()).initController({});