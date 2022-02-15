<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ref as refFirebase, onValue } from 'firebase/database'
import { database } from '../../modules/db'

const props = defineProps<{ seatindex: string }>()

const seat = ref({})
const seatData = refFirebase(database, `following-seat/${props.seatindex}`)

onMounted(() => {
  onValue(seatData, (snapshot) => {
    seat.value = snapshot.val()
  })
})
</script>

<template>
  <SeatDetails :seat="seat" />
</template>
