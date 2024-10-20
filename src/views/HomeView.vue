<script setup>
    import '../assets/boton.css'
    import '../assets/style.css'
    import { insertFetch } from '@/utils/utils';
    let name='';
    let job='';
</script>
<template>
    <img src="../assets/img/mishito.jpg" class="tamanio"/><br>
    text
    <input v-model="name"/><input v-model="job"/>
    <button @click="insertFetch({name:name, job:job});" id="miboton">insertar</button>
    <!-- <button onclick="getLastIndex()">prueb</button><br>
    <button onclick="sendNotification()">push</button> -->
</template>
