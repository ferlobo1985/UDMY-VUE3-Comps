<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li><span>Name:</span> {{name}}</li>
            <li><span>Lastname:</span> {{userLastname}}</li>
            <li><span>Known as:</span> {{alsoKnownAs}}</li>
            <li><span>Age:</span> {{userAge}}</li>
            <h3>Parents</h3>
        </ul>
        <ul>
            <li v-for="(value,key,index) in userParents" :key="index">
                <span>{{ key }}: </span> {{ value }}
            </li>
        </ul>
        <hr/>
        <button @click="emit('update-lastname','Michaelson')">Change from child</button>
        <button @click="sayHello">Say hello</button>
        <button @click="updateAge(40)">Update age</button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['update-lastname','say-hello']);
    const props = defineProps({
        alsoKnownAs:{
            type:String,
            required:true,
            default:'N/A'
        },
        userLastname:{
            type:String,
            validator(value){
                if(value === 'Jones'){
                    return true
                } else {
                    return false
                }
            }
        },
        userAge:[Number,String],
        userParents:Object,
        updateAge:Function
    });

    const sayHello = () => {
        emit('say-hello')
    }

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