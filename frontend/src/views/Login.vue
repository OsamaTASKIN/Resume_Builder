<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Log In</h2>
      <input v-model="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <input type="password" v-model="password" placeholder="Password" class="border p-2 w-full mb-2" />
      <button @click="login" class="bg-green-600 text-white px-4 py-2 rounded">Log In</button>
      <p class="text-green-600 mt-2">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        message: ""
      };
    },
    methods: {
      async login() {
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const data = await res.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          this.message = "Login successful! Welcome " + data.name;
        } else {
          this.message = data.message;
        }
      }
    }
  };
  </script>
  