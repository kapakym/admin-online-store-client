<template>
  <div class="container">
    <div class="errorpage">
      <h1>
        <ps-icon :name="'error'" style="color: red"/>
        Произошла ошибка!
        <ps-icon :name="'error'" style="color: red"/>
      </h1>
      <h2>{{ $route.params.msg }}</h2>
      <ps-group-buttons>
        <ps-button @click="$router.back()">
          <ps-icon :name="'arrow_back'"/>
          Назад
        </ps-button>
      </ps-group-buttons>
    </div>

  </div>


</template>

<script>
import PsIcon from "@/components/UI/PsIcon";
import PsButton from "@/components/UI/PsButton";

export default {
  name: "Error",
  components: {PsButton, PsIcon}
}
</script>

<style scoped>
.errorpage {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 30%;
  border: 4px solid red;
  /*justify-content: center;*/
  align-items: center;
  /*align-content: center;*/
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
</style>