<template>
  <div class="tree_items" :class="{ bold: isFolder, active: isActive }">
    <span v-if="isFolder" @click="$emit('click-open')"
      >[{{ isOpen ? "-" : "+" }}]</span
    >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    isOpen: Boolean,
    isFolder: Boolean,
    isActive: Boolean,
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
  border-radius: 4px;
}

.bold {
  font-weight: bold;
}

.active {
  border: 1px dotted gray;
  border-radius: 4px;
}
</style>