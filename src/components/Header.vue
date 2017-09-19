<template>
    <div>
        <div class="main-menu-wrapper">
            <div class="log">
                <a href="../../home.html"></a>
            </div>
            <div class="search">
                <input type="text" placeholder="输入关键字">
            </div>
            <div class="brand">
                <span>想写文章增加收入？</span>
                <a href="">马上申请成为作者</a>
            </div>
            <div class="sign">
                <span>登录</span>
                <span> | </span>
                <span>注册</span>
            </div>
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex';
let i = 1;
const message = ['hello world', 'hello'];

export default {
    components: {},
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
.main-menu-wrapper {
    width: 1200px;
    height: 60px;
    background-color: #25af97;
}

.log {
    position: relative;
    float: left;
    width: 240px;
    height: 40px;
    margin: 10px 0 0 24px;
}

.search {
    margin: 10px 0;
    position: relative;
    float: left;
    width: 240px;
    height: 40px;
    padding: 10px 0;
}

.brand {
    margin: 10px 0;
    position: relative;
    float: left;
    height: 40px;
    line-height: 40px;
    color: #fff;
}

.sign {
    margin: 10px 0;
    position: relative;
    float: right;
    height: 40px;
    line-height: 40px;
    color: #fff;
    padding-right: 20px;
}

.log a {
    display: block;
    width: 180px;
    height: 40px;
    background: url('../assets/img/logo.png') no-repeat;
}

.search input {
    width: 160px;
    height: 20px;
}
</style>
