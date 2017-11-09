<template>
    <div>
        <main-titlebar></main-titlebar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <div class="main-content-wrap">
                    <home-list :list="list"></home-list>
                    <div class="pagination-wrap flex-container flex-direction-row">
                        <pagination :pageNumber="pageNumber"></pagination>
                    </div>
                </div>
                <sidebar></sidebar>
            </div>
        </div>
    </div>
</template>
<script>

import pagination from '../pagination/pagination';
import { mapState } from 'vuex';
import HomeList from 'components/list/home-list';
import Sidebar from 'components/sidebar/sidebar';

export default {
    components: {
        pagination,
        HomeList,
        Sidebar
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
</style>
