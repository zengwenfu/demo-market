<template>
	<div class="column-wrap">
		<div class="column-item" v-for="item, index in detail">
            <div class="header flex-container flex-direction-row" :style="{borderBottomColor: getColor(index)}">
                <div class="header-icon" :style="{backgroundColor: getColor(index)}"></div>
                <div class="name" :style="{color: getColor(index)}">{{ item.name }}</div>
            </div>
            <item-list class="item-list" :itemList="item.items"></item-list>
        </div>
	</div>
</template>
<script>
    import ItemList from './weekly-column-item';
    export default {
        props: {
            detail: Object
        },
        components: { ItemList },
        methods: {
            getColor (num) {
                num = num + '';
                let index = parseInt(num.substring(num.length - 1));
                if (index > 5) {
                    index = index - 5;
                }
                const r = 255 - index * 25;
                return `rgb(${r}, 222, 165)`;
            }
        },
        created () {
        }
    };
</script>
<style scoped>
    .header {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        height: 50px;
        align-items: flex-end;
    }

    .header-icon {
        width: 30px;
        height: 20px;
        transform: rotate(45deg);
        margin-bottom: 10px;
    }

    .name {
        font-size: 20px;
        line-height: 40px;
        margin-left: 20px;
    }
</style>