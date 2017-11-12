<template>
	<div class="item-list-wrap">
         <div v-for="item in itemList" @click="goUrl(item.url)" class="item flex-container flex-direction-row">
            <div class="icon" v-if="needGoIcon">
                <img :src="require('assets/img/go.png')" />
            </div>
            <div class="content">
                 <div class="title flex-container flex-direction-row">
                    <div class="title-text">
                     {{item.title}}@{{item.author}}
                    </div>
                    <div class="handlers flex-container flex-direction-row" v-if="!needGoIcon">
                        <div class="delete handler-icon">
                            <img :src="require('assets/img/delete.png')"/>
                        </div>
                        <div class="edit handler-icon">
                            <img :src="require('assets/img/edit.png')"/>
                        </div>
                    </div>
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
            itemList: Object,
            needGoIcon: {
                type: Boolean,
                default: true
            }
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
        justify-content: space-between;
    }

    .summary {
        font-size: 13px;
        line-height: 24px;
        color: #777;
        text-decoration: underline;
    }

    .handlers {
        align-self: flex-end;
    }

    .handler-icon {
        margin-right: 20px;
    }

    .handler-icon img {
        width: 20px;
        height: 20px;
    }

</style>