<template>
    <div>
        <main-titlebar></main-titlebar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <div class="main-content-wrap">
                    <div class="list-wrap">
                        <div class="list-item" v-for="item in list">
                            <div class="img-content">
                                <img :src="require('../../assets/img/' + item.imgName + '.jpg')" alt="">
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
                    <div class="pagination-wrap flex-container flex-direction-row">
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

import pagination from '../pagination/pagination';
import { mapState } from 'vuex';

export default {
    components: {
        pagination
    },
    data () {
        return {
            pageNumber: 12
        };
    },
    computed: {
        ...mapState({
            list: state => state.homeState.list
        }),
        ckey () {
            return this.key + 'yeah';
        }
    },
    methods: {
    },
    created () {
        this.$store.dispatch('queryHomeList');
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
    }

    .sidebar {
        flex: 2;
        height: 200px;
        margin-left: 15px;
        background: #000;
    }

    .list-item {
        background: #fff;
        position: relative;
        height: 140px;
        margin-top: 15px;
        padding: 20px 0 0 230px;
        cursor: pointer;
    }

    .list-item:hover {
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .list-wrap > .list-item:first-child {
        margin-top: 0;
    }

    .img-content {
        position: absolute;
        width: 200px;
        height: 132px;

        /* background: url('../../assets/img/001.jpg') no-repeat; */
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
        margin: 20px 5px;
        align-items: center;
        justify-content: center;
    }
</style>
