<template>
    <div class="register_div">
        <main-titlebar></main-titlebar>
        <div class="wrapper">
            <div class="register_box">
                <div class="register_body">
                    <h2>注册新用户</h2>
                    <form method="post" id="register_form">
                        <ul>
                            <li>
                                <input type="text" class="form_control" id="name" ref="username" name="name" placeholder="用户名">
                            </li>
                            <li>
                                <input type="text" class="form_control" ref="email" id="eamil" name="eamil" placeholder="邮箱">
                            </li>
                            <li>
                                <input type="password" class="form_control" ref="pass" id="password" name="password" placeholder="密码">
                            </li>
                            <li>
                                <img src="" alt="验证码" ref="codeImg" @click="getImageCode()" class="codeImg">
                                <input type="text" class="form_control form_control2" name="code" id="code" placeholder="验证码" ref="code">
                            </li>
                            <li>
                                <div class="register_button" @click="register">注册</div>
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
export default {
    name: 'register',
    methods: {
        async getImageCode () {
            const data = await request(apiConfig.captchaApi());
            this.$refs.codeImg.src = data.data.imgData;
        },
        async register () {
            const data = await this.valCode();
            if (!data) return;
            const res = await this.registerMessage();
            if (res.code === '0000') {
                this.$Message.success('注册成功，激活后方可登录~');
            } else {
                this.$Message.error(res.msg);
            }
        },
        async valCode () {
            const code = this.$refs.code.value;
            if (code === '' || code.length !== 6) {
                this.$Message.error('验证码格式错误!');
                return false;
            }
            const data = await request(apiConfig.checkCaptchaApi(), { code });
            if (data.code !== '0000') {
                this.$Message.error('验证码输入错误');
                return false;
            }
            return true;
        },
        async registerMessage () {
            const nickName = this.$refs.username.value;
            const email = this.$refs.email.value;
            const password = this.$refs.pass.value;
            const data = JSON.stringify({ nickName, email, password });
            const res = await request(apiConfig.registerApi(), { data }, 'POST');
            return res;
        }
    },
    mounted () {
        this.getImageCode();
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
