<template>
    <div class="design">
        <Layout style="width:100%;height: 100%">
            <Header class="design-head">
                <task-bar></task-bar>
                <action-bar></action-bar>
            </Header>
            <Content class="design-content">
                <tool-bar></tool-bar>
                <canvas-box></canvas-box>
                <para-bar></para-bar>
            </Content>
        </Layout>
    </div>
</template>

<script>
    import taskBar from "./components/taskBar";
    import actionBar from "./components/actionBar";
    import toolBar from "./components/toolBar";
    import canvasBox from "./components/canvasBox";
    import paraBar from "./components/paraBar";

    export default {
        name: "index",
        data() {
            return {
                src: '',
            }
        },
        components: {taskBar, actionBar, toolBar, canvasBox, paraBar},

        mounted() {
        },

        methods: {}
    }
</script>

<style scoped lang="less">
    .design {
        width: 100%;
        height: 100%;

        .design-head {
            height: 63px;
            padding: 0;
            background-color: #303030;
        }

        .design-content {
            background-color: #303030;
            display: flex;
            flex-flow: row;
        }
    }
</style>
