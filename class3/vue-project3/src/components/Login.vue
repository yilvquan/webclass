<template>
    <div class="Loginer">
        <h2>登录</h2>
        <p class="input_p">用户:
            <input :class="{ empty: hasusername }" type="text" v-model="username">
        </p>
        <p class="notify" v-if="hasusername">用户名不能为空</p>
        <p class="input_p">密码:
            <input :class="{ empty: haspassword }" type="password" v-model="password">
        </p>
        <p class="notify" v-if="haspassword">密码不能为空</p>
        <div class="button">
            <button @click="login">登录</button>
            <button @click="clear">重置</button>
            <button @click="exited">退出</button>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
        return {
            username: null,
            password: null,
            hasusername: false,
            haspassword: false,
            input1: "red"

        }
    },
    methods: {
        login() {
            //发送登录请求至后端接口进行验证//示例代码：假设后端接口地址为http://localhost:3000/
            
            if (this.username == null || this.username == "") {
                this.hasusername = true

            }
            else {
                this.hasusername = false
            }
            if (this.password == null || this.password == "") {
                this.haspassword = true
            }
            else {
                this.haspassword = false
            }
            console.log(this.username, this.password)
            if (!(this.haspassword||this.hasusername)) {
                console.log(this.haspassword,this.hasusername)
                axios.post('http://localhost:8082/web_ssm_vue_3_war_exploded/user/Login?username='+this.username+'&password='+this.password)
                .then(response => {
                    //登录成功处理逻辑
                    console.log(response.data);
                    alert(response.data)
                })
                .catch(error => {
                    //登录失败处理逻辑
                    console.log(error)
                    alert(error)
                });
            }
            
            
        },
        exited() {
            this.$emit('exited', '')
        },
        clear() {
            this.username = null
            this.password = null
            this.hasusername = false
            this.haspassword = false

        }
    }
}
</script>

<style>
.Loginer {

    position: fixed;
    width: 40vw;
    margin-top: -20vh;
    height: 45vh;
    margin-left: 28vw;
    margin-right: 20vw;
    background-color: aliceblue;
    border-radius: 10px;

}

.Loginer input {
    width: 15vw;


}

.Loginer h2 {
    text-align: center;
}

.notify {
    margin-left: 13vw;
    font-size: xx-small;
    color: #e54545;
}

.input_p {
    margin-left: 10vw;
    font-size: xx-small;

}

.empty {
    border-color: rgb(255, 0, 0);
}

.button {
    display: flex;
    justify-content: center;
}

.button button {
    background-color: rgb(24, 123, 209);
    margin-left: 1vw;
    margin-right: 1vw;
}
</style>