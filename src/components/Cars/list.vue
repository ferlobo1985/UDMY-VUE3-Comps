<template>
    <div>
        <ul>
            <li v-for="car in cars" :key="car.model">
                <span>{{ car.brand }}</span>: {{cars.model}}
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['cars'])
</script>