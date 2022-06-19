<template>
  <div>
    <div><strong>id </strong>{{ user.id }}</div>
    <div><strong>email </strong>{{ user.email }}</div>
    <div><strong>password </strong>{{ user.password }}</div>
    <div><strong>banned </strong>{{ user.statusBan }}</div>
    <div><strong>ban Reason </strong>{{ user.banReason }}</div>
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
});
</script>

<style scoped>
</style>