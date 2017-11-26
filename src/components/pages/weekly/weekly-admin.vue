<template>
    <div class="weekly-admin-wrap">
        <weekly-titlebar :needActions="true" @publish="publish" @preLook="preLook" @download="download"></weekly-titlebar>
        <div class="home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <sidebar @columnClick="columnClick" @summaryClick="summaryClick" @addClick="columnAdd" @editClick="columnEdit" @deleteClick="columnDelete"></sidebar>
                <div class="main-content-wrap" v-if="!showSummary">
                    <item-list :itemList="itemList" :needGoIcon="false" @onDelete="articleDelete" @onEdit="articleEdit"></item-list>
                    <div class="add" @click="addClick">+</div>
                </div>
                <div class="main-content-wrap" v-if="showSummary">
                    <div class="summary">
                        <p>{{detail.summary}}</p><img :src="require('assets/img/edit.png')" class="summary-edit" @click="onSummaryEdit"/>
                    </div>
                </div>
            </div>
        </div>
        <add-window v-if="showAdd" @onCancle="onCancle" @onSure="onAdd" :data="windowData"></add-window>
        <add-column-window v-if="showColumnAdd" @onCancle="onColumnCancle" @onSure="onColumnSure" :data="windowColumnData"></add-column-window>
        <add-summary-window v-if="showSummaryAdd" @onCancle="onSummaryCancel" @onSure="onSummarySure" :data="windowSummaryData"></add-summary-window>
        <confirm-window v-if="showConfirm" :confirmType="confirmType" :index="confirmIndex" :id="confirmId" @onSure="onConfirmSure" @onCancle="onConfirmCancel"></confirm-window>
    </div>
</template>
<script>

import Sidebar from 'components/sidebar/sidebar-weekly-admin';
import ItemList from 'components/list/weekly-column-item';
import AddWindow from 'components/window/add-weekly';
import AddColumnWindow from 'components/window/add-weekly-column';
import addSummaryWindow from 'components/window/add-weekly-summary';
import confirmWindow from 'components/window/weekly-confirm';
import { mapState } from 'vuex';
import { parseQueryString } from 'utils/common';
import apiConfig from 'utils/apiConfig';

export default {
    data () {
        return {
            selectColumn: 0,
            showAdd: false,
            showSummary: false,
            showColumnAdd: false,
            windowData: {},
            windowColumnData: {},
            columnEditIndex: 0,
            showSummaryAdd: false,
            showConfirm: false,
            windowSummaryData: {},
            confirmType: 1, // 1 表示栏目 2 表示文章
            confirmIndex: 0,
            confirmId: ''
        };
    },
    components: { Sidebar, ItemList, AddWindow, AddColumnWindow, addSummaryWindow, confirmWindow },
    created () {
        this.$store.dispatch('setUserInfo').then(res => {
            if (res.code !== '0000' || !res.data._id) {
                window.localStorage.fromUrl = window.location;
                window.location.href = './login.html';
            } else {
                if (res.data.role !== '1') {
                    this.$Message.error('权限不够');
                } else {
                    const query = parseQueryString();
                    this.$store.dispatch('queryWeeklyDetail', query);
                }
            }
        });
    },
    computed: {
        ...mapState({
            detail: state => state.weeklyState.detail
        }),
        itemList () {
            return this.detail.columns && this.detail.columns[this.selectColumn] ? this.detail.columns[this.selectColumn].articles : [];
        }
    },
    methods: {
        columnClick (index) {
            this.selectColumn = index;
            this.showSummary = false;
        },
        addClick () {
            this.windowData = {};
            this.showAdd = true;
        },
        onCancle () {
            this.showAdd = false;
        },
        saveOrUpdate () {
            const obj = {
                data: encodeURIComponent(JSON.stringify(this.detail))
            };
            this.$store.dispatch('saveOrUpdate', obj);
        },
        onAdd (data) {
            if (!data.id) {
                this.detail.columns[this.selectColumn].articles.push(data);
                this.saveOrUpdate();
            } else {
                const articles = this.detail.columns[this.selectColumn].articles;
                const index = articles.findIndex(item => {
                    return data.id === item._id;
                });
                articles[index] = data;
                this.saveOrUpdate();
            }
            this.showAdd = false;
        },
        summaryClick () {
            this.showSummary = true;
            if (!this.detail.summary || this.detail.summary === '') {
                this.windowSummaryData = {};
                this.showSummaryAdd = true;
            }
        },
        onSummaryCancel () {
            this.showSummaryAdd = false;
            if (!this.detail.summary || this.detail.summary === '') {
                const index = this.detail.columns.length - 1;
                if (this.selectColumn === index) {
                    this.showSummary = false;
                } else {
                    this.$store.dispatch('setColumnEditIndex', index);
                }
            }
        },
        onSummaryEdit () {
            this.windowSummaryData = {
                summary: this.detail.summary
            };
            this.showSummaryAdd = true;
        },
        onSummarySure ({ summary }) {
            this.detail.summary = summary;
            this.showSummaryAdd = false;
            this.saveOrUpdate();
        },
        articleDelete (id) {
            this.confirmId = id;
            this.confirmType = 2;
            this.showConfirm = true;
        },
        articleEdit (id) {
            const articles = this.detail.columns[this.selectColumn].articles;
            const index = articles.findIndex(item => {
                return id === item._id;
            });
            this.windowData = articles[index];
            this.showAdd = true;
        },
        columnAdd (index) {
            this.windowColumnData = {};
            this.columnEditIndex = index;
            this.showColumnAdd = true;
        },
        columnEdit (index) {
            this.columnEditIndex = index;
            this.windowColumnData = {
                id: this.detail.columns[index]._id,
                name: this.detail.columns[index].name
            };
            this.showColumnAdd = true;
        },
        onColumnCancle () {
            this.showColumnAdd = false;
        },
        onColumnSure ({ id, columnName }) {
            if (id) {
                this.detail.columns[this.columnEditIndex].name = columnName;
                this.$store.dispatch('setColumnEditIndex', this.columnEditIndex);
            } else {
                const columns = this.detail.columns;
                const newColumn = {
                    name: columnName,
                    articles: []
                };
                columns.splice(this.columnEditIndex + 1, 0, newColumn);
                this.$store.dispatch('setColumnEditIndex', this.columnEditIndex + 1);
            }
            this.saveOrUpdate();
            this.showColumnAdd = false;
        },
        columnDelete (index) {
            this.confirmIndex = index;
            this.confirmType = 1;
            this.showConfirm = true;
        },
        publish () {
            if (!this.detail._id) {
                this.$Message.error('请添加文章再发布');
            } else if (!this.detail.summary) {
                this.$Message.error('请输入本期概要');
            } else {
                this.$store.dispatch('publishWeekly', this.detail._id).then(res => {
                    if (res.code === '0000') {
                        location.href = './index.html';
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
            }
        },
        preLook () {
            if (this.detail._id) {
                location.href = `./index.html#/detail/${this.detail._id}`;
            } else {
                this.$Message.error('请添加文章');
            }
        },
        download () {
            if (this.detail._id) {
                location.href = apiConfig.downloadWeekly() + `?num=${this.detail.num}`;
            } else {
                this.$Message.error('请先添加文章');
            }
        },
        onConfirmCancel () {
            this.showConfirm = false;
        },
        onConfirmSure ({ confirmType, index, id }) {
            this.showConfirm = false;
            // 删除栏目
            if (confirmType === 1) {
                const columns = this.detail.columns;
                if (columns.length === 1) {
                    this.$Message.error('至少保持一个栏目');
                    return;
                }
                columns.splice(index, 1);
                this.saveOrUpdate();
                if (index === columns.length) {
                    index = index - 1;
                }
                this.$store.dispatch('setColumnEditIndex', index);
            } else {
                const articles = this.detail.columns[this.selectColumn].articles;
                const aindex = articles.findIndex(item => {
                    return id === item._id;
                });
                // 从数组中移除
                articles.splice(aindex, 1);
                this.saveOrUpdate();
            }
        },
        toggleHtmlClass (v) {
            if (v) {
                document.getElementsByTagName('body')[0].className = 'noscroll';
            } else {
                document.getElementsByTagName('body')[0].className = '';
            }
        }
    },
    watch: {
        showColumnAdd (v) {
            this.toggleHtmlClass(v);
        },
        showSummaryAdd (v) {
            this.toggleHtmlClass(v);
        },
        showAdd (v) {
            this.toggleHtmlClass(v);
        },
        showConfirm (v) {
            this.toggleHtmlClass(v);
        }
    }
};

</script>

<style scoped>
    .body-wrap {
        background: #fafafa;
        color: #666;
    }

    .home {
        margin-top: 20px;
    }

    .body-inner {
        justify-content: space-between;
    }

    .main-content-wrap {
        flex: 6;
        min-height: 800px;
        margin-left: 40px;
    }

    .add {
        width: 50px;
        height: 50px;
        background-color: #1296db;
        border-radius: 25px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 45px;
        margin: auto;
        cursor: pointer;
    }

    .weekly-admin-wrap {
        width: 100%;
        height: 100%;
    }

    .summary {
        padding: 40px;
        width: 500px;
        color: #777;
        font-size: 16px;
        line-height: 26px;
    }

    .summary-edit {
        margin-top: 10px;
        cursor: pointer;
    }
</style>
