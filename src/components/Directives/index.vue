<template>
    <div v-awesome.red.big="textToRender"></div>
    <div v-awesome.blue.small="textToRender"></div>
</template>

<script setup>
    import { ref } from 'vue';
    const textToRender = ref('Some text')
</script>