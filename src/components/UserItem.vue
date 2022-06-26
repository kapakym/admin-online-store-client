<template>
  <div>
    <div><strong>email </strong>{{ user.email }}</div>
    <div><strong>Заблокирован</strong>{{ user.statusBan }}</div>
    <div><strong>Причина блокировки</strong>{{ user.banReason }}</div>
    <div>
      <strong>Roles </strong>
      <div v-for="role in user.roles" :key="role">{{ role.value }}</div>
    </div>
    <div>
      <ps-button @click="$emit('removeUser', user.id)">Удалить</ps-button>
      <ps-button>Отправить сообщение</ps-button>
      <ps-button>Заблокировать</ps-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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