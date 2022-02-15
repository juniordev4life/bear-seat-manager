<template>
  <h1>Vermietung für {{ rentObject?.part?.name }}</h1>
  <div class="c-rent__field-group">
    <div class="c-rent__field">
      <label>Von</label>
      <input v-model="rentObject.startDate" :min="today" type="date" aria-label="Von" />
    </div>
    <div class="c-rent__field">
      <label>Bis</label>
      <input v-model="rentObject.endDate" :min="rentObject?.startDate" type="date" aria-label="Bis" />
    </div>
  </div>
  <div class="c-rent__field">
    <label>Name</label>
    <input v-model="rentObject.name" type="text" aria-label="Name" />
  </div>
  <div class="c-rent__field-group">
    <div class="c-rent__field">
      <label>E-Mail</label>
      <input v-model="rentObject.email" type="text" aria-label="E-Mail" />
    </div>
    <div class="c-rent__field">
      <label>Telefon</label>
      <input v-model="rentObject.phone" type="text" aria-label="Telefon" />
    </div>
  </div>
  <div class="flex flex-col mb-4">
    <label>Mit Versand</label>
    <input v-model="rentObject.shipping" type="checkbox" aria-label="Mit Versand" />
  </div>
  <div class="c-rent__field">
    <label>Notiz</label>
    <input v-model="rentObject.note" type="text" aria-label="Notiz" />
  </div>
  <div class="mt-5 flex justify-center gap-x-8 text-center">
    <button v-if="isExistingRentObject" class="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300" @click="confirmDelete(rentObject)">
      Löschen
    </button>
    <button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" @click="saveRent">
      Speichern
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref as refFirebase, set, remove } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import { database } from '../modules/db'

const props = defineProps({
  rentobject: Object,
  part: Object,
  isexistingrentobject: Boolean,
})

const emptyRentObject = {
  part: {},
  index: undefined,
  startDate: '',
  endDate: '',
  name: '',
  email: '',
  phone: '',
  note: '',
}

const today = ref(dayjs().format('YYYY-MM-DD'))
const rentObject = computed(() => {
  return props.rentobject || emptyRentObject
})
const seatData = computed(() => { return props.part })
const isExistingRentObject = computed(() => { return props.isexistingrentobject })
rentObject.value.part = seatData.value

const emit = defineEmits(['close', 'update'])

async function saveRent() {
  if (rentObject.value.index === undefined) {
    rentObject.value.index = uuidv4()
    rentObject.value.created = dayjs().format('DD.MM.YYYY HH:mm:ss')
  }
  rentObject.value.updated = dayjs().format('DD.MM.YYYY HH:mm:ss')

  await set(refFirebase(database, `rent-${rentObject.value.part.type}/${rentObject.value.index}`), rentObject.value)
  emit('close')
  emit('update')
  const redirectType = rentObject.value.part.type
  Swal.fire({
    title: 'Vermietung wurde anglegt',
    text: `Vermitung für ${rentObject.value.part.name} wurde angelegt`,
    icon: 'success',
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    /* Read more about isConfirmed, isDenied below */
    window.location.href = `/rent/${redirectType}s`
  })
}

function confirmDelete(deleteObject: any) {
  const rentalObjectType = deleteObject.part.type
  Swal.fire({
    title: 'Vermietung löschen?',
    text: 'Möchtest Du die Vermietung wirklich löschen?',
    icon: 'error',
    allowOutsideClick: false,
    showDenyButton: true,
    confirmButtonText: 'Löschen',
    denyButtonText: 'Nein',
  }).then(async(result) => {
    if (result.isConfirmed) {
      await remove(refFirebase(database, `rent-${rentalObjectType}/${deleteObject.index}`))
      emit('close')
      emit('update')
      Swal.fire({
        text: 'Vermietung wurde gelöscht',
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = `/rent/${rentalObjectType}s`
      })
    }
    else if (result.isDenied) {
      Swal.fire({
        text: 'Vermietung wurde nicht gelöscht',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    }
  })
}

</script>
