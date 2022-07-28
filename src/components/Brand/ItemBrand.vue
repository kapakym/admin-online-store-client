<template>
  <div class="itembrand">
    <div>
      <img :src="server_url+brand.picture" class="picturebrand">
    </div>
    <div style="width: 60%">
      <ps-input v-model="brand.name" class="width: 100%"/>
    </div>
    <div>
      <ps-button @click="deleteItem">Удалить</ps-button>
      <ps-button>Изменить логотип</ps-button>
      <ps-button>Сохранить</ps-button>
    </div>
  </div>
</template>

<script>
import serverMixin from "@/mixins/serverMixin";
import PsButton from "@/components/UI/PsButton";
import PsInput from "@/components/UI/PsInput";
import apiDeleteBrand from "@/api/apiDeleteBrand";

export default {
  name: "ItemBrand",
  components: {PsInput, PsButton},
  mixins: [serverMixin],
  props: {
    brand: {}
  },
  methods: {
    async deleteItem() {
      console.log(this.brand.id)
      const result = await apiDeleteBrand(this.brand.id);
      this.$emit("refresh");
      console.log(result)
    }
  }
}
</script>


<style scoped>
.itembrand {
  display: flex;
  width: 95%;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: space-around;
}

.picturebrand {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
}

.picturebrand {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
}
</style>