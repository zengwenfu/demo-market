<template>
    <div class="container">
        <div class="logo">
            <h1>
                <a href="#">FaceMagic</a>
            </h1>
        </div>
        <div class="register">
            <h2 class="register-title">注册</h2>
            <div class="register-box">
                <form >
                    <ul>
                        <li>
                            <i class="iconfont icon-yonghuming"></i>
                            <input type="text" placeholder="用户名/昵称">
                        </li>
                        <li>
                            <i class="iconfont icon-youxiang"></i>
                            <input type="text" placeholder="邮箱">
                        </li>
                        <li>
                            <i class="iconfont icon-mima"></i>
                            <input type="text" placeholder="密码">
                        </li>
                        <li>
                            <i class="iconfont icon-mima"></i>
                            <input type="text" placeholder="确认密码">
                        </li>
                        <li>
                            <i class="iconfont icon-shouji"></i>
                            <input type="text" placeholder="手机号(非必填)">
                        </li>
                    </ul>
                </form>
                <div class="register-btn">
                    <button>注册</button>
                </div>
                <div class="login-if">
                    <a href="#">已有账号登录?</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    body,
    h1,
    h2,
    a,
    img,
    ul,
    li,
    input,
    form {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    input,
    button {
        outline: none;
        border: none;
    }

    ul {
        list-style: none;
    }
    .container {
        position: relative;
        height: 280px;
        padding-top: 45px;
        background-color: #007fff;
    }

    .logo {
        position: absolute;
        left: 90px;
    }

    .logo a {
        color: #fff;
        line-height: 60px;
        font-size: 30px; 
    }

    .register {
        width: 425px;
        padding: 37px 60px;
        border: 1px solid #fff;
        border-radius: 6px;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: 0 0 4px rgba(0, 0, 0, .4);
        margin: 0 auto;
    }

    .register-title {
        padding-bottom: 20px;
        font-size: 20px;
    }

    .register-box ul li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e6e6e6;
    }

    .register-btn button {
        display: block;
        width: 100%;
        height: 40px;
        background: #007fff;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 20px;
    }

    .login-if a {
        display: block;
        margin-top: 20px;
        text-align: center;
        color: #007fff;
    }
</style>