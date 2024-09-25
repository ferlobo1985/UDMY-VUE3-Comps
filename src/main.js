import { createApp } from "vue";
import App from './App.vue';

import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

app.directive('awesome',{
    created(el){
        console.log('created');
        console.log(el.parentNode)
    },
    beforeMount(el,binding,vnode){
        console.log('beforeMount');
        console.log(el.parentNode)

        el.style.color = binding.modifiers.red ? 'red':'blue';
        el.style.fontSize = binding.modifiers.big ? '20px':'10px'
        el.innerHTML = binding.value
    },
    mounted(el){
        console.log('mounted');
        console.log(el.parentNode)
    },
    beforeUpdate(el,binding){
        console.log('beforeUpdate');
        console.log(el.parentNode);
        el.innerHTML = binding.value
    },
    updated(){
        console.log('UPDATED !!!!');
    },
    beforeUnmount(){},
    unmounted(){}
})

app.component('app-header',Header)
app.mount('#app')