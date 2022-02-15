<template>
  <section class="section main-section">
    <div class="card has-table">
      <header class="card-header">
        <p class="card-header-title">
          <span v-if="props.type === 'baby-seat'" class="icon"><i class="mdi mdi-baby"></i></span>
          <span v-if="props.type === 'following-seat'" class="icon"><i class="mdi mdi-seatbelt"></i></span>
          <span v-if="props.type === 'reboarder-seat'" class="icon"><i class="mdi mdi-car-child-seat"></i></span>
          {{ props.title }}
        </p>
        <!-- <router-link :to="`/rent/new/${props.type}`">
          <button class="card-header-icon">
            <span class="icon"><i class="mdi mdi-plus-box"></i></span>
          </button>
        </router-link> -->
      </header>
      <div class="card-content" style="padding-top:1rem;">
        <Scheduler :type="props.type" />
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ref as refFirebase, onValue } from 'firebase/database'
import { database } from '../modules/db'

const props = defineProps({
  type: String,
  title: String,
})

const seats = ref({})
const seatData = refFirebase(database, props.type)

onMounted(() => {
  onValue(seatData, (snapshot) => {
    seats.value = snapshot.val()
  })
})

</script>
