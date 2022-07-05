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
    })
    rents.value = rentArray
    // rents.value = snapshot.val()
  })
  setTimeout(() => {
    const actualDate = formatDate(new Date(), 'yyyy-mm-dd')
    const toDate = formatDate(new Date(), 'yyyy-mm-dd')
    const sourceLabel = GSTC.api.GSTCID('label')
    const date = GSTC.api.date
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
        '====BEGIN LICENSE KEY====\nHL0fyM7WZXLbKo55r7659DGwtMStoAxclzq9Jmruo+I/FwRTC6LaTXM2MfMHwoqSBAgHTtt8RapdF8xujx07w/NF4Z/gVrqezeZVS3xwQ0RtzKGgw4K7IOGhKcxUxPtN4vA6kc5FDQzS1K8SeiNXF0h3g9j6Hxk7BPTzOTdPneSibpr0I3LwFP8WURc79kU/TEEWH+Da08RjoLaAh4bwzOqebiADFP00MUXFL9XHGHR7itpWrDLhiLC2deROHYOYkK2bpbadAbR/phZgvInsw8TUnMiu5ie9HhUbhBygirOokkkKMY0oGKEtwvxvFXxmxsr4aE3GsY1E9uhJrQSO1Q==||U2FsdGVkX18rS0LFVnsPnVi8F8jCJaVbMWBM9ICGMr5QvE48McQByPrVHL20iAIftwLhNLhXU+TGjw5zQn1Oa6+pesU9hX5WKMX8YKwT2sQ=\nCVrbA+fLKRSyQR2uRPkxrhd2DL/UdVBgulPhg6sD0IHbOU7oac+doEq5oYNiUSWhOuVT1bbAil9KvVjlPii8Jm9lEbyjV2ywZmNfRr1JucJEQUoOJT9eUwC6vLkD4LsqUMY/pNtr3xssl97nhZtwQBnieOeX6B3lUkgTOxQdlkmhq1062YvpVAbtK6R3++YfufMLIiO1JfvCiJb7vYTXOFcyoTYtjI1krO99WMUPuc7KQwsRd0K/y2nx7rb9bG95IgEOL7XcfWeqWF8IuFaw+VOXf+CBkBx64BOihLLBRETJoLnAJ0HqxM0feLmYF+RQ09jVX6DLDPYbE2rOe7fbvw==\n====END LICENSE KEY====',
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
        time: {
          from: date(actualDate).valueOf(),
          to: date(toDate).valueOf(),
          autoExpandTimeFromItems: false,
          zoom: 21,
        },
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
