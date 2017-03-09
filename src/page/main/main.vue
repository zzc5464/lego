<template>
    <div class='_main_wrp' :class='classObj'>
        <main class='_main'>
            <div class='_cell_group' v-for='slotNames in slotNames' :class='slotNames.className'>
                <slot :name='slotNames.name'></slot>
            </div>
        </main>
    </div>
</template>

<script>
    module.exports = {
        props: [ 
            'bgcolor'
        ],

        data: function () {
            var list = [];

            this.bgcolor && list.push(
                '_bgcolor_' + this.bgcolor
            );

            var slots    = this.$slots.default,
                group    = null,
                groups   = [],
                pre      = null,
                bgcolor  = null,
                props;

            slots.forEach(function (vnode) {
                if (typeof vnode.componentOptions !== 'undefined') {
                    props = vnode.componentOptions.propsData;
                    bgcolor = props.bgcolor || '';
                    props.bgcolor = '';

                    if (pre === null || pre !== bgcolor) {
                        group = {
                            bgcolor: bgcolor, 
                            slots: []
                        };

                        groups.push(group);
                    }

                    pre = bgcolor;
                    group.slots.push(vnode);
                }
            });

            var slotNames = [], name;

            for (var i = 0, l = groups.length; i < l; i++) {
                name = 'slot-' + i;
                bgcolor = groups[i].bgcolor;
                this.$slots[name] = groups[i].slots;

                slotNames.push({
                    name        : name, 
                    className   : bgcolor ? '_bgcolor_' + bgcolor : ''
                });
            }

            return {
                classObj: list,
                slotNames: slotNames
            }
        }
    }
</script>