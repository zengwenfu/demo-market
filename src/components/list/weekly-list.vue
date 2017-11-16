<template>
    <div class="list-wrap">
        <div class="list-item flex-container flex-direction-row" v-for="item, index in list" @click="click(item.num)">
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
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import weeklyMixin from 'mixins/weekly-mixin';
    export default {
        computed: {
            ...mapState({
                list: state => state.weeklyState.list
            })
        },
        mixins: [weeklyMixin],
        methods: {
            click (num) {
                this.$store.dispatch('setWeeklyTitle', `菲麦前端周刊第 ${num} 期`);
                this.$router.push({ path: 'detail' });
            }
        },
        created () {
            this.$store.dispatch('queryWeeklyList');
        }
    };
</script>
<style scoped>
.list-wrap {
    min-height: 800px;
}

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
    padding: 8px 10px 8px 0;
    font-size: 14px;
    color: #777;
    line-height: 24px;
}

.title {
    padding-top: 20px;
    font-size: 18px;
    color: #000;
}
</style>