<template>
    <div v-awesome.red.big="textToRender"></div>
    <button @click="textToRender = 'Something else'">
        Trigger update
    </button>
</template>

<script setup>
    import { ref } from 'vue';
    const textToRender = ref('Some text')
</script>