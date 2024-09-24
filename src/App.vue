<template>
    <div>
        <app-header/>
        <div class="container">
            <Cars/>
            <hr/>
            <button @click="updateCar">Update</button>
        </div>
    </div>
</template>

<script setup>
    import { reactive, provide } from 'vue';
    import Cars from './components/Cars/index.vue';

    const cars = reactive([
        {model:'F9',brand:'Ferrari'},
        {model:'911',brand:'Porsche'},
        {model:'Tipo',brand:'Fiat'}
    ])

    const updateCar = () => {
        cars[0].model = 'Ford'
    }

    provide('cars',{
        cars,
        updateCar
    })

</script>

<style>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Robot',sans-serif;
    }
    .container {
        min-height:84vh;
        box-sizing: border-box;
        padding: 20px;
    }

</style>
