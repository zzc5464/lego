<template>
    <div class='_main_wrp' :class='classObj'>
        <main class='_main'>
            <div class='_cell_group' v-for='slotNames in slotNames' :class='slotNames.className'>
                <slot :name='slotNames.name'></slot>
            </div>
        </main>
        <div class='_toast' :class='toastClass'>
            {{ toastMsg }}
        </div>
    </div>
</template>

<script>
    var events = require('../../utils/gum.vue.events'),
        toasts = [];

    module.exports = {
        props: [ 'bgcolor' ],

        mounted: function () {
            var toast = this.toast.bind(this);

            events.on('fielderror', function (errors) {
                toast(errors[0]);
            });
        },

        data: function () {
            var list = [];

            this.bgcolor && list.push(
                '_bgcolor_' + this.bgcolor
            );

            var slots    = this.$slots.default,
                group    = null,
                groups   = [],
                pre      = null,
                bgcolor  = null,
                props;

            slots.forEach(function (vnode) {
                if (typeof vnode.componentOptions !== 'undefined') {
                    props = vnode.componentOptions.propsData;
                    bgcolor = props.bgcolor || '';
                    props.bgcolor = '';

                    if (pre === null || pre !== bgcolor) {
                        group = {
                            bgcolor: bgcolor, 
                            slots: []
                        };

                        groups.push(group);
                    }

                    pre = bgcolor;
                    group.slots.push(vnode);
                }
            });

            var slotNames = [], name;

            for (var i = 0, l = groups.length; i < l; i++) {
                name = 'slot-' + i;
                bgcolor = groups[i].bgcolor;
                this.$slots[name] = groups[i].slots;

                slotNames.push({
                    name        : name, 
                    className   : bgcolor ? '_bgcolor_' + bgcolor : ''
                });
            }

            return {
                classObj: list,
                slotNames: slotNames,

                toastMsg: '',
                toastOpened: false,
                toastQueue: [],
                toastClass: ''
            }
        },

        methods: {
            toast: function (message) {

                this.toastQueue.push(message);
                showToast.call(this);

                function showToast () {
                    if (this.toastQueue.length === 0 || this.toastOpened) return;

                    // get the first message in queue;
                    this.toastMsg = this.toastQueue[0];

                    // show toast;
                    this.toastOpened = true;
                    this.toastFadeIn();
                    console.log('open');

                    setTimeout((function () {
                        // hide toast;
                        this.toastOpened = false;
                        this.toastFadeOut((function () {
                            console.log('close');

                            // remove the first message in queue;
                            this.toastQueue.splice(0, 1);

                            // execute show() again;
                            showToast.call(this);

                        }).bind(this));
                    }).bind(this), 2000);
                }
            },

            toastFadeIn: function () {
                this.toastClass = '_toast_fade_in';
            },

            toastFadeOut: function (callback) {
                this.toastClass = '_toast_fade_off';
                setTimeout(function () {
                    callback();
                }, 300);
            }
        }
    }
</script>