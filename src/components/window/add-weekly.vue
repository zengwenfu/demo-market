<template>
    <base-window @onCancle="onCancle" @onSure="onSure" :height="height">
        <div class="field title-field">
            <label for="title">标题：</label>
              <input type="text" name="title" placeholder="请输入标题" ref="title"/>
        </div>
        <div class="field">
            <label for="url">链接：</label>
            <input type="text" name="url" placeholder="请输入链接" ref="url"/>
        </div>
        <div class="field">
            <label for="author">作者：</label>
            <input type="text" name="author" placeholder="请输入作者" ref="author">
        </div>
        <div class="field">
            <label for="summary">概要：</label>
            <textarea rows="6" cols="47" placeholder="请输入概要" ref="summary">
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
                height: 500
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
                for (const key in this.data) {
                    if (this.$refs[key]) {
                        this.$refs[key].value = this.data[key];
                    }
                }
            },
            onCancle () {
                this.$emit('onCancle');
            },
            onSure () {
                const title = this.$refs.title.value;
                if (!title || title === '') {
                    alert('请输入标题');
                    return;
                }
                const url = this.$refs.url.value;
                if (!url || url === '') {
                    alert('请输入链接');
                    return;
                }
                const author = this.$refs.author.value;
                if (!author || author === '') {
                    alert('请输入作者');
                    return;
                }
                const summary = this.$refs.summary.value;
                if (!summary || summary === '') {
                    alert('请输入概述');
                    return;
                }
                this.$emit('onSure', {
                    title,
                    url,
                    author,
                    summary,
                    id: this.data._id
                });
            }
        }
    };
</script>
<style scoped>
</style>