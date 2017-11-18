<template>
    <base-window @onCancle="onCancle" @onSure="onSure" :height="height" :marginTop="marginTop">
        <div class="field title-field">
            <label for="title">栏目名：</label>
            <input type="text" name="title" placeholder="请输入栏目名" ref="columnName"/>
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
                height: 200,
                marginTop: 200
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
                if (this.data.name) {
                    this.$refs.columnName.value = this.data.name;
                }
            },
            onCancle () {
                this.$emit('onCancle');
            },
            onSure () {
                const columnName = this.$refs.columnName.value;
                if (!columnName || columnName === '') {
                    alert('请输入栏目名');
                    return;
                }
                this.$emit('onSure', {
                    columnName,
                    id: this.data.id
                });
            }
        }
    };
</script>
<style scoped>
</style>