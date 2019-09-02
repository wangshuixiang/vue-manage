<template>
    <div class="toolBar">
        <div class="barBox">
            <Tooltip content="Right Center text" class="tool" v-for="(el,index) in toolList" placement="right">
                <Icon type="ios-brush"/>
            </Tooltip>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toolBar",
        data() {
            return {
                toolList: [
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'bckColor',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'bckColor',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'bckColor',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'bckColor',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'select',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'move',
                        icon: '',
                        des: ''
                    },
                    {
                        type: 'bckColor',
                        icon: '',
                        des: ''
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    .toolBar {
        width: 45px;
        margin-left: 5px;
        height: 100%;
        overflow: auto;

        .barBox {
            margin-top: 5px;
            width: 40px;
            height: auto;
            background-color: #474747;

            .tool {
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 24px;
                color: #ddd;
                cursor: pointer;
            }

            .sel,
            .tool:hover {
                background-color: #2d8cf0;
            }
        }
    }
</style>
