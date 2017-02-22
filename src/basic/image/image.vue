<template>
    <img @load="loadImage" :style="obj" :src="src" :preload="preload" />
</template>

<script>
    module.exports = {
        props: [ 'src', 'preload', 'width', 'height'],
        data: function () {
            return {
                obj: {
                    width: this.width + 'rem',
                    height: this.height + 'rem'
                }
            };
        },
        methods: {
            loadImage: function() {
                console.log(this.preload);
                if(this.preload == "true") {
                    var img = new Image();
                    img.src = this.src;
                    if(img.complete) {
                        console.log('complete ok');
                        return;
                    }
                    img.onload = function(){
                        console.log('ok');
                    }
                }
                
            }
        }
    }
</script>

<style scoped>
    img {
        display: block;
        border: none;
    }
</style>