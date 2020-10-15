<template>
    <div>
        <div class="topNavAndBanner">
            <router-link to="doc/install" class="topRight">文档</router-link>
            <div class="banner">
                <h1>yys-UI</h1>
                <h2>个人的第一个库</h2>
                <p class="actions">
                    <a href="https://github.com/sbgrb/yys-ui-code">Github</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>使用了 Vue 3的API</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript</h3>
                    <p>源代码采用TypeScript书写</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>源码 通俗易懂</p>
                </li>
            </ul>
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
    .topRight{
        color:gray;
        display:inline-block;
        padding: 16px 0;
        padding-left: 90%;
        &:hover {
            text-decoration: none;
        }
    }
    .topNavAndBanner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .features {
        margin: 64px auto;
        padding: 0 64px;

        @media (min-width: 800px) {
            width: 800px;
            > ul{
                >li{
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            > ul{
                >li{
                    width: 33.333%;
                }
            }
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: 'icon title''icon text';
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text;
                }
            }
        }
    }

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                display: inline-block;
                border-radius: $border-radius;
                padding: 8px 24px;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>
