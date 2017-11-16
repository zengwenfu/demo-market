<template>
    <div class="weekly-admin-wrap">
        <weekly-titlebar></weekly-titlebar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <sidebar @columnClick="columnClick"></sidebar>
                <div class="main-content-wrap">
                    <item-list :itemList="itemList" :needGoIcon="false"></item-list>
                    <div class="add" @click="addClick">+</div>
                </div>
            </div>
        </div>
        <add-window v-if="showAdd" @onCancle="onCancle" @onSure="onAdd"></add-window>
    </div>
</template>
<script>

import Sidebar from 'components/sidebar/sidebar-weekly-admin';
import ItemList from 'components/list/weekly-column-item';
import AddWindow from 'components/window/add-weekly';
import { mapState } from 'vuex';

export default {
    data () {
        return {
            selectColumn: 0,
            showAdd: false
        };
    },
    components: { Sidebar, ItemList, AddWindow },
    created () {
        this.$store.dispatch('queryWeeklyDetail');
    },
    computed: {
        ...mapState({
            detail: state => state.weeklyState.detail
        }),
        itemList () {
            return this.detail[this.selectColumn] ? this.detail[this.selectColumn].items : [];
        }
    },
    methods: {
        columnClick (index) {
            this.selectColumn = index;
        },
        addClick () {
            this.showAdd = true;
        },
        onCancle () {
            this.showAdd = false;
        },
        onAdd () {
            let data = {
                summary: '窗外的麻雀，在电线杆上多嘴，你所这一句,啦啦啦啦',
                _id: '5a0c35b7ca2b6c40aabe8306',
                columns: [
                    {
                        name: '菲麦自研究',
                        articles: [
                            {
                                title: '真的爱你 哈哈哈哈',
                                url: 'http://www.facemagic888.com',
                                author: '小哥',
                                summary: '说走咱就走'
                            }, {
                                title: '真的爱你',
                                url: 'http://www.facemagic888.com',
                                author: '小哥',
                                summary: '说走咱就走'
                            }
                        ]
                    },
                    {
                        name: '菲麦自研究',
                        articles: [{
                            title: '真的爱你',
                            url: 'http://www.facemagic888.com',
                            author: '小哥',
                            summary: '说走咱就走'
                        }]
                    },
                    {
                        name: '菲麦自研究妮妮',
                        articles: [{
                            title: '真的爱你',
                            url: 'http://www.facemagic888.com',
                            author: '小哥',
                            summary: '说走咱就走'
                        }]
                    }
                ]
            };

            data = JSON.stringify(data);

            const obj = {
                data
            };

            this.$store.dispatch('saveOrUpdate', obj);

            this.showAdd = false;
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
</style>
