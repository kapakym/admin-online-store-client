<template>
  <div class="tree_items" :class="{ bold: isFolder }">
    <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span> {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    isOpen: Boolean,
    isFolder: Boolean,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.tree_items {
}

.tree_items:hover {
  background: lightgray;
  cursor: pointer;
}

.bold {
  font-weight: bold;
}
</style>