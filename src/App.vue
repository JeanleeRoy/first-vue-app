<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
    <input type="text" v-model="name" />
    <button v-on:click="format">format</button>

    <p>{{ formatname }}</p>
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
      formatname: "",
    };
  },

  methods: {
    format() {
      this.formatname = this.name
        .split(" ")
        .join("-")
        .toUpperCase();
    },
  },

  computed: {},

  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./scss/main.scss";
</style>
