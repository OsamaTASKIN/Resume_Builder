<template>
  <div class="min-h-screen bg-gray-900 text-white font-inter">
    <!-- Navbar -->
    <Navbar />

    <!-- Template Selector -->
    <div class="max-w-screen-xl mx-auto px-6 pt-28 pb-6">
      <h2 class="text-2xl font-bold mb-4">Choose Your Template</h2>
      <div class="flex gap-4 overflow-x-auto">
        <button
          v-for="(template, index) in templates"
          :key="index"
          @click="selectedTemplate = index"
          :class="['px-4 py-2 rounded-lg border', selectedTemplate === index ? 'bg-blue-600' : 'bg-gray-700']"
        >
          {{ template.name }}
        </button>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto px-6 grid md:grid-cols-5 gap-8">
      <!-- Tracker -->
      <div class="hidden md:block col-span-1 space-y-4 pt-10">
        <div
          v-for="(q, i) in questions"
          :key="i"
          :class="[
            'px-4 py-2 rounded-lg border text-sm',
            currentStep === i ? 'bg-blue-500 border-blue-400' : 'bg-gray-700 border-gray-600'
          ]"
        >
          Step {{ i + 1 }}: {{ q.label }}
        </div>
      </div>

      <!-- Question Form -->
      <div class="col-span-5 md:col-span-4">
        <div class="bg-gray-800 p-6 rounded-xl">
          <h2 class="text-xl font-bold mb-4">{{ questions[currentStep].label }}</h2>
          <input
            v-model="formData[questions[currentStep].key]"
            type="text"
            class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none mb-6"
            :placeholder="questions[currentStep].placeholder"
          />

          <div class="flex justify-between">
            <button
              @click="prevStep"
              :disabled="currentStep === 0"
              class="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 disabled:opacity-50"
            >
              Previous
            </button>

            <button
              v-if="currentStep < questions.length - 1"
              @click="nextStep"
              class="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
            >
              Next
            </button>
            <button
              v-else
              @click="generateResume"
              class="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600"
            >
              Generate Resume
            </button>
          </div>
        </div>

        <!-- Resume Preview & Download -->
        <div v-if="showResume" class="mt-10">
          <h2 class="text-2xl font-bold mb-4">Your Resume Preview</h2>
          <div ref="resumeContent">
            <component :is="selectedTemplateComponent" :data="formData" />
          </div>
          <button
            @click="downloadPDF"
            class="mt-4 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import html2pdf from 'html2pdf.js'
import Navbar from '../components/Navbar.vue'
import TemplateModern from '../components/templates/TemplateModern.vue'
import AmsterdamTemplate from '../components/templates/AmsterdamTemplate.vue'
import ResumePreview from '../components/templates/ResumePreview.vue'


const questions = [
  { label: 'Your Full Name', key: 'name', placeholder: 'John Doe' },
  { label: 'Email Address', key: 'email', placeholder: 'john@example.com' },
  { label: 'Phone Number', key: 'phone', placeholder: '+1234567890' },
  { label: 'Address', key: 'address', placeholder: 'City, Country' },
  { label: 'Education', key: 'education', placeholder: 'University name, Degree' },
  { label: 'Work Experience', key: 'experience', placeholder: 'Company, Role, Duration' },
  { label: 'Skills', key: 'skills', placeholder: 'List your skills' },
  { label: 'Certifications', key: 'certifications', placeholder: 'Courses, Certifications' },
  { label: 'Languages', key: 'languages', placeholder: 'English, Arabic, etc.' },
  { label: 'Career Summary', key: 'summary', placeholder: 'Short summary about you' },
]

const templates = ref([
  { name: 'Modern', component: TemplateModern },
  { name: 'Amsterdam', component: AmsterdamTemplate },
])




const formData = ref({})
const currentStep = ref(0)
const selectedTemplate = ref(0)
const showResume = ref(false)
const resumeContent = ref(null)

const nextStep = () => {
  if (currentStep.value < questions.length - 1) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}
const generateResume = () => {
  showResume.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const downloadPDF = () => {
  const opt = {
    margin: 0.5,
    filename: `${formData.value.name || 'resume'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }
  html2pdf().from(resumeContent.value).set(opt).save()
}

const selectedTemplateComponent = computed(() => templates.value[selectedTemplate.value].component)
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>