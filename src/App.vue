<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
    <input type="text" v-model="name" />
    <a v-bind:href="url">link</a>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",

  data() {
    return {
      msg: "Hola mundo",
      name: "",
      url: "https://www.google.com",
    };
  },

  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./scss/main.scss";
</style>
