<template>
    <div class="list-wrap">
        <div class="list-item flex-container flex-direction-row" v-for="item, index in list">
            <div class="num" :style="{backgroundColor: getColor(item.num)}">
                {{item.num}}
            </div>
            <div class="item-right">
                <div class="title">
                    菲麦前端周刊第{{item.num}}期
                </div>
                <div class="summary">
                    移动互联网时代，混合编程对于前端同学来说是不可回避的课题，相信大部分同学都有曾做过并且使用上堪称熟练，但是面试的时候，你的回答真的能用面试官感到满意么？
                </div>
                <div class="author">
                    @小虫巨蟹
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            list: Object
        },
        methods: {
            getColor (num) {
                let index = parseInt(num.substring(num.length - 1));
                if (index > 5) {
                    index = index - 5;
                }
                const r = 255 - index * 25;
                return `rgb(${r}, 222, 165)`;
            }
        }
    };
</script>
<style scoped>
.list-item {
    background: #fff;
    position: relative;
    height: 140px;
    margin-top: 15px;
    cursor: pointer;
    align-items: center;
}

.list-item:hover {
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.list-wrap > .list-item:first-child {
    margin-top: 0;
}

.num {
    width: 200px;
    height: 132px;
    text-align: center;
    line-height: 132px;
    color: #fff;
    font-size: 26px;
}

.item-right {
    flex: 1;
    height: 140px;
    margin-left: 20px;
}

.summary {
    padding: 10px 10px 10px 0;
    font-size: 14px;
    color: #777;
}

.title {
    padding-top: 20px;
    font-size: 18px;
    color: #000;
}

.author {
    font-size: 14px;
    color: #666;
}
</style>