<template>
  <div class="w-full">
    <div class="flex flex-col mb-4">
      <label class="mb-1">Seriennummer</label>
      <input v-model="seatData.serialNumber" type="text" aria-label="Seriennummer" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Name</label>
      <input v-model="seatData.name" type="text" aria-label="Name" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Produktionsdatum</label>
      <input v-model="seatData.productionDate" type="date" aria-label="Produktionsdatum" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Farbe</label>
      <input v-model="seatData.color" type="text" aria-label="Farbe" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Flugzulassung</label>
      <input v-model="seatData.allowedonplain" type="checkbox" aria-label="Farbe" />
    </div>
    <div class="flex flex-col">
      <label>Bemerkung</label>
      <textarea v-model="seatData.note" aria-label="Bemerkung" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Beginn Vermietung</label>
      <input v-model="seatData.rentstart" type="date" aria-label="Beginn der Vermietung" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Ende Vermietung</label>
      <input v-model="seatData.rentend" type="date" aria-label="Ende der Vermietung" />
    </div>
  </div>
  <div class="mt-5 text-center">
    <button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" @click="saveSeat">
      Speichern
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref as refFirebase, set } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import { database } from '../modules/db'

const props = defineProps({
  seat: Object,
})

const emit = defineEmits(['close'])

const seatData = computed(() => { return props.seat })

async function saveSeat() {
  if (seatData.value.index === undefined) {
    seatData.value.index = uuidv4()
    seatData.value.created = dayjs().format('DD.MM.YYYY HH:mm:ss')
  }
  seatData.value.updated = dayjs().format('DD.MM.YYYY HH:mm:ss')

  await set(refFirebase(database, `${seatData.value.type}/${seatData.value.index}`), seatData.value)
  emit('close')
  Swal.fire({
    title: 'Sitz gespeichert',
    text: `Sitz ${seatData.value.name} wurde angelegt`,
    icon: 'success',
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2000,
  })
}

</script>
