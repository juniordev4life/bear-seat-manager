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
      </header>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th>Erstellt</th>
              <th>Name</th>
              <th>Email</th>
              <th>Enddatum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rent in rents" :key="rent.index">
              <td data-label="Created">
                {{ rent.created }}
              </td>
              <td data-label="Name">
                {{ rent.name }}
              </td>
              <td data-label="Email">
                {{ rent.email }}
              </td>
              <td data-label="Ende">
                {{ formatDate(rent.endDate) }}
              </td>
              <td class="actions-cell">
                <div class="buttons right nowrap">
                  <!-- <a :href="`/${seat.type}/${seat.index}`" class="button small green" data-target="sample-modal-2" type="button">
                    <span class="icon"><i class="mdi mdi-eye"></i></span>
                  </a>
                  <button class="button small green" type="button" @click="setSeat(seat)">
                    <span class="icon"><i class="mdi mdi-pencil"></i></span>
                  </button>  -->
                  <button class="button small red" data-target="sample-modal" type="button" @click="confirmDelete(rent)">
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
import { ref as refFirebase, onValue, remove, query, orderByKey } from 'firebase/database'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import { database } from '../modules/db'

const props = defineProps({
  type: String,
  title: String,
})

const seatDetailsActive = ref(false)

const selectedSeat = ref({})
const rents = ref({})
const rentData = query(refFirebase(database, 'rent-baby-seat'), orderByKey('created'))

onMounted(() => {
  onValue(rentData, (snapshot) => {
    rents.value = snapshot.val()
  })
  console.log(rents)
})

function formatDate(date: any) {
  return date !== '' ? dayjs(date).format('DD.MM.YYYY') : ''
}

function toggleSeatDetails() {
  seatDetailsActive.value = !seatDetailsActive.value
}

function confirmDelete(rent: any) {
  Swal.fire({
    title: 'Miete löschen?',
    text: 'Möchtest Du die Miete wirklich löschen?',
    icon: 'error',
    allowOutsideClick: false,
    showDenyButton: true,
    confirmButtonText: 'Löschen',
    denyButtonText: 'Nein',
  }).then(async(result) => {
    if (result.isConfirmed) {
      await remove(refFirebase(database, `rent-baby-seat/${rent.index}`))
      Swal.fire({
        text: 'Miete wurde gelöscht',
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    }
    else if (result.isDenied) {
      Swal.fire({
        text: 'Miete wurde nicht gelöscht',
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
