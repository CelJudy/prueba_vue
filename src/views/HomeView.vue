<script setup>
import TheWelcome from '../components/TheWelcome.vue'

let columnasUsuarios=[
    'usuario', 
    'nombre completo', 
    'direccion'
]

let columnasComida=[
    'platillo', 
    'porciones',
    'precio',
    'estrellas'
]

</script>
<template>
    <!-- usuarios -->
    <TheWelcome 
        titulo="Tabla de usuarios"
        :columnas="columnasUsuarios"
    />

    <!-- comida -->
    <TheWelcome 
        titulo="Tabla de comida"
        :columnas="columnasComida"
    />
</template>
