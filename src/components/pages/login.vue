<template>
    <div class="register_div">
        <main-titlebar></main-titlebar>
        <div class="wrapper">
            <div class="register_box">
                <div class="register_body">
                    <h2>用户登录</h2>
                    <form method="post" id="register_form">
                        <ul>
                            <li>
                                <input type="text" class="form_control" ref="email" id="eamil" name="email" placeholder="邮箱">
                            </li>
                            <li>
                                <input type="password" class="form_control" ref="pass" id="password" name="password" placeholder="密码">
                            </li>
                            <li>
                                <div class="register_button" @click="login">登录</div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import request from 'utils/request.js';
import apiConfig from 'utils/apiConfig.js';
import Validator from 'utils/validator';
const validatorFunc = (form) => {
    const validator = new Validator();
    validator.add(form.email, [{
        strategy: 'isNonEmpty',
        errorMsg: '邮箱地址不能为空！'
    }, {
        strategy: 'isEmail',
        errorMsg: '邮箱地址格式不正确！'
    }]);
    validator.add(form.password, [{
        strategy: 'isNonEmpty',
        errorMsg: '密码不能为空！'
    }, {
        strategy: 'minLength:6',
        errorMsg: '密码为6-20位数字字母组合'
    }]);
    const errorMsg = validator.start();
    return errorMsg;
};
export default {
    name: 'register',
    methods: {
        async login () {
            const form = document.getElementById('register_form');
            const errorMsg = validatorFunc(form);
            if (errorMsg) {
                this.$Message.error(errorMsg);
                return;
            }
            const res = await this.registerMessage();
            if (res.code !== '0000') {
                this.$Message.error(res.msg);
            } else {
                if (localStorage.fromUrl) {
                    location.href = localStorage.fromUrl;
                } else {
                    location.href = './home.html';
                }
            }
        },
        async registerMessage () {
            const email = this.$refs.email.value;
            const password = this.$refs.pass.value;
            const data = JSON.stringify({ email, password });
            const res = await request(apiConfig.loginApi(), { data }, 'POST');
            return res;
        }
    }
};
</script>
<style scoped>

    .register_div {
        background: #fff url(~assets/img/register/l_bg.jpg) repeat-x top;
        height: 100%;
    }

    .wrapper {
        position: relative;
        margin-bottom: 20px;
        padding-top: 100px;
    }

    .register_box {
        width: 714px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    }

    .register_body {
        margin: 0 auto;
        padding: 20px 60px 30px;
        width: 400px;
        height: 424px;
    }

    h2 {
        margin: 13px 0 30px;
        color: #333;
        font-size: 18px;
    }
    
    ul li {
        margin-top: 20px;
        line-height: 30px;
    }

    .form_control {
        padding: 6px 12px 6px 40px;
        display: block;
        height: 40px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #999;
        border: none;
        border-bottom: 1px solid #e6e6e6;
        border-radius: 0;
        outline: none;
    }
    
    .form_control {
        width: 348px;
        background: #fff url(~assets/img/register/u.png) no-repeat 6px;
    }

    .form_control2 {
        width: 140px;
        background: #fff;
        padding-left: 10px !important;
    }

    ul li:nth-child(2) .form_control {
        background: #fff url(~assets/img/register/email.png) no-repeat 6px;
    }

    ul li:nth-child(3) .form_control {
        background: #fff url(~assets/img/register/p.png) no-repeat 6px;
    }

    .codeImg {
        float: right;
        height: 53px;
        cursor: pointer;
    }

    /* button 按钮可以根据后期需求分离到 common.css 里面 */
    .register_button {
        padding: 0 10px;
        height: 38px;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border-radius: 20px;
        color: #fff;
        background-color: #007fff;
    }
</style>
