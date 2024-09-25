<template>
    <h3>Mike is on</h3>
</template>

<script setup>
    import { onUnmounted, onActivated, onDeactivated } from 'vue';
    onUnmounted(()=>{
        console.log('Mike onUnmounted')
    })

    onActivated(()=>{
        console.log('Mike onActivated')
    })
    
    onDeactivated(()=>{
        console.log('Mike onDeactivated')
    })

</script>