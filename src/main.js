import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDAWXRcwToixSXYZj7X1OkAuzLnVu-Lo20",
  authDomain: "carlos-miceli-s-website.firebaseapp.com",
  projectId: "carlos-miceli-s-website",
  storageBucket: "carlos-miceli-s-website.appspot.com",
  messagingSenderId: "503988663629",
  appId: "1:503988663629:web:fc4bd3aefc544b9c57b304",
  measurementId: "G-K4ZQ6K9HHC"
};

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
