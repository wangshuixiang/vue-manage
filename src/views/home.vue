<template>
    <div class="layout mainBox">
        <Layout style="width: 100vw;height: 100vh">
            <Header class="header">
                <div class="logoBox">logo</div>
                <div class="funBox">
                    <div class="fun sel">智能设计</div>
                    <div class="fun">花型商城</div>
                    <div class="fun">设计花型</div>
                    <div class="fun">试衣间</div>
                </div>
            </Header>
            <Content class="content">
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="less">
    .mainBox {
        .header {
            height: 52px;
            background-color: #303030;
            display: flex;
            padding: 0 0 0 20px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #474747;

            .logoBox {
                width: 40px;
                height: 40px;
                background-color: #eee;
                border-radius: 8px;
                line-height: 40px;
                color: #333;
                font-size: 14px;
                text-align: center;
                cursor: pointer;
                font-weight: bold;
            }

            .funBox {
                display: flex;
                flex-flow: row;

                .fun {
                    width: 80px;
                    line-height: 51px;
                    font-size: 14px;
                    color: #aaa;
                    cursor: pointer;
                    text-align: center;
                }

                .sel,
                .fun:hover {
                    background-color: #111;
                    color: #fff;
                }
            }
        }

        .content {
            /*background-color: #303030;*/
        }
    }
</style>
