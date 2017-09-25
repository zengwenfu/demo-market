<template>
    <div>
        <titleBar></titleBar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <div class="main-content-wrap">
                    <div class="list-wrap">
                        <div class="list-item" v-for="item in list">
                            <div class="img-content">
                            </div>
                            <h4>{{item.title}}</h4>
                            <p>{{item.keyWord}}</p>
                            <p>{{item.description}}</p>
                            <div class="download">
                                <span>下载</span>
                                <span>{{item.downLoadCount}}人</span>
                            </div>
                        </div>
                    </div>
                    <div class="pagination-wrap">
                        <pagination :pageNumber="pageNumber"></pagination>
                    </div>
                </div>
                <div class="sidebar">

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import titleBar from '../titlebar/main-titlebar';
import pagination from '../pagination/pagination';
import { mapState } from 'vuex';
let i = 1;
const message = ['hello world', 'hello'];

export default {
    components: {
        titleBar,
        pagination
    },
    data () {
        return {
            list: [
                {
                    title: 'Reactive Native',
                    keyWord: '技术：Object-C',
                    description: '使用RN实现自定义视图的一个例子',
                    downLoadCount: '20'
                },
                {
                    title: 'Reactive Native',
                    keyWord: '技术：Object-C',
                    description: '使用RN实现自定义视图的一个例子',
                    downLoadCount: '20'
                },
                {
                    title: 'Reactive Native',
                    keyWord: '技术：Object-C',
                    description: '使用RN实现自定义视图的一个例子',
                    downLoadCount: '20'
                },
                {
                    title: 'Reactive Native',
                    keyWord: '技术：Object-C',
                    description: '使用RN实现自定义视图的一个例子',
                    downLoadCount: '20'
                }
            ],
            pageNumber: 8
        };
    },
    computed: {
        ...mapState({
            message: state => state.appState.message
        }),
        ckey () {
            return this.key + 'yeah';
        }
    },
    methods: {
        onButtonClick () {
            i = i === 0 ? 1 : 0;
            this.$store.dispatch('initStatus', message[i]);
        }
    },
    created () {
    },
    mounted () {
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
        padding: 0 10px;
    }

    .sidebar {
        flex: 2;
        height: 200px;
        padding: 0 15px;
        background: #000;
    }

    .list-item {
        background: #fff;
        position: relative;
        height: 160px;
        margin-top: 10px;
        padding: 20px 0 0 230px;
    }

    .list-wrap > .list-item:first-child {
        margin-top: 0;
    }

    .img-content {
        position: absolute;
        width: 200px;
        height: 132px;
        background: url('../../assets/img/001.jpg') no-repeat;
        left: 10px;
        top: 14px;
    }

    .list-item h4 {
        font-size: 18px;
        line-height: 26px;
        color: #000;
    }

    .list-item p {
        font-size: 13px;
        line-height: 18px;
    }

    .download {
        position: absolute;
        top: 15px;
        right: 50px;
        font-size: 13px;
    }

    .pagination-wrap {
        width: 80%;
        margin: 20px auto;
    }
</style>
