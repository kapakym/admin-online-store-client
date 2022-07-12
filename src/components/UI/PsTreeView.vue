<template>
  <div>
    <div class="item">
      <ps-tree-item
        :name="items.name"
        :isFolder="isFolder"
        :isOpen="isOpen"
        :isActive="isActive"
        @click-open="toggle"
        @click="showInfoCategory"
      />
    </div>

    <div v-if="isOpen">
      <ps-tree-view
        class="pstreenode"
        v-for="item in items.childrens"
        :items="item"
        :key="item.id"
        @show-dialog="showDialog"
        @info-category="infoCategory"
      ></ps-tree-view>
    </div>
  </div>
</template>

<script>
import PsButton from "./PsButton.vue";
import PsTreeItem from "./PsTreeItem.vue";

export default {
  components: { PsTreeItem, PsButton },
  name: "ps-tree-view",
  props: {
    items: {},
  },
  data() {
    return {
      isOpen: false,
      isActive: false,
    };
  },
  methods: {
    showInfoCategory() {
      this.isActive = true;
      this.$emit("info-category", this);
    },
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    showDialog(params) {
      this.$emit("show-dialog", params);
    },
    infoCategory(params) {
      this.$emit("info-category", params);
    },
  },
  computed: {
    isFolder() {
      if (this.items?.childrens.length) return true;
      else false;
    },
  },
};
</script>

<style lang="css" scoped>
.pstreenode {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

.addBtn:hover {
  background: lightgray;
  cursor: pointer;
}
.item {
  display: flex;
}
</style>