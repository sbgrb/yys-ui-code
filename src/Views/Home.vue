<template>
<div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
        <h1>UI</h1>
        <h2>一个UI框架</h2>
        <p class="actions">
            <a href="https://github.com">Github</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
    <div class="features">
        <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-ts"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-list"></use>
        </svg>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
export default {
    components: {
        TopNav
    }
}
</script>

<style lang="scss" scoped>
    $green: #02bcb0;
    $border-radius: 4px;
    $color: #007974;
    .topNavAndBanner{
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    }
    .features{
        > svg{
            width: 64px;
            height: 64px;
        }
    }
    .banner{
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > .actions{
            padding: 8px 0;
            a {
                margin: 0 8px;
                background: $green;
                display: inline-block;
                border-radius: $border-radius;
                padding:8px 24px;

                &:hover{
                    text-decoration: none;
                }
            }
        }
    }
</style>
