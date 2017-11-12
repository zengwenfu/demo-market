<template>
    <column-list :detail="detail"/>
</template>
<script>
    import { mapState } from 'vuex';
    import ColumnList from 'components/list/weekly-column.vue';
    export default {
        components: { ColumnList },
        computed: {
            ...mapState({
                detail: state => state.weeklyState.detail
            })
        },
        destroyed () {
            this.$store.dispatch('setWeeklyTitle', '菲麦前端周刊');
        }
    };
</script>