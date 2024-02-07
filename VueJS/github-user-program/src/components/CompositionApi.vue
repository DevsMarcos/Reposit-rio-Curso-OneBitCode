<script setup>
import { reactive } from 'vue';

const state = reactive({
  login: 'johndoe',
  name: 'John Doe',
  bio: '...',
  company: 'Acme Inc.',
  avatar_url: 'https://unsplash.it/256',
  searchInput: ''
})

async function fetchGithubUser() {
  const res = await fetch(`https://api.github.com/users/${state.searchInput}`)
  const { login, name, bio, company, avatar_url } = await res.json()

  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.avatar_url = avatar_url
}
</script>

<template>
	<h1>GitHub User Data</h1>
  <input type="text" v-model="state.searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>
  <img v-bind:src="state.avatar_url">
  <strong>@{{ state.login }}</strong>
  <h2>{{ state.name }}</h2>
  <h3>{{ state.company }}</h3>
  <span>{{ state.bio }}</span>
</template>

<style scoped>

img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1, h2 {
  color: #f64348;
  margin: 1rem auto .25rem;
}

h3 {
  margin: 1rem auto .25rem;
}

span{
  display: block;
  margin: 1rem auto;
}

input,
button {
  max-width: 20rem;
  padding: .5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: .25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #f64348;
  border: unset;
  border-radius: .25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>