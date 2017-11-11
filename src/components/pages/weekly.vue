<template>
    <div>
        <weekly-titlebar></weekly-titlebar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <div class="main-content-wrap">
                    <weekly-list :list="list"></weekly-list>
                </div>
                <sidebar></sidebar>
            </div>
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex';
import WeeklyList from 'components/list/weekly-list';
import Sidebar from 'components/sidebar/sidebar';

export default {
    data () {
        return {
            pageNumber: 12
        };
    },
    components: { WeeklyList, Sidebar },
    computed: {
        ...mapState({
            list: state => state.weeklyState.list
        }),
        ckey () {
            return this.key + 'yeah';
        }
    },
    methods: {
    },
    created () {
        this.$store.dispatch('queryWeeklyList');
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
