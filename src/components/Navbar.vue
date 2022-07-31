<template>
  <nav class="navbar">
    <div class="wrapper">
      <h1 class="logo">Logo</h1>
      <ul class="nav-menu">
        <li class="menu-item">
          <router-link to="/">Public API's</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  box-shadow: 0 0 10px 1px gray;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin-inline: auto;
    .logo {
      margin-left: 1rem;
    }
    .nav-menu {
      margin-right: 1rem;
    }
  }
}
</style>
