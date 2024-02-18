<script setup>
</script>

<template>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Search User</RouterLink>
  <RouterView></RouterView>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #1c1a1d;
  color: #e5e5e5;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}
h1 {
  color: #f64348;
  margin: 1rem auto;
}
footer {
  height: 3rem;
  margin-top: 2rem;
  padding: 1rem 0;
}
a {
  color: #f64348;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
}
a + a {
  margin-left: 1rem;
}
a:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
nav {
  border-bottom: 1px solid #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
</style>