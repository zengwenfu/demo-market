<template>
    <div class="list-wrap">
        <div class="list-item flex-container flex-direction-row" v-for="item, index in list" @click="click(item.num, item._id)">
            <div class="num" :style="{backgroundColor: getColor(item.num)}">
                {{item.num}}
            </div>
            <div class="item-right">
                <div class="title">
                    菲麦前端周刊第{{item.num}}期
                </div>
                <div class="summary">
                    {{ item.summary }}
                </div>
                <div class="publish-time">
                    {{ item.publishTime }}
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
            click (num, id) {
                this.$store.dispatch('setWeeklyTitle', `菲麦前端周刊第 ${num} 期`);
                this.$router.push({ path: `detail/${id}` });
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
    height: 180px;
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
    height: 160px;
    text-align: center;
    line-height: 160px;
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
    max-height: 72px;
    overflow: hidden;
}

.publish-time {
    font-size: 14px;
    color: #777;
}

.title {
    padding-top: 20px;
    font-size: 18px;
    color: #000;
}
</style>