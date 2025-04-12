<template>
  <div class="bg-gray-900 text-white font-inter">
   

    <!-- Header Section -->
    <section class="pt-28 pb-20 w-full text-center">
      <div class="container max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold">
            Create Professional Resumes in Minutes
          </h1>
          <p class="text-gray-400">
            Build your perfect resume with our easy-to-use builder. Stand out and land your dream job.
          </p>
          <router-link to="/builder">
            <button class="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium">
              Let's Get Started
            </button>
          </router-link>
        </div>
        <div class="text-center">
          <img
            class="rounded-xl shadow-lg"
            src="https://img.freepik.com/free-vector/elegant-resume-template_1435-1245.jpg"
            alt="resume illustration"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-800 w-full">
      <div class="container max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-10">Powerful Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-700 p-8 rounded-xl">
            <i class="fas fa-pen-to-square text-blue-500 text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Resume Building</h3>
            <p class="text-gray-400">Professional templates and easy customization options.</p>
          </div>
          <div class="bg-gray-700 p-8 rounded-xl">
            <i class="fas fa-spell-check text-blue-500 text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Content Correction</h3>
            <p class="text-gray-400">AI-powered suggestions and grammar checks.</p>
          </div>
          <div class="bg-gray-700 p-8 rounded-xl">
            <i class="fas fa-palette text-blue-500 text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Professional Themes</h3>
            <p class="text-gray-400">Customize your resume's look and feel.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Correction Section -->
    <section class="py-20 w-full">
      <div class="container max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold">Perfect Your Content</h2>
          <p class="text-gray-400">
            Get error-free, professionally written resumes with our AI-powered content correction tools.
          </p>
          <button class="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium">
            Let's Get Started
          </button>
        </div>
        <div class="text-center">
          <img
            class="rounded-xl shadow-lg"
            src="https://img.freepik.com/free-photo/product-design-drawing-website-graphic_53876-95888.jpg"
            alt="content correction illustration"
          />
        </div>
      </div>
    </section>

    <!-- Subscription Section -->
 <!-- Subscription Section -->
<section class="py-20 bg-gray-800 w-full text-center">
  <div class="container max-w-screen-xl mx-auto px-6">
    <h2 class="text-3xl font-bold mb-4">Weekly Resume Tips</h2>
    <p class="text-gray-400 mb-6">Get expert resume advice delivered to your inbox every week.</p>
    <div class="flex flex-col md:flex-row max-w-md mx-auto">
      <input
        type="email"
        v-model="subscriberEmail"
        placeholder="Enter your email"
        class="px-6 py-3 rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-gray-700 border border-gray-600 focus:outline-none"
      />
      <button
        @click="sendEmail"
        class="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
      >
        Subscribe
      </button>
    </div>
    <p class="mt-4 text-green-400 text-sm">{{ message }}</p>
  </div>
</section>



    <!-- Footer -->
    <footer class="bg-gray-800 w-full py-10">
      <div class="container max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-400">
        <div>
          <h4 class="font-bold text-white mb-4">ResumePlus</h4>
          <p>Create professional resumes that get you hired.</p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Product</h4>
          <ul class="space-y-2">
            <li>Features</li>
            <li>Templates</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Company</h4>
          <ul class="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Legal</h4>
          <ul class="space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div class="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        &copy; 2025 ResumePlus. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'

const router = useRouter()

// 🌐 Auth
const userEmail = ref(null)

// 📨 Newsletter
const message = ref('')
const subscriberEmail = ref('')

const sendEmail = () => {
  if (!subscriberEmail.value) return

  emailjs.send(
  'service_ciqu6q9',
  'template_cjoy654',
  { user_email: subscriberEmail.value },
  'DSAuhoJfvHb-Evnyb'
)

    .then(() => {
      message.value = '✅ Tips sent to your inbox!'
      subscriberEmail.value = ''
    })
    .catch(() => {
      message.value = '❌ Something went wrong. Try again.'
    })
}

// 🔐 Monitor login state
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    userEmail.value = user ? user.email : null
  })
})

// 🚪 Logout handler
const logout = async () => {
  await signOut(auth)
  userEmail.value = null
  router.push('/auth')
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

</style>





