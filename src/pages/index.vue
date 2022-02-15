<script setup lang="ts">
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="w-450px p-2 bg-light-500 rounded-3xl">
      <div class="flex font-bold justify-center mt-6">
        <img
          class="h-20 w-20"
          src="/img/bear-face.png"
        >
      </div>
      <h2 class="text-3xl text-center text-gray-700 mb-4">
        Bear Seat manager
      </h2>
      <div class="px-12 pb-10">
        <div class="w-full mb-2">
          <input
            v-model="email"
            type="text"
            placeholder="E-Mail Adresse"
            class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
        <div class="w-full mb-2">
          <input
            v-model="password"
            type="password"
            placeholder="Passwort"
            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
        <div v-show="errorMessage" class="w-full mb-2">
          <p v-show="invalidEmail">
            Bitte eine korrekte E-Mail Adresse eingeben.
          </p>
          <p v-show="wrongEmail">
            Die E-Mail Adresse ist nicht bekannt und es konnte kein Konto mit dieser Adresse gefunden werden.
          </p>
          <p v-show="invalidPassword">
            Das Passwort ist lieder nicht korrekt und passt nicht zu dieser E-Mail Adresse.
          </p>
        </div>
        <!-- <div class="text-right">
        <a href="/passwort-vergessen" class="text-xs text-gray-500 mb-4">Passwort vergessen?</a>
      </div> -->

        <div>
          <button
            class="w-50 py-2 mt-4 rounded-full focus:outline-none bg-bearpink hover:bg-bearpinkdark text-white"
            @click="login"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const errorMessage = ref(false)
const wrongEmail = ref(false)
const invalidPassword = ref(false)
const invalidEmail = ref(false)

const auth = getAuth()
const router = useRouter()

onAuthStateChanged(auth, (user) => {
  if (user)
    router.push('/dashboard')
})

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      router.push('/dashboard')
    })
    .catch((error) => {
      errorMessage.value = true
      if (error.message === 'Firebase: Error (auth/user-not-found).')
        wrongEmail.value = true

      if (error.message === 'Firebase: Error (auth/invalid-email).')
        invalidEmail.value = true

      if (error.message === 'Firebase: Error (auth/wrong-password).')
        invalidPassword.value = true
    })
}

</script>
