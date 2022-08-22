<template>
  <div class="pspaginator">
    <ps-button class="pgbutton">
      <ps-icon :name="'keyboard_double_arrow_left'" @click="returnPage(1)"/>
    </ps-button>
    <ps-button class="pgbutton">
      <ps-icon :name="'arrow_back'" @click="returnPage(currentPage-1)"/>
    </ps-button>
    <ps-button class="pgbutton" v-for="n in totalPages" :class="{active: n==currentPage? true :false }"
               @click="returnPage(n)">{{
        n
      }}
    </ps-button>
    <ps-button class="pgbutton" @click="returnPage(currentPage+1)">
      <ps-icon :name="'arrow_forward'"/>
    </ps-button>
    <ps-button class="pgbutton">
      <ps-icon :name="'keyboard_double_arrow_right'" @click="returnPage(totalPages)"/>
    </ps-button>
  </div>
</template>

<script>
import PsIcon from "@/components/UI/PsIcon";

export default {
  name: "PsPaginator",
  components: {PsIcon},
  props: {
    totalPages: Number,
    currentPage: Number
  },
  methods: {
    returnPage(n) {
      if (n < 1) n = 1;
      if (n > this.totalPages) n = this.totalPages
      this.$emit("changePage", n);
    }
  }
}
</script>

<style scoped>
.pspaginator {
  display: flex;
  /*padding: 10px;*/
  margin: 5px;
  justify-content: center;
  box-shadow: 1px 1px 5px;
  border-radius: 5px;
}

.pgbutton {
  box-shadow: 0 0 0;
}
</style>