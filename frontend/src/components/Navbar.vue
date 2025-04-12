<template>
  <nav class="w-full bg-gray-900 border-b border-gray-800 fixed z-50">
    <div class="container max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <i class="fas fa-file-lines text-blue-500 text-2xl"></i>
        <span class="ml-2 text-xl font-bold text-white">ResumePlus</span>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <router-link to="/" class="text-white hover:text-blue-500">Home</router-link>
<router-link to="/builder" class="text-white hover:text-blue-500">Resume</router-link>
<router-link to="/correction" class="text-white hover:text-blue-500">Content Correction</router-link>
<a href="#" class="text-white hover:text-blue-500">Contact Us</a>


        <div v-if="userEmail" class="flex items-center space-x-4">
          <span class="text-sm text-white">Welcome, {{ userEmail }}</span>
          <button @click="logout" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white">Logout</button>
        </div>

        <router-link
          v-else
          to="/auth"
          class="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white text-center"
        >
          Sign In
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'

const router = useRouter()
const userEmail = ref(null)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    userEmail.value = user ? user.email : null
  })
})

const logout = async () => {
  await signOut(auth)
  userEmail.value = null
  router.push('/auth')
}
</script>
