<template>
    <div class="actionBar">
        <div class="barBox" v-for="(el,index) in doList">
            <div class="tab radio" v-if="el.type=='radio'">
                <Checkbox v-model="el.value">{{el.name}}</Checkbox>
            </div>
            <div class="tab input" v-if="el.type=='input'">
                <span>{{el.name}}</span>
                <Input v-model="el.value" size="small" placeholder="small size"
                       style="width: 40px;margin: 4px 0 0 8px"/>
            </div>
            <div class="tab slide" v-if="el.type=='slide'">
                <span>{{el.name}}</span>
                <Slider v-model="el.value" :step="el.step" :min="el.min" :max="el.max"
                        style="width: 60px;margin: -2px 8px"></Slider>
            </div>
            <div class="tab select" v-if="el.type=='select'">
                <Dropdown placement="bottom-start">
                    <Button type="primary" size="small">
                        {{el.name}}
                        <Icon type="ios-arrow-down"></Icon>
                    </Button>
                    <DropdownMenu slot="list">
                        <DropdownItem v-for="(el,index) in el.list">{{el.name}}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "actionBar",
        data() {
            return {
                doList: [
                    {
                        type: "radio",  //radio  slide  select input
                        icon: '',
                        name: "自动选择",
                        value: false,
                    },
                    {
                        type: "input",  //radio  slide  select input
                        icon: '',
                        name: "宽",
                        value: 2,
                    },
                    {
                        type: "slide",  //radio  slide  select input
                        icon: '',
                        name: "缩放",
                        value: 2,
                        step: 0.1,
                        min: 0.5,
                        max: 3.5
                    },
                    {
                        type: "select",  //radio  slide  select input
                        icon: '',
                        name: "释放",
                        value: 1,
                        list: [
                            {
                                name: '释放',
                                value: '1',
                            },
                            {
                                name: '固定大小',
                                value: '2',
                            },
                            {
                                name: '固定比例',
                                value: '3',
                            }
                        ],
                    }
                ],
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .actionBar {
        width: 100%;
        height: 32px;
        line-height: 32px;
        margin-top: 1px;
        background-color: #474747;
        color: #ddd;
        padding: 0 20px;
        display: flex;

        .barBox {
            margin-right: 15px;

            .tab {
                display: flex;
            }

            .slide {

            }
        }
    }
</style>
