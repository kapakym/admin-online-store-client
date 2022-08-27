<template>
  <div v-if="users.length > 0">
    <h3>Список пользователей</h3>
    <user-item
        class="user-item"
        v-for="user in users"
        :key="user.id"
        :user="user"
        @removeUser="$emit('removeUser', user.id)"
    />
  </div>
  <h2 v-else style="color: red">
    Нет ниодного зарегистрированного пользователя
  </h2>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {UserItem},
  props: {
    users: Array,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.user-item {
  padding: 15px;
  /*border: 2px solid teal;*/
  margin-top: 5px;
  padding: 10px;
}
</style>