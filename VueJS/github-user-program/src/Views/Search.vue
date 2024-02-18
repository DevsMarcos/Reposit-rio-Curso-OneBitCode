<script setup>
import Profile from '../components/Profile.vue';
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