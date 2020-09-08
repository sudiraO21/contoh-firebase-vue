import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyA9cqkbOxfKO7BrFXBkNdAqvWslB0Co9U8",
    authDomain: "test-1-b576c.firebaseapp.com",
    databaseURL: "https://test-1-b576c.firebaseio.com",
    projectId: "test-1-b576c",
    storageBucket: "test-1-b576c.appspot.com",
    messagingSenderId: "27866336291",
    appId: "1:27866336291:web:0812baedd8e2fdd622f596",
    measurementId: "G-RERSTXCNQN"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
