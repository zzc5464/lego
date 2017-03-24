<template>
    <div class='_progress' :class='classObj' >
        <stage v-for='(value, key, index) in object'>
            {{ index+1 }}
            <b-text slot='desc'>{{ value }}</b-text>
        </stage>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'ele', 'length', 'step'],
        data: function() {
            var list = [];
            this.length && this.length == '3' && list.push('_progress3');
            this.step && list.push(this.step);

            
            return {
                num: this.length,
                classObj: list,
                object: this.ele
            };
        }
    }
</script>