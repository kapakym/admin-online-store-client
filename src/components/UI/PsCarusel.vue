<template>
  <div class="caruselcontainer">
    <ps-button @click="prev">
      <ps-icon name="arrow_back"/>
    </ps-button>
    <div v-for="(item,index) of modelValue" class="container">
      <div v-if="indexPic-2<index && index<indexPic+2" class="container2">

        <label>{{ index }}</label>
        <img :key="index" :src="server_url+item"
             class="picture">
        <ps-button @click="$emit('deletePhoto', item)">
          <ps-icon name="delete" style="color:red"/>
        </ps-button>
      </div>

    </div>
    <ps-button @click="next">
      <ps-icon name="arrow_forward"/>
    </ps-button>
  </div>
</template>

<script>
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import serverMixin from "@/mixins/serverMixin";

export default {
  name: "PsCarusel",
  components: {PsIcon, PsButton},
  mixins: [serverMixin],
  props: {
    modelValue: Object
  },
  methods: {
    deletePic(index) {
      console.log(index)
    },
    prev() {
      this.indexPic -= 1;
      if (this.indexPic < 0) this.indexPic = 0;
    },
    next() {
      this.indexPic += 1;
      if (this.indexPic > this.modelValue.length - 1) this.indexPic = this.modelValue.length - 1;
    }
  },
  data() {
    return {
      showPic: [],
      indexPic: 0
    }
  }
}
</script>

<style scoped>
.caruselcontainer {
  display: flex;
  align-items: center;
  align-content: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  flex-direction: column;
}

.picture {
  width: 150px;
}

.container2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  box-shadow: 0 0 5px black;
  padding: 5px;
  border-radius: 5px;
}
</style>