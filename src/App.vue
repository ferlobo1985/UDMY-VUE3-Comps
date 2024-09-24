<template>
    <h1>{{name}}</h1>
</template>

<script setup>
    import {ref} from 'vue';
    const name = ref("Hello world !!");
</script>

<style>
    h1 {
        color:red;
    }
</style>
