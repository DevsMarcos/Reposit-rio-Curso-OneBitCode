<script setup>
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';
import UserInfo from './UserInfo.vue';
import Reepository from './Repository.vue'
import Form from './Form.vue';

const searchInput = ref('')

const state = reactive({
  login: '',
  name: '',
  bio: '',
  company: '',
  avatar_url: '',
  repos:  [],
})

async function fetchGithubUser(searchInput) {
  ev.preventDefault()

  const res = await fetch(`https://api.github.com/users/${searchInput}`)
  const { login, name, bio, company, avatar_url } = await res.json()

  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.avatar_url = avatar_url
  state.repos = []

  fetchUserRepositores()
}

async function fetchUserRepositores(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await res.json()

  state.repos = repos


}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositórios públicos.`
    : `${state.name} não possui nenhum repositório público.`
})

</script>

<template>
  <h1>GitHub User Data</h1>
  <p>Pesquisando por: <strong>https://api.github.com/users/{{ username }}</strong></p>
    <Form @form-submit="fetchGithubUser" v-model="username"/>
    <UserInfo 
    v-if="state.login !== ''"
    :avatar_url="state.avatar_url" 
    :bio="state.bio" 
    :company="state.company" 
    :login="state.login" 
    :name="state.name"
    />
    
    <section v-if="state.repos.length > 0">
      <h2>{{ reposCountMessage }}</h2>
        <Reepository v-for="repo of state.repos" :description="repo.description" :full_name="repo.full_name" :html_url="repo.html_url"/>
    </section>
</template>

<style scoped>

a {
  color: #f64348;
}
</style>