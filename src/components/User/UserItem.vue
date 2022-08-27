<template>
  <div class="useritem">
    <div class="usercol"><strong>email </strong>{{ user.email }}</div>
    <div class="usercol"><strong>Заблокирован </strong>{{ user.statusBan }}</div>
    <div class="usercol"><strong>Причина блокировки </strong>{{ user.banReason }}</div>
    <div class="usercol">
      <strong>Roles </strong>
      <div v-for="role in user.roles" :key="role">{{ role.value }}</div>
    </div>
    <ps-group-buttons>
      <ps-button>
        <ps-icon name="message"/>

      </ps-button>
      <ps-button>
        <ps-icon name="edit"/>

      </ps-button>
      <ps-button @click="removeUser">
        <ps-icon name="delete" style="color: red"/>

      </ps-button>

      <ps-button @click="getPage">
        <ps-icon name="block" style="color: red"/>
      </ps-button>
    </ps-group-buttons>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import PsGroupButtons from "@/components/UI/PsGroupButtons.vue";
import PsIcon from "@/components/UI/PsIcon.vue";
import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";
import {mapActions} from "vuex";

export default defineComponent({
  components: {PsIcon, PsGroupButtons},
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      userRemove: "user/userRemove"
    }),
    async removeUser() {

      this.$popup(`Вы действительно хотите удалить пользователя (${this.user.email})`, async () => {
        await this.userRemove({id: this.user.id}, () => {
        })
      });
    },
    async getPage() {
      const result = await apiGetUsersByPage(1, 10);
      console.log(result.value)
    }
  },
  setup() {
    return {};
  },

  mounted() {
    // console.log(this.user);
  },
});
</script>

<style scoped>
.useritem {
  display: flex;
  /*width: 100%;*/
  /*flex-direction: column;*/
  text-align: left;
  box-shadow: 1px 1px 5px;
  margin: 5px;
  border-radius: 5px;
}

.useritem:hover {
  background: lightgoldenrodyellow;
}

.usercol {
  /*display: flex;*/
  margin: 5px;
  padding: 5px;
  border-right: 1px solid teal;
  width: 30%;
}
</style>