<template>
  <v-app>
    <Header></Header>
    <MainComponent />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: "App",
  components: {
    Header,
    MainComponent
  },
};
</script>

<style>
#app {
  position: relative;

  -webkit-font-smoothing: antialiased;
  background: linear-gradient(to bottom right,
      rgb(231, 254, 254),
      rgba(245, 245, 245, 1)) no-repeat center center fixed !important;
  min-height: 100vh;
  height: 100%;
}
</style>
