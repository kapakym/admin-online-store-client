<template lang="">
  <div>Производитель</div>
</template>
<script>
import apiGetBrand from "@/api/apiGetBrand.ts";
export default {
  setup(props) {
    const responseBrand = apiGetBrand();
    return responseBrand;
  },
};
</script>
<style lang=""></style>
