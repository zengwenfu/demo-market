<template>
    <div class="sidebar">
        <div class="column-item" v-for="item, index in detail" :style="{left: getMarginLeft(index)}"  @click="columnClick(index)">
            <div class="header flex-container flex-direction-row" :style="{borderBottomColor: getColor(index)}">
                <div class="name-wrap flex-container flex-direction-row">
                    <div class="header-icon" :style="{backgroundColor: getColor(index), transform: getRotate(index)}"></div>
                    <div class="name" :style="{color: getColor(index)}">{{ item.name }}</div>
                </div>
                <div class="handler-wrap flex-container flex-direction-row">
                    <div class="add handler-icon" :style="{backgroundColor: getColor(index)}" @click="addClick">+</div>
                    <div class="delete handler-icon" :style="{backgroundColor: getColor(index)}" @click="deleteClick">-</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import weeklyMixin from 'mixins/weekly-mixin';
    export default {
        mixins: [weeklyMixin],
        data () {
            return {
                selectedIndex: 0
            };
        },
        computed: {
            ...mapState({
                detail: state => state.weeklyState.detail
            })
        },
        methods: {
            getRotate (index) {
                if (index === this.selectedIndex) {
                    return 'rotate(135deg)';
                } else {
                    return 'rotate(45deg)';
                }
            },
            columnClick (index) {
                this.selectedIndex = index;
                this.$emit('columnClick', index);
            },
            getMarginLeft (index) {
                if (index === this.selectedIndex) {
                    return '20px';
                } else {
                    return '0';
                }
            },
            addClick (e) {
                e.stopPropagation();
            },
            deleteClick (e) {
                e.stopPropagation();
            }
        }
    };
</script>
<style scoped>
    .sidebar {
        flex: 2;
        margin-left: 15px;
    }

    .header {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        height: 50px;
        align-items: flex-end;
        margin-top: 25px;
        justify-content: space-between;
    }

    .header-icon {
        width: 30px;
        height: 20px;
        margin-bottom: 10px;
        align-self: flex-end;
    }

    .name {
        font-size: 20px;
        line-height: 40px;
        margin-left: 20px;
    }

    .handler-icon {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        color: #fff;
        text-align: center;
        line-height: 28px;
        font-size: 20px;
    }

    .handler-wrap {
        height: 40px;
        align-items: center;
    }

    .delete {
        margin-left: 5px;
    }

    .column-item {
        position: relative;
    }

</style>