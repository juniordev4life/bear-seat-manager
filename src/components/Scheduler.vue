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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GSTC from 'gantt-schedule-timeline-calendar'
import 'gantt-schedule-timeline-calendar/dist/style.css'
import { ref as refFirebase, onValue, query, orderByChild } from 'firebase/database'
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
const seatsData = query(refFirebase(database, `${props.type}`), orderByChild('name'))
const rents = ref({})
const rentData = refFirebase(database, `rent-${props.type}`)

let gstc, state, config

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
    rentObject.value.startDate = event.target.classList[1].substr(event.target.classList[1].length - 19).split('T')[0]
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
      end: GSTC.api.date(dayjs().add(6, 'months').format('YYYY-MM-DD')).startOf('day').valueOf(),
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

onMounted(() => {
  onValue(seatsData, (snapshot) => {
    seats.value = snapshot.val()
  })
  onValue(rentData, (snapshot) => {
    rents.value = snapshot.val()
  })
  setTimeout(() => {
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
        '====BEGIN LICENSE KEY====\nEprbevgl9MsKkfDfUHobc0u857p2qBYSUAkKtbZzEzhSLIIVIg2XnbG7eD6JQXog5fZciG1D2ZsPWmyTGQRbyXvNWI6CKMPItZaTIu0sLpTsVdQEdTI9lQkHmMpa3MYeOTRhbAeCqbXeYtKYNsJguzbT3joYF9ZEvNVwFrZjABuhrSQMSjauO7vFs2kn1gIDyBomVlPKWvT8OgA7rO8p+u6o/XmkZx7WwZfmR8zsqrcxSXj1NLC4rdRURFNdgACiIB/Zw2WNrf5mPumVYi50TYVI3zowmXehMcTos2+DHNLe07NbaaK/KSExx6//r+xZ0bNFg5gQkn4f++CqNE/nLQ==||U2FsdGVkX19QdN9n1Ejhw12beTtMDy5Oe3oPUZm39R+1S5dCmpLfLymt2458RvJ2V2H0czTJeoGtyo9SWxl+R9XjwepCn7Mj6Z4Y8bnLbZM=\nVej0r8ltDgwOlFpkLdYEIplyd1HEa+v7BmZJJ1IbXyxB2ctbsRKzlTVkBgn8fS9QU2PHxklR1c7M2+Aqvr5S2j1X4LFSKwf5gCTkvCSaYfX/o4HtyZJCwsyvMz2kjElMZB/3h0qvCLLsIaMKhkq++oTBqUuuisiZedP0VzGhCJUVR6kz0J7Dxcq1fqMWv0MXET0H/3BAWH32xOxbdTiva4Qz0MOoX9pqv/1appva4C2s7+fNvgTweGM4JD3rwf7v1/leIvfYMbt4OucIrhPWIxWaAGIACtVwAj3nZf7IJvxdnjTj0HpUzyn/R9b14unqzXKQVS5MGxXACU9r4/d0og==\n====END LICENSE KEY====',
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
      },
      actions: {
        'chart-timeline-grid-row': [clickAtRow],
        'chart-timeline-items-row-item': [selectRent],
      },
    }
    updateSheduler()
  }, 1000)
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
