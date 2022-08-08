<template>
  <div class="container">
    <div class="loginpage">
      <h2>Авторизация</h2>
      <ps-input v-model="email" type="text" placeholder="email"/>
      <ps-input v-model="password" type="text" placeholder="password"/>
      <ps-button @click="loginMethods">Вход</ps-button>

      <a href="">Восстановление пароля</a>
    </div>
  </div>

</template>

<script>
import PsInput from "@/components/UI/PsInput";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsButton from "@/components/UI/PsButton";
import apiUserLogin from "@/api/User/apiUserLogin";

export default {
  name: "LoginPage",
  components: {PsButton, PsGroupButtons, PsInput},
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async loginMethods() {
      const token = await apiUserLogin({email: this.email, password: this.password});
      console.log(token.value.data)
    }
  }

}
</script>

<style scoped>
.loginpage {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 30%;
  border: 4px solid teal;
  /*justify-content: center;*/
  align-items: center;
  /*align-content: center;*/
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
</style>