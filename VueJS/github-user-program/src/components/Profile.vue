<script setup>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue';
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

async function fetchGithubUser(username) {

  const res = await fetch(`https://api.github.com/users/${username}`)
  const { login, name, bio, company, avatar_url } = await res.json()

  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.avatar_url = avatar_url
  state.repos = []

	fetchUserRepositories()
}

async function fetchUserRepositories() {
  const res = await fetch(`https://api.github.com/users/${state.login}/repos`)
  const repos = await res.json()
  state.repos = repos
}

const reposCountMethod = computed(() => {
  return state.repos.length > 0 
  ? `${state.name} possui ${state.repos.length} repositórios`
  : `${state.name} não possui respositórios públicos`
})

onMounted(() => {
  console.log("O componente foi montado.")
})

onUpdated(() => {
  console.log("O componente foi atualizado")
})

onUnmounted(() => {
  console.log("O componente foi desmontado")
})
</script>

<template>
  <h1>GitHub User Data</h1>
  <p>Pesquinsado por: <strong>https://api.github.com/user/{{ searchInput }}</strong></p>
  <Form @formSubmit="fetchGithubUser"/>
    <UserInfo 
    v-if="state.login"
    :login = "state.login" 
    :name = "state.name" 
    :company = "state.company"
    :bio = "state.bio"
    :avatar_url = "state.avatar_url"
    />
    
    <section v-if="state.repos.length > 0">
      <h2>{{ reposCountMethod }}</h2>
        <Repository v-for="repo of state.repos" :description="repo.description" :full_name="repo.full_name" :html_url="repo.html_url"/>
    </section>
</template>
