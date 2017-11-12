<template>
	<div class="item-list-wrap">
         <div v-for="item in itemList" @click="goUrl(item.url)" class="item flex-container flex-direction-row">
            <div class="icon">
                <img :src="require('assets/img/go.png')" />
            </div>
            <div class="content">
                 <div class="title">
                     {{item.title}}@{{item.author}}
                 </div>
                 <div class="summary">
                     {{item.summary}}
                 </div>
            </div>
         </div>   
    </div>
</template>
<script>
    export default {
        props: {
            itemList: Object
        },
        methods: {
            goUrl (url) {
                window.open(url);
            }
        }
    };
</script>
<style scoped="">
    .item-list-wrap {
        padding: 20px 0;
    }

    .item {
        padding: 20px 0;
        cursor: pointer;
    }

    .content {
        margin-left: 20px;
    }

    .content:hover {
        text-decoration: underline;
    }

    .title {
        color: #333;
        font-size: 18px;
        line-height: 30px;
    }

    .summary {
        font-size: 13px;
        line-height: 24px;
        color: #777;
        text-decoration: underline;
    }

</style>