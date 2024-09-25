<template>
    <!-- <div v-awesome.red.big="textToRender"></div>
    <button @click="textToRender = 'Something else'">
        Trigger update
    </button> -->
    <hr/>
    <div v-user-lastname="lastname"></div>
</template>

<script setup>
    import { ref } from 'vue';
    const textToRender = ref('Some text');
    const lastname = ref('Jones')

    const vUserLastname = {
        beforeMount(el,binding){
            el.innerHTML = binding.value;
            el.style.color = 'red';
        }
    }

</script>