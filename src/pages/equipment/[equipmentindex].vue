<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ref as refFirebase, onValue } from 'firebase/database'
import { database } from '../../modules/db'

const props = defineProps<{ equipmentindex: string }>()

const equipment = ref({})
const equipmentData = refFirebase(database, `equipment/${props.equipmentindex}`)

onMounted(() => {
  onValue(equipmentData, (snapshot) => {
    equipment.value = snapshot.val()
  })
})
</script>

<template>
  <EquipmentDetails :equipment="equipment" />
</template>
