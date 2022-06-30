<template>
  <div>
    <div class="item">
      <ps-tree-item
        :name="name"
        :isFolder="isFolder"
        :isOpen="isOpen"
        @click="toggle"
      />
    </div>

    <div v-if="isOpen">
      <ps-tree-view
        class="pstreenode"
        v-for="item in childrens"
        :key="item.id"
        :name="item.name"
        :childrens="item.childrens"
        :picture="item.picture"
        :id="item.id"
        :parentId="id"
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
    id: Number,
    name: String,
    childrens: Array,
    picture: String,
    parentId: Number,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
      console.log(this.picture);
      // if (!this.picture) this.picture = "notpicture.png";
      console.log("ssss", this.childrens);
      this.$emit("info-category", {
        id: this.id,
        name: this.name,
        picture: !this.picture ? "notpicture.png" : this.picture,
        parentId: this.parentId,
        childrens: this.childrens,
      });
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
      if (this?.childrens?.length) return true;
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