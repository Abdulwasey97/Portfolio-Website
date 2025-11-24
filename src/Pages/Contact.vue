<template>
  <DefaultLayout>
    <section class="max-w-xl mx-auto py-16 px-6">
      <h2 class="text-3xl font-bold mb-6">Contact Me</h2>
      <form class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>
