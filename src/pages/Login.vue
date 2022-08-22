<template>
  <div class="container">
    <div class="loginpage">
      <h2>{{ registrationFlag ? "Регистрация" : "Авторизация" }}</h2>
      <ps-input v-model="email" type="text" placeholder="email"/>
      <ps-input v-model="password" type="text" placeholder="password"/>

      <ps-input
          v-if="registrationFlag"
          v-model="repassword"
          type="text"
          @input="validPassword"
          placeholder="repeat password"
      />
      <h3 v-if="passwordNot && registrationFlag" style="color: red">
        Пароли не совпадают
      </h3>
      <div class="footer">
        <a href="">Восстановление пароля</a>
        <ps-group-buttons>

          <ps-button
              @click="registrationFlag ? registrationMethod() : loginMethods()"
          >
            <ps-icon :name="'done'" style="color: green"/>
            {{ registrationFlag ? "Создать" : "Вход" }}
          </ps-button>
          <ps-button @click="registrationFlag = !registrationFlag"
          >{{ registrationFlag ? "Авторизация" : "Регистрация" }}
          </ps-button>
        </ps-group-buttons>
      </div>


    </div>
  </div>
</template>

<script>
import PsInput from "@/components/UI/PsInput";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsButton from "@/components/UI/PsButton";
import apiUserLogin from "@/api/User/apiUserLogin";
import {mapActions} from "vuex";
import PsIcon from "@/components/UI/PsIcon";

export default {
  name: "LoginPage",
  components: {PsIcon, PsButton, PsGroupButtons, PsInput},
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      registrationFlag: false,
      passwordNot: true,
    };
  },

  methods: {
    ...mapActions({
      checkAuth: "auth/checkAuth",
      registrationUser: "auth/registrationUser",
    }),

    validPassword() {
      this.passwordNot = this.password !== this.repassword;
    },
    async registrationMethod() {
      if (!this.passwordNot)
        this.registrationUser({email: this.email, password: this.password});
    },
    async loginMethods() {
      const token = await apiUserLogin({
        email: this.email,
        password: this.password,
      });
      if (token.value.data?.token) {
        this.checkAuth();
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.loginpage {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 40%;
  /*border: 4px solid teal;*/
  /*justify-content: center;*/
  align-items: center;
  /*align-content: center;*/
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 25px black;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
}
</style>
