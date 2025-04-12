<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
    <input v-model="email" placeholder="Email" class="border p-2 mb-2 w-full" />
    <input type="password" v-model="password" placeholder="Password" class="border p-2 mb-2 w-full" />
    <button @click="signup" class="bg-green-600 text-white px-4 py-2 rounded">Create Account</button>
    <p class="mt-2 text-green-500">{{ message }}</p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async signup() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          email: this.email,
          createdAt: new Date()
        });

        await signOut(auth); // ❌ Sign out immediately after account creation
        this.message = "Account created successfully! Please log in.";

        this.$router.push("/auth"); // ✅ Redirect to login page
      } catch (error) {
        this.message = error.message;
      }
    }
  }
};

</script>
