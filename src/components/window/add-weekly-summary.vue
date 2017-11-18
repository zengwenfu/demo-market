<template>
    <base-window @onCancle="onCancle" @onSure="onSure" :height="height" :marginTop="marginTop">
        <div class="field">
            <textarea rows="6" cols="58" placeholder="请输入本期概要" ref="summary">
            </textarea>
        </div>
    </base-window>
</template>
<script>
    import BaseWindow from './base-window';
    export default {
        components: { BaseWindow },
        props: {
            data: Object
        },
        data () {
            return {
                height: 250,
                marginTop: 150
            };
        },
        mounted () {
            this.setData();
        },
        updated () {
            this.setData();
        },
        methods: {
            setData () {
                if (this.data.summary) {
                    this.$refs.summary.value = this.data.summary;
                }
            },
            onCancle () {
                this.$emit('onCancle');
            },
            onSure () {
                const summary = this.$refs.summary.value;
                if (!summary || summary === '') {
                    alert('请输入概要');
                    return;
                }
                this.$emit('onSure', {
                    summary
                });
            }
        }
    };
</script>
<style scoped>
</style>