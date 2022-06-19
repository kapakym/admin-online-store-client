<template>
  <div>
    <h1>Управление пользователями</h1>
    <ps-button @click="showAddUserDialog">Добавить пользователя</ps-button>
    <ps-button @click="fetchUsers">Загрузить список пользователей</ps-button>
    <ps-dialog v-model:show="dialogVisible"
      ><new-user-form @create="addUser"
    /></ps-dialog>

    <user-list :users="users" @removeUser="removeUser" />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import NewUserForm from "@/components/NewUserForm.vue";
import PsButton from "@/components/UI/PsButton.vue";
import axios from "axios";
import PsDialog from "@/components/UI/PsDialog.vue";
export default {
  components: {
    UserList,
    NewUserForm,
    PsButton,
    PsDialog,
    UserList,
  },
  data() {
    return {
      dialogVisible: false,
      users: [
        {
          id: 1,
          email: "test@mail.ru",
          password: "test",
          statusBan: false,
          binReason: "dsaf",
          roles: ["ADMIN", "USER"],
        },
        {
          id: 2,
          email: "test@mail.ru",
          password: "test",
          statusBan: false,
          banReason: "dsaf",
          roles: ["ADMIN", "USER"],
        },
        {
          id: 3,
          email: "test@mail.ru",
          password: "test",
          statusBan: false,
          banReason: "dsaf",
          roles: ["ADMIN", "USER"],
        },
      ],
    };
  },

  methods: {
    addUser(user) {
      console.log(user);
      this.users.push(user);
      this.dialogVisible = false;
    },
    removeUser(id) {
      this.users = this.users.filter((p) => p.id !== id);
    },
    showAddUserDialog() {
      this.dialogVisible = true;
    },
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:7000/users");
        this.users = response.data;
        console.log(response);
      } catch (error) {
        alert("Ошибка");
      }
    },
  },
  setup() {
    return {};
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="css" scoped>

</style>