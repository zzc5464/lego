<template>
    <ul class='_pwd' id='pwd' v-on:mytap='tapped' >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<script>
    module.exports = {
        props: [ 'length'],
        data: function() {
            
            return {
                num: this.length
            };
        },
        watch: {
            
        },
        methods: {
            tapped: function(){
                console.log(this.num);
                var children = document.querySelectorAll('li');
                (parseInt(this.num) > children.length) &&  (this.num = 6);
                (parseInt(this.num) < 0) &&  (this.num = 0);
                for(i=0;i<=(this.num-1);i++){
                    children[i].innerHTML = '&#9679;';
                }
               
            }
        }
    }
</script>