<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Bear Seat Manager',
  meta: [
    { name: 'description', content: 'Seat Manager for company Familie Bär' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/sweetalert2@11.3.0/dist/sweetalert2.min.css' },
  ],
})
</script>

<template>
  <router-view />
</template>
