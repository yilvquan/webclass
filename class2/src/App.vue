<template>


  <Navbar @logined="Loginer" @registered="Register"/>
  <WebHeader />
  <LoginPage v-if="canLogin" @Exited="Exiter"/>
  <RegisterPage v-if="canRegister" @Exited="Exiter"/>
  

  <Section1 />
  <h1 id="onetitle">课程特色</h1>
  <Section2 />
  <div class="end">
    ©2024 云端科技 Artech All rights reserved
  </div>
  
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import WebHeader from './components/WebHeader.vue'
import Section1 from './components/Sectioner1.vue'
import Section2 from './components/Sectioner2.vue'
import LoginPage from './components/Login.vue'
import RegisterPage from './components/Register.vue'

export default {
  components: {
    Navbar: Navbar,
    WebHeader: WebHeader,
    Section1: Section1,
    Section2: Section2,
    LoginPage:LoginPage,
    RegisterPage:RegisterPage

  },
  data() {
    return {
      canLogin: false,
      canRegister: false
    }


  },
  methods:{
    Loginer(){
      this.canLogin=true
      this.canRegister=false
      console.log(this.canLogin)
    },
    Register(){
      this.canRegister=true
      this.canLogin=false
      console.log(this.canRegister)
    },
    Exiter(){
      this.canLogin=false
      this.canRegister=false
    }
  }
}
</script>