<template>
  <div ref="root" class="gstc-wrapper"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GSTC from 'gantt-schedule-timeline-calendar'
import 'gantt-schedule-timeline-calendar/dist/style.css'

let gstc, state

const root = ref(null)

/**
 * @returns { import("gantt-schedule-timeline-calendar").Rows }
 */
function generateRows() {
  const rows = {}
  for (let i = 1; i < 11; i++) {
    const id = GSTC.api.GSTCID(i.toString())
    rows[id] = {
      id,
      label: `Sitz ${i}`,
    }
  }
  return rows
}
/**
 * @returns { import("gantt-schedule-timeline-calendar").Items }
 */
function generateItems() {
  const items = {}
  let start = GSTC.api.date().startOf('day')
  for (let i = 0; i < 100; i++) {
    const id = GSTC.api.GSTCID(i.toString())
    const rowId = GSTC.api.GSTCID(Math.floor(Math.random() * 100).toString())
    start = start.add(2, 'day')
    items[id] = {
      id,
      label: `Item ${i}`,
      rowId,
      time: {
        start: start.valueOf(),
        end: start.add(3, 'day').endOf('day').valueOf(),
      },
    }
  }
  return items
}

onMounted(() => {
  // Configuration object
  const config = {
    licenseKey:
        '====BEGIN LICENSE KEY====\nHL0fyM7WZXLbKo55r7659DGwtMStoAxclzq9Jmruo+I/FwRTC6LaTXM2MfMHwoqSBAgHTtt8RapdF8xujx07w/NF4Z/gVrqezeZVS3xwQ0RtzKGgw4K7IOGhKcxUxPtN4vA6kc5FDQzS1K8SeiNXF0h3g9j6Hxk7BPTzOTdPneSibpr0I3LwFP8WURc79kU/TEEWH+Da08RjoLaAh4bwzOqebiADFP00MUXFL9XHGHR7itpWrDLhiLC2deROHYOYkK2bpbadAbR/phZgvInsw8TUnMiu5ie9HhUbhBygirOokkkKMY0oGKEtwvxvFXxmxsr4aE3GsY1E9uhJrQSO1Q==||U2FsdGVkX18rS0LFVnsPnVi8F8jCJaVbMWBM9ICGMr5QvE48McQByPrVHL20iAIftwLhNLhXU+TGjw5zQn1Oa6+pesU9hX5WKMX8YKwT2sQ=\nCVrbA+fLKRSyQR2uRPkxrhd2DL/UdVBgulPhg6sD0IHbOU7oac+doEq5oYNiUSWhOuVT1bbAil9KvVjlPii8Jm9lEbyjV2ywZmNfRr1JucJEQUoOJT9eUwC6vLkD4LsqUMY/pNtr3xssl97nhZtwQBnieOeX6B3lUkgTOxQdlkmhq1062YvpVAbtK6R3++YfufMLIiO1JfvCiJb7vYTXOFcyoTYtjI1krO99WMUPuc7KQwsRd0K/y2nx7rb9bG95IgEOL7XcfWeqWF8IuFaw+VOXf+CBkBx64BOihLLBRETJoLnAJ0HqxM0feLmYF+RQ09jVX6DLDPYbE2rOe7fbvw==\n====END LICENSE KEY====',
    plugins: [],
    list: {
      columns: {
        data: {
          [GSTC.api.GSTCID('id')]: {
            id: GSTC.api.GSTCID('id'),
            width: 60,
            data: ({ row }) => GSTC.api.sourceID(row.id),
            header: {
              content: 'ID',
            },
          },
          [GSTC.api.GSTCID('label')]: {
            id: GSTC.api.GSTCID('label'),
            width: 200,
            data: 'label',
            header: {
              content: 'Label',
            },
          },
        },
      },
      rows: generateRows(),
    },
    chart: {
      items: generateItems(),
    },
  }
  state = GSTC.api.stateFromConfig(config)
  gstc = GSTC({
    element: root.value,
    state,
  })
})
</script>
