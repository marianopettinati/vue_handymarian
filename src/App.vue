<template>
  <nav id="gen-nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'colors' }">Color tests</router-link>
    <router-link :to="{ name: 'products' }">Products Sample</router-link>
    <router-link :to="{ name: 'admin' }">Admin</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#gen-nav {
  padding: 10px 5%;
  background: #dcd7c9;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 2px 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: #556052;
}
</style>
