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

    /* const fetch=async ()=>{
        try{
            const options={
                url:'https://reqres.in/api/users',
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                data:{
                    name: "morpheus",
                    job: "leader"
                }
            }
            const response = await axios.request(options)
            console.log(response)
        }catch (error) {
            console.log(error)
        }
    } */
</script>
<template>
    <button @click="fetch()">prueba</button>
</template>
