<template>
	<weekly-list :list="list"></weekly-list>
</template>
<script>
    import WeeklyList from 'components/list/weekly-list';
    export default {
        props: {
            list: Object
        },
        components: { WeeklyList }
    };
</script>