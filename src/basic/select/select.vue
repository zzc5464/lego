<template>
    <span :id='identity' class='_select'>
        <b-text :style="styleObj" class="_select_text" :class="classObj" ><slot></slot></b-text>
        <b-icon name="angle-right-bold" color="light" size="28"></b-icon>
    </span>
</template>

<script>
    module.exports = {
        props: ['id', 'size', 'color'],
        data: function() {
            var list = [], obj = {};

            this.size
            && list.push('_text_size_' + this.size + 'px');

            this.color
            && list.push('_text_color_' + this.color);


            return {
                classObj: list,
                styleObj: obj,
                identity: this.id ? this.id : undefined
            };
        }
    }
</script>