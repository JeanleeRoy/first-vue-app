<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-large"
                type="text"
                placeholder="Search music"
                v-model="searchQuery"
              />
            </div>
            <div class="control">
              <a class="button is-info is-large" v-on:click="search">Buscar</a>
              <a class="button is-danger is-large" v-on:click="search"
                >&times;
              </a>
              <p>
                <small>{{ searchMsg }} </small>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="columns">
          <div class="column" :key="i.name" v-for="i in tracks">
            {{ i.name }} - {{ i.artist }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: "No time to die", artist: "Billie Eilish" },
  { name: "Billie Jeans", artist: "Michael Jackson" },
];

export default {
  name: "App",

  data() {
    return {
      searchQuery: "",
      tracks: [],
    };
  },

  methods: {
    search() {
      this.tracks = tracks;
    },
  },

  computed: {
    searchMsg() {
      return `Se encontraron ${this.tracks.length} canciones`;
    },
  },

  components: {},
};
</script>

<style></style>
