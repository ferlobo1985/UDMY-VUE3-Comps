<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li><span>Name:</span> {{name}}</li>
            <li><span>Lastname:</span> {{lastname}}</li>
            <li><span>Known as:</span> {{alsoKnownAs}}</li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['alsoKnownAs','lastname']);
    const name = 'Steve'
</script>



<style scoped>
    span {
        font-weight: 800;
    }
    .user_profile {
        border: 1px solid #2196F3;
        padding: 10px;
    }
</style>