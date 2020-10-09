<template>
    <div>Dialog示例</div>
    <Button @click='toggle'>toggle</Button>
    <Dialog v-model:visible="x" :close-on-click-lay="false" :ok="f1" :cancel="f2">
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
            <div>1</div>
            <div>2</div>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from "../lib/Button.vue";
    import {ref,h} from 'vue'
    import {openDialog} from '../lib/openDialog.ts'
    export default {
        components:{Dialog,Button},
        setup(){
            const x = ref(false)
            const toggle = () =>{
                x.value = !x.value
            }
            const f1 = () =>{
                return false
            }
            const f2 = () =>{}
            const showDialog = () =>{
                openDialog({
                    title:h('strong',{},'标题'),
                    content:'你好',
                    ok(){
                        console.log('ok');
                    },
                    cancel(){
                        console.log('cancel');
                    }
                })
            }
            return{x,toggle,f1,f2,showDialog}
        }
    }
</script>