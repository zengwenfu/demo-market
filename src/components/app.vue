<template>
    <div>
        <titleBar></titleBar>
        <div class="inner demo">
            <p>hello world!!!</p>
            <p>{{ prop }}</p>
            <p>{{ key }}</p>
            <p>{{ ckey }}</p>
            <div>
            <p>{{ message }}</p>
            <div @click="onButtonClick" class="button">修改 message</div>
        </div>
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex';
import TitleBar from './titlebar/main-titlebar';

let i = 1;
const message = ['hello world', 'hello'];

export default {
    components: { TitleBar },
    props: {
        prop: {
            type: String,
            default: 'hello'
        }
    },
    data () {
        return {
            key: 'ok'
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

.demo {
    margin-top: 20px;
}

.button {
    width: 200px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ccc;
    border-radius: 15px;
}
</style>
