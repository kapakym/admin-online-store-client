<template>
  <div>
    <h1>Управление пользователями</h1>
    <ps-button @click="showAddUserDialog">Добавить пользователя</ps-button>
    <ps-dialog v-model:show="dialogVisible"
    >
      <new-user-form @create="addUser" @close="dialogVisible=false"
      />
    </ps-dialog>

    <user-list :users="users" @removeUser="removeUser"/>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import NewUserForm from "@/components/User/NewUserForm.vue";
import PsButton from "@/components/UI/PsButton.vue";
import axios from "axios";
import PsDialog from "@/components/UI/PsDialog.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

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
    };
  },

  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchUsers: "user/fetchUsers",
    }),

    async addUser(user) {
      //   this.users.push(user);


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
    // async fetchUsers() {
    //   try {
    //     const response = await axios.get("http://localhost:7000/users");
    //     this.users = response.data;
    //     console.log(response);
    //   } catch (error) {
    //     alert("Ошибка");
    //   }
    // },
  },

  mounted() {
    this.fetchUsers();
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
    ...mapGetters({}),
  },
};
</script>

<style lang="css" scoped>
</style>