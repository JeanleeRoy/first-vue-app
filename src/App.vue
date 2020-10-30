<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
    <input type="text" v-model="name" />
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
      thi.formatname = this.name.
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
