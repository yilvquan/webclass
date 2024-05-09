<template>

    <nav class="navbar">
        <img src="./image/屏幕截图 2024-03-29 163318.png" alt="找不到图片">
        <ul class="log">
            <li class="lefts" @click="logined"><a>登录</a></li>
            <li class="rights" @click="registered"><a>注册</a></li>


        </ul>
    </nav>


</template>
<script>


export default {
    data() {
        return {

        }
    },
    methods: {
        
        logined() {
            this.$emit('logined', "")
        },
        registered() {
            this.$emit('registered', "")
        }
    }
}
</script>
