<script setup lang="ts">
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <form class="w-full md:w-1/3 bg-true-gray-100 dark:bg-white rounded-lg">
      <div class="flex font-bold justify-center mt-6">
        <img
          class="h-20 w-20"
          src="/img/bear-face.png"
        >
      </div>
      <h2 class="text-3xl text-center text-gray-700 mb-4">
        Bear Seat manager
      </h2>
      <div class="px-12 pb-10">
        <div class="w-full mb-2">
          <input
            type="text"
            placeholder="E-Mail Adresse"
            class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-50 py-2 mt-4 rounded-full focus:outline-none bg-bearpink hover:bg-bearpinkdark text-white"
          >
            Passwort zurücksetzen
          </button>
        </div>
        <div class="mt-4">
          <a href="/" class="text-xs text-gray-500 mb-4">Zum Login</a>
        </div>
      </div>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
