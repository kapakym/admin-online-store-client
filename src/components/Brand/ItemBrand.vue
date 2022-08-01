<template>
  <div class="itembrand">
    <div>
      <img :src="server_url+brand.picture" class="picturebrand">
    </div>
    <div style="width: 60%">
      <ps-input v-model="brand.name" class="width: 100%"/>
    </div>
    <div>
      <ps-group-buttons>
        <ps-button @click="deleteItem"><i class="material-icons">delete</i> Удалить</ps-button>
        <ps-button @click="changeLogo"><i class="material-icons">
          add_photo_alternate
        </i> Изменить логотип
        </ps-button>
        <ps-button @click="updateBrand"><i class="material-icons">delete</i> Сохранить</ps-button>
      </ps-group-buttons>

    </div>
  </div>
</template>

<script>
import serverMixin from "@/mixins/serverMixin";
import PsButton from "@/components/UI/PsButton";
import PsInput from "@/components/UI/PsInput";
import apiDeleteBrand from "@/api/apiDeleteBrand";
import apiUpdateBrand from "@/api/apiUpdateBrand";
import PsGroupButtons from "@/components/UI/PsGroupButtons";

export default {
  name: "ItemBrand",
  components: {PsGroupButtons, PsInput, PsButton},
  mixins: [serverMixin],
  props: {
    brand: {}
  },
  methods: {
    async deleteItem() {
      this.$popup("Вы действиетльно хотите удалить " + this.brand.name + " ?", async () => {
        const result = await apiDeleteBrand(this.brand.id);
        this.$emit("refresh");
      })
    },
    changeLogo() {
      this.$emit("changeLogo", this.brand);
    },
    async updateBrand() {
      // console.log(this.$toast("Hello"))
      console.log("start")
      this.$popup("Вы действиетльно хотите изменить " + this.brand.name + " ?", async () => {
        const result = await apiUpdateBrand({id: this.brand.id, name: this.brand.name})
      })

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