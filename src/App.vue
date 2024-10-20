<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'


/* let saludo=ref('hola mundo');
const cambiar_saludo=()=>{
    saludo.value="hello world";
    console.log(saludo);
}

//en todos los lenguajes de programacion, las posiciones de los arreglos empiezan en 0
const listaFrutas=["manzana", "platano", "pera", "naranja"];
 //                  0            1           2       3 
let fruta="fresa";

console.log(listaFrutas[2]);

listaFrutas.forEach(element => {
    console.log(element);
});

let listaPaises=["EU", "Mexico", "Peru", "Francia"];

let pais=ref("EU"); */
</script>

<template>
    <!-- <select v-model="pais">
        <option v-for="paisIndividual in listaPaises" :value="paisIndividual">{{ paisIndividual }}</option>
    </select>
    <input type="text"></input>
    <h1>nombres</h1>
    <template v-if="pais=='estados unidos'">
        <h1>apellido</h1>
    </template>
    <template v-else>
        <h1>apellido P</h1>
        <h1>apellido M</h1>
    </template> -->
    <RouterView/>

</template>