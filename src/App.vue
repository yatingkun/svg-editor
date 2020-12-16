<template>
  <div class="container-fluid" style="height: 100%">
    <header class="row"></header>
    <section class="row" id="main_body">
      <div id="left" class="col-2 "></div>
      <div id="main" class="col-8 "></div>
      <div id="right" class="col-2"></div>
    </section>
    <footer class="row"></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>

header {
  height: 10%;
}
#main_body {
  height: 80%;
}

#main {
    background: gray;
}
footer {
  height: 10%;

}
</style>
