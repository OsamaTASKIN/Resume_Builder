<template>
  <div class="bg-white text-black p-10 rounded-lg shadow-lg font-sans leading-relaxed max-w-3xl mx-auto">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-gray-900">{{ data.name }}</h1>
    <p class="text-sm text-gray-600">{{ data.email }} | {{ data.phone }} | {{ data.address }}</p>

    <!-- Summary -->
    <div v-if="data.summary" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Professional Summary</h2>
      <p class="text-gray-800 whitespace-pre-line">{{ data.summary }}</p>
    </div>

    <!-- Education -->
    <div v-if="data.education" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Education</h2>
      <p class="text-gray-800 whitespace-pre-line">{{ data.education }}</p>
    </div>

    <!-- Experience -->
    <div v-if="data.experience" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Work Experience</h2>
      <p class="text-gray-800 whitespace-pre-line">{{ data.experience }}</p>
    </div>

    <!-- Skills -->
    <div v-if="data.skills" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Skills</h2>
      <ul class="list-disc list-inside text-gray-800">
        <li v-for="(skill, i) in data.skills.split('\\n')" :key="'skill-' + i">{{ skill.trim() }}</li>
      </ul>
    </div>

    <!-- Certifications -->
    <div v-if="data.certifications" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Certifications</h2>
      <ul class="list-disc list-inside text-gray-800">
        <li v-for="(cert, i) in data.certifications.split('\\n')" :key="'cert-' + i">{{ cert.trim() }}</li>
      </ul>
    </div>

    <!-- Languages -->
    <div v-if="data.languages" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Languages</h2>
      <ul class="list-disc list-inside text-gray-800">
        <li v-for="(lang, i) in data.languages.split('\\n')" :key="'lang-' + i">{{ lang.trim() }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.font-sans {
  font-family: 'Segoe UI', sans-serif;
}
</style>
