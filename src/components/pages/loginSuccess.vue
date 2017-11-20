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
const hash = {
    'qq.com': 'http://mail.qq.com',
    'gmail.com': 'http://mail.google.com',
    'sina.com': 'http://mail.sina.com.cn',
    '163.com': 'http://mail.163.com',
    '126.com': 'http://mail.126.com',
    'yeah.net': 'http://www.yeah.net/',
    'sohu.com': 'http://mail.sohu.com/',
    'tom.com': 'http://mail.tom.com/',
    'sogou.com': 'http://mail.sogou.com/',
    '139.com': 'http://mail.10086.cn/',
    'hotmail.com': 'http://www.hotmail.com',
    'live.com': 'http://login.live.com/',
    'live.cn': 'http://login.live.cn/',
    'live.com.cn': 'http://login.live.com.cn',
    '189.com': 'http://webmail16.189.cn/webmail/',
    'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
    'yahoo.cn': 'http://mail.cn.yahoo.com/',
    'eyou.com': 'http://www.eyou.com/',
    '21cn.com': 'http://mail.21cn.com/',
    '188.com': 'http://www.188.com/',
    'foxmail.com': 'http://www.foxmail.com',
    'outlook.com': 'http://www.outlook.com'
};
const { token, goEmail } = parseQueryString();
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
            if (goEmail) {
                this.loginMessage = '点击按钮验证邮箱';
                this.buttonMessage = '立即验证';
            } else {
                const data = await this.decipher(token);
                if (data.code !== '0000') {
                    this.loginMessage = data.msg;
                    this.infoClass = true;
                    data.code === '0005' ? this.buttonMessage = '马上注册' : this.buttonMessage = '重新发送';
                }
            }
        },
        clickButton () {
            if (this.buttonMessage === '马上注册') {
                location.href = './register.html';
            } else if (this.buttonMessage === '重新发送' && !this.emailAgain) {
                alert('todo');
            } else if (this.buttonMessage === '立即验证') {
                location.href = hash[goEmail];
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