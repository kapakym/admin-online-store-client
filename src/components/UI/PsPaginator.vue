<template>
  <div class="pspaginator">
    <ps-button v-if="currentPage>1">
      <ps-icon :name="'arrow_back'" @click="returnPage(currentPage-1)"/>
    </ps-button>
    <ps-button v-for="n in totalPages" :class="{active: n==currentPage? true :false }" @click="returnPage(n)">{{
        n
      }}
    </ps-button>
    <ps-button v-if="currentPage<totalPages" @click="returnPage(currentPage+1)">
      <ps-icon :name="'arrow_forward'"/>
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
      console.log(n)
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
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  justify-content: center;
}
</style>