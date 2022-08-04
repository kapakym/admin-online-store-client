<template>
  <ps-dialog v-model:show="dialogVisible"
  >
    <new-user-form @create="addUser" @close="dialogVisible=false"
    />
  </ps-dialog>
  <div class="psuserpage">
    <h1>Управление пользователями</h1>
    <ps-button @click="showAddUserDialog">
      <ps-icon :name="add_user" style="color: green"/>
      Добавить пользователя
    </ps-button>


    <user-list :users="users" @removeUser="removeUser"/>
    <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import NewUserForm from "@/components/User/NewUserForm.vue";
import PsButton from "@/components/UI/PsButton.vue";
import axios from "axios";
import PsDialog from "@/components/UI/PsDialog.vue";
import useUser from "@/hooks/useUser";
import PsPaginator from "@/components/UI/PsPaginator";
import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";

export default {
  components: {
    PsPaginator,
    NewUserForm,
    PsButton,
    PsDialog,
    UserList,
  },

  data() {
    return {
      // users: [],
      page: 1,
      limit: 3,
      dialogVisible: false,
    };
  },
  setup(props) {
    const {users, count, totalPages} = useUser(1, 3);
    return {users, count, totalPages};
  },

  methods: {
    async changePage(n) {
      this.page = n;
      const result = await apiGetUsersByPage(this.page, this.limit);
      this.users = result.value.data.users;
      this.totalPages = Math.ceil(result.value.data.count / this.limit);
      console.log(result.value.data)
    },
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
.psuserpage {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>