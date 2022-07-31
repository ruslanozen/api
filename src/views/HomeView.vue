<template>
  <div class="home">
    <div class="search">
      <input
        type="search"
        class="searchbar"
        placeholder="Type a keyword"
        v-model="keyword"
        @keydown.enter="printVal"
      />
    </div>
    <div class="container" v-for="api in filteredRes" :key="api">
      <div class="inner-wrapper">
        <h3>{{ api["API"] }}</h3>
        <hr />
        <div class="category">
          <label for="category">Category: </label>
          <span>{{ api.Category }}</span>
        </div>
        <div class="description">
          {{ api.Description }}
        </div>
        <div class="auth">
          <label for="auth">Authentification:</label>
          <span>
            {{ api.Auth }}
          </span>
        </div>
        <div class="security">
          <label for="protokol"> HTTPS: </label>
          <span>{{ api.HTTPS }}</span>
        </div>
        <div class="cors">
          <label for="cors"> Cors: </label>
          <span>{{ api.Cors }}</span>
        </div>
        <div class="url">
          <label for="url">URL:</label>
          <a :href="api.Link">{{ api.Link }}</a>
        </div>
      </div>
    </div>
    <div class="wrapper" v-if="filteredRes == 0">
      <div class="container" v-for="api in apis" :key="api">
        <div class="inner-wrapper">
          <h3>{{ api["API"] }}</h3>
          <hr />
          <div class="category">
            <label for="category">Category: </label>
            <span>{{ api.Category }}</span>
          </div>
          <div class="description">
            {{ api.Description }}
          </div>
          <div class="auth">
            <label for="auth">Authentification:</label>
            <span>
              {{ api.Auth }}
            </span>
          </div>
          <div class="security">
            <label for="protokol"> HTTPS: </label>
            <span>{{ api.HTTPS }}</span>
          </div>
          <div class="cors">
            <label for="cors"> Cors: </label>
            <span>{{ api.Cors }}</span>
          </div>
          <div class="url">
            <label for="url">URL:</label>
            <a :href="api.Link">{{ api.Link }}</a>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, useStore } from "vuex";
export default {
  name: "HomeView",
  methods: {
    ...mapActions({
      search: "searchApi",
      fetch: "fetchApis",
    }),
  },
  computed: {
    ...mapGetters(["apis", "filteredRes"]),
  },
  created() {
    this.search(this.keyword);
    this.fetch();
  },
  data() {
    const store = useStore();
    const keyword = ref("");
    const printVal = () => {
      store.dispatch("searchApi", {
        value: keyword.value,
      });
    };
    return {
      keyword,
      printVal,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  margin-top: 3rem;
  .search {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    .searchbar {
      padding: 0.3rem 1rem;
      margin-right: 2.5rem;
      border-radius: 10px;
      border: 1px solid #42b983;
      &:focus {
        outline: none;
        border: 2px solid tomato;
      }
    }
  }
  .container {
    margin-bottom: 5rem;
    .inner-wrapper {
      margin: 1rem 2rem;
      line-height: 25px;
      hr {
        border-radius: 50%;
        border-color: tomato;
      }
      .url {
        a {
          text-decoration: none;
          color: tomato;
          &:hover {
            color: #42b983;
            transition: 0.5s ease-in-out;
          }
        }
      }
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
