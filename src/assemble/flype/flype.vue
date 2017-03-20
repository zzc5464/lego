<template>
    <div class='_flype' :class='classObj' id='fold' v-on:mytap='tapped'>
        <b-icon color='coral' size='24' :class='iconName'></b-icon>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'folded'],
        data: function() {
            var list = [],
                namelist = [];
            this.folded && list.push('_flype_slid_down');
            this.folded ? namelist.push('i-'+'angle-up') : namelist.push('i-'+'angle-down');
            return {
                isFolded: this.folded,
                iconName: namelist,
                classObj: list
            };
        },
        methods: {
            tapped: function(){
                if(this.classObj[0] == '_flype_slid_down') {
                    this.classObj.pop(1);
                    this.iconName.splice(-1,1,'i-'+'angle-down');
                } else {
                    this.classObj.push('_flype_slid_down');
                    this.iconName.splice(-1,1,'i-'+'angle-up');
                }
            }
        }
    }
</script>