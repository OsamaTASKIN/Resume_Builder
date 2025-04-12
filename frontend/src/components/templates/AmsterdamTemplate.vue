<template>
    <div class="bg-white text-gray-900 rounded-xl shadow-md max-w-4xl mx-auto p-8 font-sans leading-relaxed">
      <div class="border-b pb-4 mb-6">
        <h1 class="text-3xl font-bold text-blue-800">{{ data.name }}</h1>
        <p class="text-sm text-gray-700">{{ data.title }}</p>
        <p class="text-sm">{{ data.email }} | {{ data.phone }} | {{ data.address }}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Career Summary</h2>
        <p class="text-sm text-gray-800">{{ data.summary }}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Education</h2>
        <p class="text-sm text-gray-800">{{ data.education }}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Experience</h2>
        <p class="text-sm text-gray-800">{{ data.experience }}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Skills</h2>
        <ul class="list-disc pl-6 text-sm text-gray-800">
          <li v-for="(skill, index) in data.skills.split(',')" :key="index">{{ skill.trim() }}</li>
        </ul>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Certifications</h2>
        <p class="text-sm text-gray-800">{{ data.certifications }}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Languages</h2>
        <p class="text-sm text-gray-800">{{ data.languages }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    data: Object
  })
  </script>
  
  <style scoped>
  /* Optional: Additional modern styling */
  </style>
  