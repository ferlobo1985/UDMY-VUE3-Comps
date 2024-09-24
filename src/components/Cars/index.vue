<template>
    <h1>Welcome to cars</h1>
    <hr/>
    <CarList :cars="cars"/>
</template>

<script setup>
    import CarList from './list.vue';
    const props = defineProps(['cars'])
</script>