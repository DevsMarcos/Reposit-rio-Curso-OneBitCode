'<script setup>
import Profile from './components/Profile.vue';
import { ref } from 'vue';


const isOpen = ref(true)
</script>

<template>
  <input type="checkbox" v-model="isOpen"/> {{ isOpen }}
  <Profile v-if="isOpen"> 
    <h1>GitHub User Data</h1>

    <template v-slot:footer>
      Desenvolvido por <a href="https://github.com/DevsMarcos" target="_blank">Marcos Macêdo</a>
    </template>
  </Profile>
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
a {
  color: #f64348;
}
</style>