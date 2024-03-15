<template>
  <div id="app">
    <nav id="navbar-main" class="navbar is-fixed-top">
      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item dropdown has-divider has-user-avatar">
            <a class="navbar-link">
              <div class="is-user-name"><span>{{ userEmail }}</span></div>
            </a>
          </div>
          <a title="Log out" class="navbar-item desktop-icon-only">
            <span class="icon c-logout" @click="logout"><i class="mdi mdi-logout"></i></span>
            <span>Log out</span>
          </a>
        </div>
      </div>
    </nav>

    <aside class="aside is-placed-left is-expanded">
      <div class="aside-tools">
        Bear Seat Manager
      </div>
      <div class="menu is-menu-main">
        <p class="menu-label">
          Übersicht
        </p>
        <ul class="menu-list">
          <li>
            <a href="/dashboard">
              <span class="icon"><i class="mdi mdi-chart-timeline"></i></span>
              <span class="menu-item-label">Dashboard</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">
          Miete
        </p>
        <ul class="menu-list">
          <li>
            <a href="/rent/reboarder-seats">
              <span class="icon"><i class="mdi mdi-car-child-seat"></i></span>
              <span class="menu-item-label">Reboarder</span>
            </a>
          </li>
          <li>
            <a href="/rent/following-seats">
              <span class="icon"><i class="mdi mdi-seatbelt"></i></span>
              <span class="menu-item-label">Folgesitze</span>
            </a>
          </li>
          <li>
            <a href="/rent/baby-seats">
              <span class="icon"><i class="mdi mdi-baby"></i></span>
              <span class="menu-item-label">Babyschale</span>
            </a>
          </li>
          <!--
          <li>
            <a href="/rent/baby-seats-list">
              <span class="icon"><i class="mdi mdi-baby"></i></span>
              <span class="menu-item-label">Babyschale Liste</span>
            </a>
          </li>
          -->
          <li>
            <a href="/rent/equipments">
              <span class="icon"><i class="mdi mdi-tag"></i></span>
              <span class="menu-item-label">Zubehör</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">
          Inventar
        </p>
        <ul class="menu-list">
          <li>
            <a href="/reboarder-seats">
              <span class="icon"><i class="mdi mdi-car-child-seat"></i></span>
              <span class="menu-item-label">Reboarder</span>
            </a>
          </li>
          <li>
            <a href="/following-seats">
              <span class="icon"><i class="mdi mdi-seatbelt"></i></span>
              <span class="menu-item-label">Folgesitze</span>
            </a>
          </li>
          <li>
            <a href="/baby-seats">
              <span class="icon"><i class="mdi mdi-baby"></i></span>
              <span class="menu-item-label">Babyschale</span>
            </a>
          </li>
          <li>
            <a href="/equipments" class="has-icon">
              <span class="icon"><i class="mdi mdi-tag"></i></span>
              <span class="menu-item-label">Zubehör</span>
            </a>
          </li>
        </ul>
        <p class="menu-label">
          Über
        </p>
        <ul class="menu-list">
          <li>
            <a href="/help" class="has-icon">
              <span class="icon"><i class="mdi mdi-help-circle"></i></span>
              <span class="menu-item-label">Hilfe</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const auth = getAuth()
const router = useRouter()
const userEmail = ref('')

onAuthStateChanged(auth, (user) => {
  if (user)
    userEmail.value = user.email
  else
    router.push('/')
})

function logout() {
  signOut(auth).then(() => {
    router.push('/')
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<style>
.c-logout {
  cursor: pointer;
}
</style>
