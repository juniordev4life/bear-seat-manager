<script setup lang="ts">
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'

import '../../node_modules/vue-simple-calendar/dist/style.css'
// The next two lines are optional themes
import '../../node_modules/vue-simple-calendar/static/css/default.css'
import '../../node_modules/vue-simple-calendar/static/css/holidays-us.css'

let showDate = new Date()

function setShowDate(d: any) {
  showDate = d
}
</script>

<template>
  <h1>My Calendar</h1>
  <calendar-view
    :show-date="showDate"
    class="theme-default holiday-us-traditional holiday-us-official"
  >
  </calendar-view>
</template>
