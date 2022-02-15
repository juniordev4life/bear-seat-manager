import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_DB_APIKEY,
  authDomain: import.meta.env.VITE_DB_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  storageBucket: import.meta.env.VITE_DB_STORAGE_BUCKET,
}

export const app = initializeApp(firebaseConfig)

// Get a reference to the database service
export const database = getDatabase(app)
