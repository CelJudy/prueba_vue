<script setup>
    import axios from 'axios'
    const fetch=async ()=>{
        try{
            const response = await axios.get('http://localhost:3000/api/numero/10')
            console.log(response)
        }catch (error) {
            console.log(error)
        }
    }
</script>
<template>
    <button @click="fetch()">prueba</button>
</template>
