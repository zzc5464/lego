<template>
    <img @load="loadImage" class="_image" :style="obj" :src="src" :preload="preload" />
</template>

<script>
    module.exports = {
        props: [ 'src', 'preload', 'width', 'height'],
        data: function () {
            return {
                obj: {
                    width: (parseInt(this.width) / 38).toFixed(6) + 'rem',
                    height: (parseInt(this.height) / 38).toFixed(6) + 'rem'
                }
            };
        },
        methods: {
            loadImage: function() {
                // console.log(this.preload);
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

<!--<style scoped>
    img {
        display: block;
        border: none;
    }
</style>-->