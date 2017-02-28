<template>
    <input class='_number_field' :class='classObj' :style='styleObj' type='tel' :name='name' :placeholder='placeholder' :maxlength='max' :required='required' >
</template>

<script>
    module.exports = {
        props: [ 'name', 'size', 'align', 'max', 'placeholder', 'required' ],

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj
            }
        }
    }
</script>