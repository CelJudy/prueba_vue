//import './assets/main.css'
import './assets/boton.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

navigator.serviceWorker.register('/sw.js', { type: 'module' });


let db=window.indexedDB.open('database');

db.onupgradeneeded=event=>{
    let result=event.target.result;
    result.createObjectStore('usuarios',{autoIncrement: true});
}