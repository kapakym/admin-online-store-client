<template>
  <div class="newuserform">
    <h4>Добавление пользователя</h4>
    <ps-input v-model="email" type="text" placeholder="email"/>
    <ps-input type="text" placeholder="password" v-model="password"/>

    <ps-group-buttons>
      <ps-button class="btn" @click="addUser">
        <ps-icon :name="'done'" style="color: green"/>
        Добавить
      </ps-button>
      <ps-button class="btn" @click="$emit('close')">
        <ps-icon :name="'cancel'" style="color: red"/>
        Отмена
      </ps-button>
    </ps-group-buttons>
  </div>
</template>

<script>
import PsIcon from "@/components/UI/PsIcon";
import apiUserRegistration from "@/api/User/apiUserRegistration";
import PsMultiLineSelect from "@/components/UI/PsMultiLineSelect";

export default {
  components: {PsMultiLineSelect, PsIcon},

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async addUser() {
      const result = await apiUserRegistration({email: this.email, password: this.password})
      this.email = "";
      this.password = "";
      this.$emit("close");
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
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>