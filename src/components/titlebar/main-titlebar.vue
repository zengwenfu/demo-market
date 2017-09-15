<template>
    <div class="main-title-wrap wrap">
        <div class="main-title-inner inner flex-container flex-direction-row">
            <div class="main-title-left flex-container flex-direction-row">
                <div class="logo">FaceMagic</div>
                <div class="nav flex-container flex-direction-row">
                    <p><a href="#" class="selected">Demos</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">tools</a></p>
                    <p><a href="#">About</a></p>
                </div>
                <div class="search">
                </div>
            </div>
            <div class="actions">
                <div v-if="isLogin" class="add">
                    
                </div>
                <div v-if="!isLogin" class="user flex-container flex-direction-row">
                    <div class="login">登录</div>
                    <div class="line"></div>
                    <div class="register">注册</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isLogin: false
            };
        }
    };
</script>
<style scoped>
    .main-title-wrap {
        background-color: #fff;
        height: 60px;
        color: #71777c;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .main-title-inner {
        align-items: center;
        justify-content: space-between;
    }

    .main-title-left {
        align-items: center;
    }

    .logo {
        color: #007fff;
        line-height: 60px;
        font-size: 30px;
    }

    .nav {
        line-height: 60px;
        margin-left: 50px;
        width: 250px;
        justify-content: space-between;
    }

    .nav > p > a {
        color: #71777c;
        text-decoration: none;
        font-size: 16px;
    }

    .nav > p > a.selected {
        color: #007fff;
    }

    .nav > p > a:hover {
        color: #007fff;
    }

    .search {
        border: 1px solid hsla(0, 0%, 59%, 0.2);
        background-color: rgba(227, 231, 236, 0.2);
        width: 150px;
        height: 33px;
        margin-left: 100px;
        border-radius: 20px;
    }

    .user {
        width: 100px;
        justify-content: space-between;
    }

    .user > div {
        cursor: pointer;
    }

    .line {
        width: 1px;
        height: 20px;
        background-color: #ccc;
    }

</style>