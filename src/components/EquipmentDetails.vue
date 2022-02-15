<template>
  <div class="w-full">
    <div class="flex flex-col mb-4">
      <label class="mb-1">Seriennummer</label>
      <input v-model="equipmentData.serialNumber" type="text" aria-label="Seriennummer" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Name</label>
      <input v-model="equipmentData.name" type="text" aria-label="Name" />
    </div>
    <div class="flex flex-col">
      <label>Bemerkung</label>
      <textarea v-model="equipmentData.note" aria-label="Bemerkung" />
    </div>
  </div>
  <div class="mt-5 text-center">
    <button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" @click="saveEquipment">
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
  equipment: Object,
})

const emit = defineEmits(['close'])

const equipmentData = computed(() => { return props.equipment })

async function saveEquipment() {
  if (equipmentData.value.index === undefined) {
    equipmentData.value.index = uuidv4()
    equipmentData.value.created = dayjs().format('DD.MM.YYYY HH:mm:ss')
  }
  equipmentData.value.updated = dayjs().format('DD.MM.YYYY HH:mm:ss')

  await set(refFirebase(database, `${equipmentData.value.type}/${equipmentData.value.index}`), equipmentData.value)
  emit('close')
  Swal.fire({
    title: 'Zubehör gespeichert',
    text: `Zubehör ${equipmentData.value.name} wurde angelegt`,
    icon: 'success',
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2000,
  })
}

</script>
