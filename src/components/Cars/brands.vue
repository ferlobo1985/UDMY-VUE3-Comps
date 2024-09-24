<template>
    <div class="car_brands">
        <slot name="brands"></slot>
        <h3>Car brands</h3>
        <slot></slot>
        <slot name="other"></slot>
      
    </div>
</template>

<style scoped>
    .car_brands {
        border: 1px solid #2196f3;
        padding: 10px 20px;
    }
</style>