<template>
    <base-window @onCancle="onCancle" @onSure="onSure" :height="height" :marginTop="marginTop">
        <div class="tip
        ">
            删除之后不可恢复，确认要删除？
        </div>
    </base-window>
</template>
<script>
    import BaseWindow from './base-window';
    export default {
        components: { BaseWindow },
        props: {
            confirmType: Number,
            index: Number,
            id: String
        },
        data () {
            return {
                height: 200,
                marginTop: 200
            };
        },
        mounted () {
        },
        updated () {
        },
        methods: {
            onCancle () {
                this.$emit('onCancle');
            },
            onSure () {
                this.$emit('onSure', {
                    confirmType: this.confirmType,
                    index: this.index,
                    id: this.id
                });
            }
        }
    };
</script>
<style scoped>
    .tip {
        text-align: center;
        line-height: 50px;
        padding-top: 30px;
        width: 100%;
        padding-left: 15px;
    }
</style>