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
        <button class="card-header-icon button small green" @click="setNewSeat">
          <span class="icon"><i class="mdi mdi-plus icon-plus"></i></span>
        </button>
      </header>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Seriennummer</th>
              <th>Farbe</th>
              <th>Flugzeugzulassung</th>
              <th>Ende Vermietung</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seat in seats" :key="seat.index">
              <td data-label="Name">
                {{ seat.name }}
              </td>
              <td data-label="Seriennummer">
                {{ seat.serialNumber }}
              </td>
              <td data-label="Farbe">
                {{ seat.color }}
              </td>
              <td data-label="Fluzeugzulassung">
                {{ seat.allowedonplain }}
              </td>
              <td data-label="Ende Vermietung">
                {{ formatDate(seat.rentend) }}
              </td>
              <td class="actions-cell">
                <div class="buttons right nowrap">
                  <!-- <a :href="`/${seat.type}/${seat.index}`" class="button small green" data-target="sample-modal-2" type="button">
                    <span class="icon"><i class="mdi mdi-eye"></i></span>
                  </a> -->
                  <button class="button small green" type="button" @click="setSeat(seat)">
                    <span class="icon"><i class="mdi mdi-pencil"></i></span>
                  </button>
                  <button class="button small red" data-target="sample-modal" type="button" @click="confirmDelete(seat)">
                    <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <Modal :modal-active="seatDetailsActive" @close="toggleSeatDetails">
    <SeatDetails :seat="selectedSeat" @close="toggleSeatDetails" />
  </Modal>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ref as refFirebase, onValue, remove, query, orderByChild } from 'firebase/database'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import { database } from '../modules/db'

const props = defineProps({
  type: String,
  title: String,
})

const seatDetailsActive = ref(false)

const selectedSeat = ref({})
const seats = ref({})
const seatData = refFirebase(database, props.type)
// const seatData = query(refFirebase(database, props.type), orderByChild('name'))

onMounted(() => {
  onValue(seatData, (snapshot) => {
    seats.value = snapshot.val()
  })
})

function formatDate(date: any) {
  return date !== '' ? dayjs(date).format('DD.MM.YYYY') : ''
}

function setSeat(seat: any) {
  selectedSeat.value = seat
  toggleSeatDetails()
}

function setNewSeat() {
  selectedSeat.value = {
    serialNumber: '',
    type: props.type,
    name: '',
    productionDate: '',
    color: '',
    note: '',
  }
  toggleSeatDetails()
}

function toggleSeatDetails() {
  seatDetailsActive.value = !seatDetailsActive.value
}

function confirmDelete(seat: any) {
  Swal.fire({
    title: 'Sitz löschen?',
    text: 'Möchtest Du den Sitz wirklich löschen?',
    icon: 'error',
    allowOutsideClick: false,
    showDenyButton: true,
    confirmButtonText: 'Löschen',
    denyButtonText: 'Nein',
  }).then(async(result) => {
    if (result.isConfirmed) {
      await remove(refFirebase(database, `${seat.type}/${seat.index}`))
      Swal.fire({
        text: 'Sitz wurde gelöscht',
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    }
    else if (result.isDenied) {
      Swal.fire({
        text: 'Sitz wurde nicht gelöscht',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    }
  })
}

</script>

<style>
.card-header-icon {
  margin: 1rem;
}
.icon-plus {
  font-size: 20px;
}
</style>
