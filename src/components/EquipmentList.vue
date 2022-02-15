<template>
  <section class="section main-section">
    <div class="card has-table">
      <header class="card-header">
        <p class="card-header-title">
          <span class="icon"><i class="mdi mdi-tag"></i></span>
          Zubehör
        </p>
        <button class="card-header-icon button small green" @click="setNewEquipment">
          <span class="icon"><i class="mdi mdi-plus icon-plus"></i></span>
        </button>
      </header>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Seriennummer</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipment in equipments" :key="equipment.index">
              <td data-label="Name">
                {{ equipment.name }}
              </td>
              <td data-label="Seriennummer">
                {{ equipment.serialNumber }}
              </td>
              <td class="actions-cell">
                <div class="buttons right nowrap">
                  <a :href="`/equipment/${equipment.index}`" class="button small green" type="button">
                    <span class="icon"><i class="mdi mdi-eye"></i></span>
                  </a>
                  <button class="button small green" type="button" @click="setEquipment(equipment)">
                    <span class="icon"><i class="mdi mdi-pencil"></i></span>
                  </button>
                  <button class="button small red" type="button" @click="confirmDelete(equipment)">
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
  <Modal :modal-active="equipmentDetailsActive" @close="toggleEquipmentDetails">
    <EquipmentDetails :equipment="selectedEquipment" @close="toggleEquipmentDetails" />
  </Modal>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ref as refFirebase, onValue, remove } from 'firebase/database'
import Swal from 'sweetalert2'
import { database } from '../modules/db'

const props = defineProps({
  type: String,
  title: String,
})

const equipmentDetailsActive = ref(false)

const selectedEquipment = ref({})
const equipments = ref({})
const equipmentData = refFirebase(database, props.type)

onMounted(() => {
  onValue(equipmentData, (snapshot) => {
    equipments.value = snapshot.val()
  })
})

function setNewEquipment() {
  selectedEquipment.value = {
    serialNumber: '',
    type: props.type,
    name: '',
    note: '',
  }
  toggleEquipmentDetails()
}

function toggleEquipmentDetails() {
  equipmentDetailsActive.value = !equipmentDetailsActive.value
}

function confirmDelete(equipment: any) {
  Swal.fire({
    title: 'Zubehör löschen?',
    text: 'Möchtest Du das Zubehör wirklich löschen?',
    icon: 'error',
    allowOutsideClick: false,
    showDenyButton: true,
    confirmButtonText: 'Löschen',
    denyButtonText: 'Nein',
  }).then(async(result) => {
    if (result.isConfirmed) {
      await remove(refFirebase(database, `${equipment.type}/${equipment.index}`))
      Swal.fire({
        text: 'Zubehör wurde gelöscht',
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    }
    else if (result.isDenied) {
      Swal.fire({
        text: 'Zubehör wurde nicht gelöscht',
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
