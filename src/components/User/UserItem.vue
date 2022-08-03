<template>
  <div>
    <div><strong>email </strong>{{ user.email }}</div>
    <div><strong>Заблокирован</strong>{{ user.statusBan }}</div>
    <div><strong>Причина блокировки</strong>{{ user.banReason }}</div>
    <div>
      <strong>Roles </strong>
      <div v-for="role in user.roles" :key="role">{{ role.value }}</div>
    </div>
    <ps-group-buttons>
      <ps-button @click="$emit('removeUser', user.id)">
        <ps-icon :name="'delete'" style="color: red"/>
        Удалить
      </ps-button>
      <ps-button>
        <ps-icon :name="'message'"/>
        Отправить сообщение
      </ps-button>
      <ps-button>
        <ps-icon :name="'block'" style="color: red"/>
        Заблокировать
      </ps-button>
    </ps-group-buttons>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PsGroupButtons from "@/components/UI/PsGroupButtons.vue";
import PsIcon from "@/components/UI/PsIcon.vue";

export default defineComponent({
  components: {PsIcon, PsGroupButtons},
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeUser() {
      this.$emit("removeUser", this.user.id);
    },
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
</style>