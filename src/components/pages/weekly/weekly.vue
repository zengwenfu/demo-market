<template>
    <div>
        <weekly-titlebar></weekly-titlebar>
        <div class=" home body-wrap wrap">
            <div class="body-inner inner flex-container flex-direction-row">
                <router-view class="main-content-wrap"/>
                <sidebar></sidebar>
            </div>
        </div>
    </div>
</template>
<script>

import Sidebar from 'components/sidebar/sidebar';

export default {
    data () {
        return {
            pageNumber: 12
        };
    },
    components: { Sidebar },
    created () {
        // this.$router.push({ path: 'list' });
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
