<template>
    <h3>Steve is on</h3>
</template>

<script setup>
    import { onUnmounted } from 'vue';
    onUnmounted(()=>{
        console.log('Steve onUnmounted')
    })
</script>