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
        '====BEGIN LICENSE KEY====\nS0Q9rfulj8gNupuc6j296mJLxM92rg+Za8jJutQR12x7pTZYoJ7eUbX0dFc9pmysnv6f/ZG1TlHL95RqVr69Fjn9hddwzo886HK1Bqo81ebSvigO8YB/LX0WY7/j+x0TEzQOx6X+4aYFYBdIk+aWhqFuV+mGNQ5A1R+CyOoSR57Z1PQDEiHqoJHmWwcdRRalu+4zfVDsUwIw6/TRB/QWKqBEq64i7yTwCoKpxpfuAba7BEhtsVYRHlckVfFtuhbID33NMJ2BHd+ux4b7J6WO7xpIpWqUUSo4WgpsJ1WGHKHD13gFLgZt5T03BtqApFFBw5glxxW/8S5HfdyWR+2aqQ==||U2FsdGVkX1+Yxgyi/ye7hS8h35dluivSS2MCO9fqP6O2oOXNhk70oIfrhMf9RKuG8IGJi048Hmv8MwpGMo/+hqbYt5dZY0osjUKUmMVYR10=\nCuEywDHoeHvKQbVr43YseSZP3fS/cKzSeOPD/bLSpZJI4QF6TYv6Fa9xmjnYtiIUBLu1rWMhDrBVmJHK4LKzf4/m6jH7q87TGGWPdK0X8WU63dGPlqsMiw0fsTZcHswRpricKlUE8mNP9V83c6dKu1MNfQv3RfSiBxm+lU5/fBXAaur2glBM1JkjRxPLiNznuPDMsbUB8112wd4n0IdAu5222glGbWBsFGwoQCL57UoeQ71WzpWI6ebUCat6SB277lr/l1AXnEey4Z0LQMZWfCY53fa+yMF7XN3xgmzWVeDtCkfTStXcHM3B5f8lJI0hq0TpTOqy3hUyVDbAiqZgNA==\n====END LICENSE KEY====',
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
