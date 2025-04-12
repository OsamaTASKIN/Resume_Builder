<template>
  <div>
    <Navbar />
    <router-view /> <!-- renders the current route -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
