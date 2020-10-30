<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
    <input type="text" v-model="name" />
    <input type="text" v-model="lastname" />

    <p>{{ fullname }}</p>
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
      lastname: "",
    };
  },

  computed: {
    fullname() {
      return `${this.name} ${this.lastname}`;
    },
  },

  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./scss/main.scss";
</style>
