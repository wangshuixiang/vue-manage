<template>
    <div class="taskBar">
        <Dropdown trigger="click" placement="bottom-start" style="margin-left: 20px" v-for="(el,index) in tabList">
            <a href="javascript:void(0)" style="color: #ddd">
                {{el.name}}
            </a>
            <DropdownMenu slot="list">
                <DropdownItem v-for="(ell,index2) in el.list">{{ell.name}}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "taskbar",
        data() {
            return {
                tabList: [
                    {
                        name: '文件',
                        key: 'file',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    },
                    {
                        name: '编辑',
                        key: 'edit',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    },
                    {
                        name: '图像',
                        key: 'image',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    },
                    {
                        name: '图层',
                        key: 'layer',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    },
                    {
                        name: '滤镜',
                        key: 'filter',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    },
                    {
                        name: '视图',
                        key: 'view',
                        list: [
                            {
                                name: '新建',
                                key: 'new'
                            },
                            {
                                name: '打开',
                                key: 'new'
                            },
                            {
                                name: '设置',
                                key: 'new'
                            },
                            {
                                name: '保存',
                                key: 'new'
                            }
                        ],
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .taskBar {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #474747;
    }
</style>
