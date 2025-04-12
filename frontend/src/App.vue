<template>
  <div>
    <Navbar />
    <router-view /> <!-- This is where Home.vue or other pages will load -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
