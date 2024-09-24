<template>
    <div>
        {{  text  }}
    </div>
    <button @click="text = 'Changed...'">
        Trigger update
    </button>
</template>

<script setup>
    import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
    const text = ref('Some text')

    onBeforeMount(()=>{
        console.log('1-onBeforeMount');
    })
    onMounted(()=>{
        console.log('2-onMounted')
    })
    onBeforeUpdate(()=>{
        console.log('x-onBeforeUpdate')
    })
    onUpdated(()=>{
        console.log('x-onUpdated')
    })
    onBeforeUnmount(()=>{
        console.log('o-onBeforeUnmount')
    })
    onUnmounted(()=>{
        console.log('o-onUnmounted')
    })

</script>