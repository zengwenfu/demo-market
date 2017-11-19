<template>
    <column-list :detail="columns"/>
</template>
<script>
    import { mapState } from 'vuex';
    import ColumnList from 'components/list/weekly-column.vue';
    export default {
        components: { ColumnList },
        computed: {
            ...mapState({
                detail: state => state.weeklyState.detail
            }),
            columns () {
                return this.detail.columns || [];
            }
        },
        created () {
            const id = this.$route.params.id;
            if (!id) {
                this.$Message.error('文章不存在');
                return;
            }
            this.$store.dispatch('queryWeeklyDetail', { id });
        },
        destroyed () {
            this.$store.dispatch('setWeeklyTitle', '菲麦前端周刊');
        }
    };
</script>