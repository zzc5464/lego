<template>
    <ul class='_pwd' v-html='html'></ul>
</template>

<script>
    module.exports = {
        props   : [ 'length'],
        data    : function() {
            return {
                html: createHtml(parseInt(this.length))
            };

            function createHtml (length) {
                var html = '';

                for (var i=0; i<6; i++) {
                    html += i < length ? '<li>&#9679;</li>' : '<li></li>';
                }

                return html;
            }
        }
    }
</script>