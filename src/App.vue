<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
    <p v-show="showValue">{{ value }}</p>
    <p v-if="showValue">{{ value }}</p>
    <p v-else>Else statement</p>

    <ul>
      <li :key="i" v-for="i in items">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",

  data() {
    return {
      msg: "Hola mundo",
      showValue: false,
      value: "Something",
      items: [1, 2, 3, 4, 5],
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
