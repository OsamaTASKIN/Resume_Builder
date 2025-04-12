<template>
  <div class="bg-white text-black p-10 rounded-lg shadow-lg font-sans leading-relaxed max-w-3xl mx-auto" ref="resumeContent">
    <h1 class="text-3xl font-bold text-gray-900">{{ data.name }}</h1>
    <p class="text-sm text-gray-600">{{ data.email }} | {{ data.phone }} | {{ data.address }}</p>

    <div v-if="data.summary" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Professional Summary</h2>
      <p v-html="formatMultiline(data.summary)"></p>
    </div>

    <div v-if="data.education" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Education</h2>
      <p v-html="formatMultiline(data.education)"></p>
    </div>

    <div v-if="data.experience" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Work Experience</h2>
      <p v-html="formatMultiline(data.experience)"></p>
    </div>

    <div v-if="data.skills" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Skills</h2>
      <ul class="list-disc list-inside">
        <li v-for="(skill, i) in data.skills.split('\\n')" :key="i">{{ skill.trim() }}</li>
      </ul>
    </div>

    <div v-if="data.certifications" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Certifications</h2>
      <ul class="list-disc list-inside">
        <li v-for="(cert, i) in data.certifications.split('\\n')" :key="'cert-' + i">{{ cert.trim() }}</li>
      </ul>
    </div>

    <div v-if="data.languages" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Languages</h2>
      <ul class="list-disc list-inside">
        <li v-for="(lang, i) in data.languages.split('\\n')" :key="'lang-' + i">{{ lang.trim() }}</li>
      </ul>
    </div>
  </div>

  <!-- Download Button -->
  <div class="text-center my-6">
    <button @click="downloadPDF" class="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
      Download PDF
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

defineProps({ data: Object })

const resumeContent = ref(null)

const formatMultiline = (text) => {
  return text
    ? text
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .join('<br>')
    : ''
}

const downloadPDF = () => {
  const opt = {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  html2pdf().from(resumeContent.value).set(opt).save()
}
</script>

<style scoped>
.font-sans {
  font-family: 'Segoe UI', sans-serif;
}
button {
  transition: all 0.3s ease;
}
</style>
