<template>
    <div class="min-h-screen bg-gray-900 text-white font-inter px-6 py-20 flex flex-col items-center">
      <div class="max-w-2xl w-full bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>
  
        <form @submit.prevent="submitForm" class="space-y-4">
          <input
            type="text"
            v-model="name"
            placeholder="Your Name"
            class="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none"
            required
          />
  
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none"
            required
          />
  
          <textarea
            v-model="message"
            placeholder="Your Message"
            rows="5"
            class="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none resize-none"
            required
          ></textarea>
  
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Send Message
          </button>
        </form>
  
        <p v-if="successMessage" class="text-green-400 mt-4 text-center">
          {{ successMessage }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const successMessage = ref('')
  
  const submitForm = () => {
    // Simulate sending message
    successMessage.value = '✅ Your message has been sent!'
    setTimeout(() => {
      name.value = ''
      email.value = ''
      message.value = ''
      successMessage.value = ''
    }, 3000)
  }
  </script>
  
  <style scoped>
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
  </style>
  