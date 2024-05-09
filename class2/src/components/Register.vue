<template>
    <div class="Register">
        <h2>注册</h2>
        <p class="input_p">用户:
        <input :class="{empty:hasusername}" type="text" v-model="username"></p>
        <p class="notify" v-if="hasusername">用户名不能为空</p>
        <p class="input_p">密码:
        <input :class="{empty:haspassword}" type="password" v-model="password"></p>
        <p class="notify" v-if="haspassword">请输入密码</p>
        <p class="input_p">确认密码:
        <input :class="{empty:hasconfirmpassword}" type="password" v-model="confirmpassword"></p>
        <p class="notify" v-if="hasconfirmpassword">请再次输入密码</p>
        
        <div class="button">
            <button @click="register">注册</button>
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
            username:null,
            password:null,
            confirmpassword:null,
            hasusername:false,
            haspassword:false,
            hasconfirmpassword:false

        }
    },
    methods: {
        register() {
            
            
            if (this.username==null||this.username=="") {
                this.hasusername=true
                
            }
            else
            {
                this.hasusername=false
            }
            if (this.password==null||this.password=="") {
                this.haspassword=true
            }
            else
            {
                this.haspassword=false
            }
            if (this.confirmpassword==null||this.confirmpassword=="") {
                this.hasconfirmpassword=true
                
            }
            else
            {
                this.hasconfirmpassword=false
            }

            console.log(this.username,this.password,this.confirmpassword)
            if (!(this.hasusername || this.haspassword || this.hasconfirmpassword || this.password != this.confirmpassword)){
            //发送注册请求至后端接口进行验证//示例代码：假设后端接口地址为http://localhost:3000/
            axios.post('http://localhost:3/users', {
                username: this.username,
                password: this.password
            })
                .then(response => {
                    //注册成功处理逻辑
                    console.log(response.data);
                })
                .catch(error => {
                    //注册失败处理逻辑
                    console.log(error)
                });
            }
        },
        exited(){
            this.$emit('exited','')
        },
        clear(){
            this.username=null
            this.password=null
            this.confirmpassword=null
            this.hasusername=false
            this.haspassword=false
            this.hasconfirmpassword=false
        }
    }
}
</script>

<style>

.Register{
    
    position: fixed;
    width: 40vw;
    margin-top: -20vh;
    height: 45vh;
    margin-left:28vw;
    margin-right: 20vw;
    background-color: aliceblue;
    border-radius: 10px;
}
.Register h2{
    text-align: center;
}
.Register input{
    width: 15vw;
    
}
.notify{
    margin-left: 13vw;
    font-size: xx-small;
    color: #e54545;
}
.input_p{
    margin-left: 10vw;
    font-size: xx-small;

}
.empty{
    border-color:rgb(255, 0, 0);
}
.button{
    display: flex;
    justify-content: center;
}
.button button{
    background-color: rgb(24, 123, 209);
    margin-left: 1vw;
    margin-right: 1vw;
}
</style>