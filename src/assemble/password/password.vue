<template>
    <ul id='_pwd_' class='_pwd' v-html='html'></ul>
</template>

<script>
    var events = require('../../utils/gum.vue.events'),
        html   = function (length) {
            var html = '', i, 
                a = '<li>&#9679;</li>', 
                b = '<li></li>';

            for ( i = 0; i < length; i++ ) {
                html += a;
            }

            for ( i = length; i < 6; i++ ) {
                html += b;
            }

            return html;
        }

    module.exports = {
        props: {
            length: {
                type: Number,
                default: 0
            }
        },

        mounted: function () {
            events.on('password', function (e) {
                this.length = e.length;

                //events.emit('input', this.length);

                var ctrl = document.getElementById('_pwd_');
                ctrl.innerHTML = html(this.length);
            });
        },

        data: function () {
            return {
                html: html(this.length)
            };
        }
    }
</script>