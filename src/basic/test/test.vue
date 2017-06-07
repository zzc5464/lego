<template>
    <div class="_test" >
        yyyyyyyy
        <b-icon ref="icon" name="eye-close" size="30" v-show="true" @click="testDom"></b-icon>
        <p ref="pp" @click="testRef" >xxxxxx</p>
    </div>
</template>

<script>
    module.exports = {
        props: {
            
        },
        data: function() {
            return {
 
            };
        },
        methods: {
            testDom: function(){
                var domclass = this.$refs.pp;
                console.log(domclass);
            },
            testRef: function(){
                var domclass = this.$refs.icon;
                console.log(domclass);
            }
        }
    }
</script>