<template>
  <div class="newuserform">
    <h4>Добавление пользователя</h4>
    <ps-input v-model="user.email" type="text" placeholder="email" />
    <ps-input type="text" placeholder="password" v-model="user.password" />
    <ps-input v-model="user.statusBan" type="checkbox" />
    <ps-input type="text" placeholder="Ban reason" v-model="user.banReason" />
    <ps-button class="btn" @click="addUser">Добавить</ps-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        statusBan: false,
        banReason: "",
      },
    };
  },
  methods: {
    addUser() {
      this.user.id = Date.now();
      this.user.roles = ["USER"];
      this.$emit("create", this.user);
      this.user = {
        email: "",
        password: "",
        statusBan: false,
        banReason: "",
      };
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
}

.newuserform {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>