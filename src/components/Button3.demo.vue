<demo>
    支持 Size
</demo>
<template>
    <div>
        <Button level="main">主要链接按钮</Button>
        <Button>普通链接按键</Button>
        <Button level="danger">危险链接按钮</Button>
    </div>
    <div>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按键</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
        <Button theme="text" level="main">主要链接按钮</Button>
        <Button theme="text">普通链接按键</Button>
        <Button theme="text" level="danger">危险链接按钮</Button>
    </div>
</template>
<script>
    import Button from "../lib/Button.vue";
    export default {
        components: {Button}
    };
</script>