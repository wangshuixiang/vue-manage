<template>
    <div class="canvasBox">
        <div class="canvas-cus">

        </div>
    </div>
</template>

<script>
    export default {
        name: "canvasBox"
    }
</script>

<style scoped lang="less">
    .canvasBox {
        width: calc(100vw - 250px);
        height: calc(100vh - 125px);
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 5px 0;

        .canvas-cus {
            width: 800px;
            height: 800px;
            margin: auto;
            background-color: #ccc;
        }
    }
</style>
