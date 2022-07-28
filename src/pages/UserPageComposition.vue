<template>
  <div>
    <h1>Управление пользователями</h1>
    <!-- <ps-button @click="showAddUserDialog">Добавить пользователя</ps-button> -->
    <!-- <ps-dialog v-model:show="dialogVisible"
      ><new-user-form @create="addUser"
    /></ps-dialog> -->

    <user-list :users="users" @removeUser="removeUser"/>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import NewUserForm from "@/components/User/NewUserForm.vue";
import PsButton from "@/components/UI/PsButton.vue";
import axios from "axios";
import PsDialog from "@/components/UI/PsDialog.vue";
import useUser from "@/hooks/useUser";

export default {
  components: {
    NewUserForm,
    PsButton,
    PsDialog,
    UserList,
  },
  setup(props) {
    const {users} = useUser("test");
    return {users};
  },
  data() {
    return {
      // users: [],
      dialogVisible: false,
    };
  },

  methods: {
    async addUser(user) {
      //   this.users.push(user);

      const response = await axios.post(
          "http://localhost:7000/auth/registration",
          {
            email: user.email,
            password: user.password,
          }
      );
      console.log(response);
      this.dialogVisible = false;
    },
    async removeUser(id) {
      const response = await axios.post("http://localhost:7000/users/delete", {
        userId: Number(id),
      });
      console.log(response);
      //   this.users = this.users.filter((p) => p.id !== id);
      this.fetchUsers();
    },
    showAddUserDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="css" scoped>
</style>