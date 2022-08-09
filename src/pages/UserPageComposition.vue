<template>


  <div class="psuserpage" v-if="$store.state.auth.isAuth">
    <h1>Управление пользователями</h1>

    <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>

    <user-list :users="users" @removeUser="removeUser"/>
    <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>
  </div>
  <div class="psuserpage" v-else>
    <h1>Страница не доступна</h1>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import NewUserForm from "@/components/User/NewUserForm.vue";
import PsButton from "@/components/UI/PsButton.vue";
import axios from "axios";
import PsDialog from "@/components/UI/PsDialog.vue";
// import useUser from "@/hooks/useUser";
import PsPaginator from "@/components/UI/PsPaginator";
import {mapActions, mapState} from "vuex";

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
      dialogVisible: false,
    };
  },
  computed: {
    ...mapState({
      page: state => state.user.page,
      limit: state => state.user.limit,
      totalPages: state => state.user.totalPages,
      users: state => state.user.users,
    })
  },

  mounted() {
    this.changePage(this.page)
  },
  methods: {
    ...mapActions({
      fetchUsers: "user/fetchUsers"
    }),
    async changePage(numberPage) {
      this.fetchUsers({page: numberPage});
    },

    async addUser(user) {

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
  /*width: 100%;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-items: center;*/
  text-align: center;
}
</style>