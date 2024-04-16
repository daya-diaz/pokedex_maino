<template>
  <v-app>
    <Header></Header>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: linear-gradient(
    to bottom right,
    rgba(225, 255, 255, 1),
    rgba(245, 245, 245, 1)
  )
  no-repeat center center fixed !important;
  height: 100vh;
}
</style>
