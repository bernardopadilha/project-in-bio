import { initializeApp } from 'firebase-admin'
import { cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'
import 'server-only'

// Certificado

const decodedPrivateKey = Buffer.from(
  process.env.FIREBASE_PRIVATE_KEY_BASE_64!,
  'base64',
).toLocaleString('utf-8')

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: decodedPrivateKey,
})

// Instancia do app
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  })
}

export const db = getFirestore()
export const storage = getStorage().bucket()
