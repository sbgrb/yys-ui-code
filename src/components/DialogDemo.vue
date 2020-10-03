<template>
    <div>Dialog示例</div>
    <Button @click='toogle'>toggle</Button>
    <Dialog v-model:visible="x"></Dialog>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from "../lib/Button.vue";
    import {ref} from 'vue'
    export default {
        components:{Dialog,Button},
        setup(){
            const x = ref(false)
            const toogle = () =>{
                x.value = !x.value
            }
            return{x,toogle}
        }
    }
</script>