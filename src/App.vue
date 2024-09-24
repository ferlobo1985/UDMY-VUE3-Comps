<template>
    <div>
        <app-header/>
        <div class="container">
            <Life v-if="showIt"/>
            <hr/>
            <button @click="showIt= !showIt">Toggle</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Life from '@/components/Life/index.vue'
    const showIt = ref(true);

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
