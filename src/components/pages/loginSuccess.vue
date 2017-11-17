<template>
    <div class="register_div">
        <main-titlebar></main-titlebar>
        <div class="wrapper">
            <div class="register_box">
                <div class="register_body">
                    <h2>注册信息</h2>
                    <div class="success" :class="{'hasInit': infoClass}">
                      {{ loginMessage }}
                    </div>
                    <div class="loginButton" @click="clickButton">{{ buttonMessage }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { parseQueryString } from 'utils/common';
import request from 'utils/request';
import apiConfig from 'utils/apiConfig';
export default {
    name: 'loginsuccess',
    data () {
        return {
            loginMessage: '正在验证邮箱...',
            buttonMessage: '马上登陆',
            infoClass: false,
            emailAgain: false
        };
    },
    mounted () {
        this.init();
    },
    methods: {
        async decipher (token) {
            const data = await request(apiConfig.decipherApi(), { data: JSON.stringify({ token }) }, 'POST');
            return data;
        },
        async init () {
            const { token } = parseQueryString();
            const data = await this.decipher(token);
            if (data.code !== '0000') {
                this.loginMessage = data.msg;
                this.infoClass = true;
                data.code === '0005' ? this.buttonMessage = '马上注册' : this.buttonMessage = '重新发送';
            }
        },
        clickButton () {
            if (this.buttonMessage === '马上注册') {
                location.href = './register.html';
            } else if (this.buttonMessage === '重新发送' && !this.emailAgain) {
                alert('todo');
            } else {
                location.href = './login.html';
            }
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
        overflow: hidden;
    }

    h2 {
        margin: 13px 0 30px;
        color: #333;
        font-size: 18px;
    }

    .success {
        text-align: center;
        color: #007fff;
    }

    .loginButton {
        margin-top: 30px;
        width: 100%;
        height: 40px;
        border-radius: 20px;
        background: #007fff;
        color: #fff;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }

    .loginButton:hover {
        background-color: #007fee;
    }

    .hasInit {
        color: #f00;
    }
</style>