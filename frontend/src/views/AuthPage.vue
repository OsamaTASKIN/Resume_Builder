<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center">
      <div class="bg-gray-800 text-white p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-center">Welcome to ResumePlus</h2>
  
        <!-- Toggle Buttons -->
        <div class="flex justify-center gap-4 mb-6">
          <button @click="formType = 'signup'" :class="formType === 'signup' ? 'bg-blue-600' : 'bg-gray-700'" class="text-white px-4 py-2 rounded">Sign Up</button>
          <button @click="formType = 'login'" :class="formType === 'login' ? 'bg-green-600' : 'bg-gray-700'" class="text-white px-4 py-2 rounded">Login</button>
        </div>
  
        <!-- Sign Up Form -->
        <div v-if="formType === 'signup'">
          <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          <input v-model="password" type="password" placeholder="Password" class="w-full px-4 py-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          <button @click="signup" class="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Create Account</button>
        </div>
  
        <!-- Login Form -->
        <div v-else>
          <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          <input v-model="password" type="password" placeholder="Password" class="w-full px-4 py-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          <button @click="login" class="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Log In</button>
        </div>
  
        <p class="mt-4 text-center text-sm text-green-400">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { auth, db } from '../firebase'
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
  import { doc, setDoc } from 'firebase/firestore'
  
  // Reactive variables
  const email = ref('')
  const password = ref('')
  const message = ref('')
  const formType = ref('signup')
  const userEmail = ref(null)
  const router = useRouter()
  
  // Signup Function
  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
      const user = userCredential.user
      await setDoc(doc(db, 'users', user.uid), {
        email: email.value,
        createdAt: new Date()
      })
      message.value = 'Signup successful!'
      router.push('/')
    } catch (err) {
      message.value = err.code === 'auth/email-already-in-use'
        ? 'Email already registered. Try logging in.'
        : err.message
    }
  }
  
  // Login Function
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      message.value = 'Login successful!'
      router.push('/')
    } catch (err) {
      message.value = err.message
    }
  }
  
  // Track logged in user
  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      userEmail.value = user ? user.email : null
    })
  })
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  