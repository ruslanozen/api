<template>
  <div class="api">
    <h3>{{ api.API }}</h3>
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
</template>

<script>
export default {
  name: "api-component",
  props: "api",
};
</script>

<style></style>
