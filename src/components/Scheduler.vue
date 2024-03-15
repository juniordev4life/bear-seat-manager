<template>
  <div ref="root" class="gstc-wrapper"></div>
  <Modal :modal-active="modalActive" @close="closeModal">
    <div class="c-modal__content">
      <RentDetails
        :rentobject="rentObject"
        :part="rentObject?.part"
        :isexistingrentobject="isExistingRentObject"
        @update="updateSheduler"
        @close="closeModal"
      />
    </div>
  </Modal>
  <div class="text-center">
    <div class="form-check form-switch py-4">
      <input id="showAllRents" v-model="showAllRents" class="form-check-input appearance-none focus:outline-none cursor-pointer shadow-sm mr-2" type="checkbox" @change="renderSchedule()">
      <label class="form-check-label inline-block text-gray-800 cursor-pointer" for="showAllRents">Alle Mieten anzeigen</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GSTC from 'gantt-schedule-timeline-calendar'
import 'gantt-schedule-timeline-calendar/dist/style.css'
import { ref as refFirebase, onValue } from 'firebase/database'
import dayjs from 'dayjs'
import { database } from '../modules/db'

const props = defineProps<{ type: string }>()

const modalActive = ref(false)
const isExistingRentObject = ref(false)
const seats = ref({})
const rentObject = ref({
  part: {},
  index: undefined,
  startDate: '',
  endDate: '',
  name: '',
  email: '',
  phone: '',
  note: '',
})
const seatsData = refFirebase(database, `${props.type}`)
const rents = ref({})
const rentData = refFirebase(database, `rent-${props.type}`)

let gstc, state, config
const showAllRents = ref(false)

const root = ref(null)

function closeModal() {
  modalActive.value = false
  clearRentObject()
}

function clearRentObject() {
  isExistingRentObject.value = false
  rentObject.value = {
    part: {},
    index: undefined,
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: '',
    note: '',
  }
}

function openModal() {
  modalActive.value = true
}

function clickAtRow(element, data) {
  function onClick(event) {
    // data variable will be updated in update method below so it will be always actual
    rentObject.value.part = seats.value[data.row.id]
    rentObject.value.startDate = event.target.dataset.gstcid.substr(event.target.dataset.gstcid.length - 19).split('T')[0]
    rentObject.value.endDate = dayjs(rentObject.value.startDate).add(7, 'days').format('YYYY-MM-DD')
    isExistingRentObject.value = false
    openModal()
  }

  element.addEventListener('click', onClick)
}

function selectRent(element, data) {
  function onClick(event) {
    // data variable will be updated in update method below so it will be always actual
    getRentData(data.item.id)
  }

  element.addEventListener('click', onClick)
}

async function getRentData(rentId) {
  const rentSelected = await refFirebase(database, `rent-${props.type}/${rentId}`)
  onValue(rentSelected, (snapshot) => {
    rentObject.value = snapshot.val()
    isExistingRentObject.value = true
    openModal()
  })
}

/**
 * @returns { import("gantt-schedule-timeline-calendar").Rows }
 */
function generateRows(parts: any) {
  const rows = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in parts) {
    const id: string = parts[key].index.toString()
    rows[id] = {
      id,
      label: `${parts[key].name}`,
    }
  }
  return rows
}
/**
 * @returns { import("gantt-schedule-timeline-calendar").Items }
 */
function generateItems(rentItems) {
  const items = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in rentItems) {
    items[rentItems[key].index] = {
      id: rentItems[key].index,
      label: rentItems[key].name,
      rowId: rentItems[key].part.index,
      time: {
        start: GSTC.api.date(rentItems[key].startDate).startOf('day').valueOf(),
        end: GSTC.api.date(rentItems[key].endDate).startOf('day').valueOf(),
      },
    }
  }
  items[1] = {
    id: 1,
    label: 'Test',
    rowId: 1,
    time: {
      start: GSTC.api.date().startOf('day').valueOf(),
      end: GSTC.api.date(dayjs().add(24, 'months').format('YYYY-MM-DD')).startOf('day').valueOf(),
    },
  }
  return items
}

function updateSheduler() {
  state = GSTC.api.stateFromConfig(config)
  gstc = GSTC({
    element: root.value,
    state,
  })
}

function isInTheFuture(date) {
  const today = new Date()
  today.setHours(23, 59, 59, 998)
  return date > today
}

function formatDate(date, format) {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yyyy: date.getFullYear(),
  }

  return format.replace(/mm|dd|yyyy/gi, matched => map[matched])
}

function renderSchedule() {
  setTimeout(() => {
    const actualDate = formatDate(new Date(), 'yyyy-mm-dd')
    const toDate = formatDate(new Date(), 'yyyy-mm-dd')
    const date = GSTC.api.date
    const sourceLabel = GSTC.api.GSTCID('label')
    const timeConfig = showAllRents.value
      ? {
        zoom: 21,
      }
      : {
        from: date(actualDate).valueOf(),
        to: date(toDate).valueOf(),
        autoExpandTimeFromItems: false,
        zoom: 21,
      }
    // Configuration object
    config = {
      innerHeight: 600,
      locale: {
        name: 'de',
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez'.split('_'),
        ordinal: (n: any) => `${n}.`,
        weekStart: 1,
        yearStart: 4,
        formats: {
          LTS: 'HH:mm:ss',
          LT: 'HH:mm',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
      },
      licenseKey:
        '====BEGIN LICENSE KEY====\nC1EulTPQ3mtuOLDV650lWrjOzqBF85B+daxN3XuQEa849/sx6aFD+2Mj6GmwPe2gG6BaohSHonbhzR91Try4yTbNElvH3i+xPm0WHbnAvdulGb8qncpLB/4czenqjcwaQWCsum90b+MImKoN33M/1k7kokdbgXR2wdlh898v2dyT43+c3EkvUHUxg40fK0ORizt8uzc+rLZ2GeXcbCjNzZlQgKB4ftuHcSYdJ8LeMedAAUAwIMA5fC2ab47raS6NAPIFc98VKSEsmkVyTFCesEYPeOz/hHgL2GPUBNWlRYJAsv9WZfc3xXyqqO5V/L8sF6yscNKu839KXpuUvz27/w==||U2FsdGVkX19OpPFIez1mpTvsZUfbD5b9UmJa0MLj8M8I9WXAOawCLCF2MbnxvV3S5we3pZBpht1PX9OcztZ35+IFGFERBLwnXXR+Glftl6s=\nqE380pfmMlQ3seXaQHuozaTpikvRnjxZRh3GL4psmIzqu0IY5GDp/7Enneyp77NzfIK4akT8L9Jl7YSuzHIBarBr4olwOvMmcE9hvmvXNPgU1bu0vcjL4oXmgUhZ0jrOfa+IU57+s060kFjXC1G6y6AvbV+OJkqWUBF/40AQ2QMU1Z2+Se7+iJzOFher2/PRqc0yaPV9APVRv1rH30R5k2cMuSqNfs4POzPu89WrpP7dO914tfl50nNXdFnHFQFrqFHCmN74viFxn3aNY9x+75hWfXHqxpICbllC2Zz4p2rnRB/DBaXj6hX0+pAO1D8MjTHEseRyAn1JYNub52hWqw==\n====END LICENSE KEY====',
      plugins: [],
      list: {
        columns: {
          data: {
            [GSTC.api.GSTCID('label')]: {
              id: GSTC.api.GSTCID('label'),
              width: 200,
              data: 'label',
              sortable: 'label',
              header: {
                content: 'Name',
              },
            },
          },
        },
        rows: generateRows(seats.value),
        toggle: {
          display: false,
        },
      },
      chart: {
        items: generateItems(rents.value),
        time: timeConfig,
      },
      actions: {
        'chart-timeline-grid-row': [clickAtRow],
        'chart-timeline-items-row-item': [selectRent],
      },
    }
    updateSheduler()
    state.update('config.list.sort', (sort) => {
      sort.desc = !sort.desc
      sort.activeColumnId = sourceLabel
      return sort
    })
  }, 1000)
}

onMounted(() => {
  onValue(seatsData, (snapshot) => {
    seats.value = snapshot.val()
  })
  onValue(rentData, (snapshot) => {
    const rentArray: any = []
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key
      if (isInTheFuture(new Date(childSnapshot.val().endDate)))
        rentArray[childKey] = childSnapshot.val()
      rentArray[childKey] = childSnapshot.val()
    })
    rents.value = rentArray
    // rents.value = snapshot.val()
  })
  renderSchedule()
})
</script>

<style>
  .gstc__chart-timeline-grid-row,
  .gstc__chart-timeline-items-row-item-label {
    cursor: pointer;
  }

  .gstc__chart-timeline-grid-row:hover {
    background-color: beige;
  }

  .c-rent__field-group {
    display: flex;
    justify-content: space-between;
    gap: 5%;
  }

  .c-rent__field {
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    margin: 20px 0;
    width: 100%;
  }
</style>
