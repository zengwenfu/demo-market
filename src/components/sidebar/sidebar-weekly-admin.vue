<template>
    <div class="sidebar">
        <div class="column-item" v-for="item, index in columnList" :style="{left: getMarginLeft(index)}"  @click="columnClick(index)">
            <div class="header flex-container flex-direction-row" :style="{borderBottomColor: getColor(index)}">
                <div class="name-wrap flex-container flex-direction-row">
                    <div class="header-icon" :style="{backgroundColor: getColor(index), transform: getRotate(index)}"></div>
                    <div class="name" :style="{color: getColor(index)}">{{ item.name }}</div>
                </div>
                <div class="handler-wrap flex-container flex-direction-row">
                    <div class="add handler-icon" :style="{backgroundColor: getColor(index)}" @click="addClick(index, $event)">+</div>
                    <div class="delete handler-icon" :style="{backgroundColor: getColor(index)}" @click="deleteClick(index, $event)">-</div>
                    <div class="delete handler-icon" :style="{backgroundColor: getColor(index)}" @click="editClick(index, $event)">e</div>
                </div>
            </div>
        </div>
        <div class="summary">
            <div class="header flex-container flex-direction-row header-summary" @click="summaryClick">
                <div class="name-wrap flex-container flex-direction-row">
                    <div class="summary-icon">.</div>
                    <div class="name summary-name">本期概述</div>
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
                selectedIndex: 0,
                sumLeft: 0
            };
        },
        computed: {
            ...mapState({
                detail: state => state.weeklyState.detail,
                columnEditIndex: state => state.weeklyState.columnEditIndex
            }),
            columnList () {
                return this.detail ? this.detail.columns : [];
            }
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
            summaryClick () {
                this.selectedIndex = -1;
                this.$emit('summaryClick');
            },
            getMarginLeft (index) {
                if (index === this.selectedIndex) {
                    return '20px';
                } else {
                    return '0';
                }
            },
            addClick (index, e) {
                e.stopPropagation();
                this.$emit('addClick', index);
            },
            deleteClick (index, e) {
                e.stopPropagation();
                this.$emit('deleteClick', index);
            },
            editClick (index, e) {
                e.stopPropagation();
                this.$emit('editClick', index);
            }
        },
        watch: {
            columnEditIndex (n) {
                this.selectedIndex = n;
                this.$emit('columnClick', n);
            }
        }
    };
</script>
<style scoped>
    .sidebar {
        margin-left: 15px;
        width: 300px;
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
        cursor: pointer;
    }

    .summary-icon {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        align-self: flex-end;
        background-color: #ccc;
        color: #fff;
        font-size: 30px;
        line-height: 15px;
        text-align: center;
    }

    .summary-name {
        color: #ccc;
    }

    .summary {
        cursor: pointer;
    }

    .header-summary {
        border-bottom-color: #ccc;
        width: 150px;
    }

</style>