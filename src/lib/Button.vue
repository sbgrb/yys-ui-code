<template>
        <button class="yys-button" :class="classes" :disabled="disable">
            <span v-if="loading" class="yys-loadingIng"></span>
            <slot/>
        </button>
</template>

<script lang="ts">
    import {computed} from 'vue'
    export default {
        props:{
            theme:{
                type: String,
                default:'button',
            },
            size:{
                type: String,
                default: 'normal'
            },
            level:{
                type: String,
                default:'normal'
            },
            disable:{
                type:Boolean,
                default:false
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        setup(props){
            const {theme,size,level} = props
            const classes = computed(()=>{
                return{
                [`yys-theme-${theme}`]:theme,
                [`yys-size-${size}`]:size,
                [`yys-level-${level}`]:level,
                }
            })
            return{classes}
        }
    }
</script>

<style lang="scss">
    .yys-button{
        box-sizing: border-box;
        height: 32px;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: #333333;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        box-shadow: 0 1px fade_out(black,0.9);
        & + & {
            margin-left: 8px;
        }
        &:hover,&:focus{
            color: blue;
            border-color: #40a9ff;
        }
        &:focus{
            outline: none;
        }
        &::-moz-focus-inner{
            border: 0;
        }
        &.yys-theme-link{
            color:#40a9ff;
            border-color: transparent;
            box-shadow: none;
            &:hover,&:focus{
                color: lighten(#40a9ff,10%);
            }
        }
        &.yys-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
                color: lighten(white,5%);
            }
        }
        &.yys-theme-button{
            &.yys-size-big{
                font-size: 24px;
                height: 48px;
                padding: 0 16px;
            }
            &.yys-size-small{
                font-size: 12px;
                height: 20px;
                padding: 0 4px;
            }
        }
        &.yys-theme-button{
            &.yys-level-main{
                background: darkorange;
                color: white;
                &:hover,&:focus{
                    background: darken(darkorange,10%);
                    border-color: darkorange;
                }
            }
            &.yys-level-danger{
                background: red;
                color: white;

                &:hover,&:focus{
                    background: darken(red,10%);
                    border-color:red;
                }
            }
        }
        &.yys-theme-button{
            &[disabled]{
                cursor: not-allowed;
                color: gray;
                &:hover{
                    border-color: gray;
                }
            }
        }
        &.yys-theme-link,&.yys-theme-text{
            &[disabled]{
                cursor: not-allowed;
                color: gray;
            }
        }
         .yys-loadingIng{
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: #40a9ff #40a9ff #40a9ff transparent;
            border-style: solid;
            border-width: 2px;
            animation: yys-spin 1s infinite linear;
        }
        @keyframes yys-spin {
            0%{transform: rotate(0deg)}
            100%{transform: rotate(360deg)}
        }

    }
</style>