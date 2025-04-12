<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 font-inter">
    <div class="max-w-3xl w-full">
      <h1 class="text-3xl font-bold mb-6 text-center">Basic Content Correction</h1>

      <textarea
        v-model="inputText"
        placeholder="Paste your content here..."
        rows="8"
        class="w-full bg-gray-800 border border-gray-600 p-4 rounded-lg focus:outline-none text-white resize-none"
      ></textarea>

      <button
        @click="fixText"
        class="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium block mx-auto"
      >
        Fix Content
      </button>

      <div v-if="correctedText" class="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h2 class="text-xl font-semibold mb-2">Corrected Content:</h2>
        <p class="text-gray-300 whitespace-pre-wrap">{{ correctedText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const correctedText = ref('')

const fixText = () => {
  if (!inputText.value) {
    correctedText.value = ''
    return
  }

  let text = inputText.value

  // Remove extra spaces
  text = text.replace(/\s+/g, ' ').trim()

  // Fix spacing around punctuation
  text = text.replace(/\s+([,.!?])/g, '$1')

  // Capitalize the first letter of each sentence
  text = text.replace(/(^\w{1}|\.\s*\w{1})/g, match => match.toUpperCase())

  // Add period if missing at end
  if (!/[.!?]$/.test(text)) {
    text += '.'
  }

  correctedText.value = text
}
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
