import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBsNTz2sbLcrzEwsK3sIFJD6BWMeoxex3k',
  authDomain: 'pasta-6d256.firebaseapp.com',
  databaseURL: 'https://pasta-6d256.firebaseio.com',
  projectId: 'pasta-6d256',
  storageBucket: 'pasta-6d256.appspot.com',
  messagingSenderId: '1075889511298'
})

export const db = firebaseApp.database()
