<template>
    <div>
        <div class="upload" @click="openFiles" v-if="!imgData">
            <div>
                <Icon type="ios-add"/>
                <br>
                <span>添加图片</span>
            </div>
        </div>
        <input ref="input" v-show="false" id="uploadImg" type="file" accept="image"
               @change="fileChange($event.target.files)">
        <div class="imgBox" v-if="imgData">
            <img :src="imgData" alt="">
            <div class="modalBox">
                <ButtonGroup size="small" shape="circle" class="btnG">
                    <Button @click="openFiles">替换</Button>
                    <Button @click="del">删除</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            imgData: String,
            type: String,
            id: Number
        },
        data() {
            return {}
        },
        methods: {
            // 触发input点击事件
            openFiles() {
                this.$refs.input.click()
            },
            // 删除
            del() {
                this.$emit('delImg', this.type)
            },
            // 选择文件
            fileChange(files) {
                let formData = new FormData();
                formData.append(this.type, files[0]);
                formData.append('id', this.id);
                if (files[0]) {
                    console.log(files[0]);
                    if (files[0].size > 1024 * 1024 * 5) {
                        this.$Message.error('请选择小于5M的图片！')
                    } else {
                        if (this.type == 'favicon_url') {
                            if (files[0].type != "image/x-icon") {
                                this.$Message.error('请上传ico图片！')
                            } else {
                                this.uploadHandler(formData);
                            }
                        } else {
                            if (files[0].type != "image/png") {
                                this.$Message.error('请上传png图片！')
                            } else {
                                this.uploadHandler(formData);
                            }
                        }
                    }
                }
            },

            //上传图片
            async uploadHandler(formData) {
                let pd = formData;
                let api = this.$api['custom']['uploadLogo'];
                const res = await this.$ajax.ajaxAction(api, null, pd);
                if (!res.success) {
                    return;
                }
                this.$emit('finsh', res.data, this.type)
            }
        }
    }
</script>
<style lang="less" scoped>
    .container {
        display: inline-block;
    }

    .ivu-icon {
        font-size: 28px;
    }

    .upload {
        width: 100px;
        height: 100px;
        border: 1px dashed #999;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        // position: relative;
        div {
            text-align: center;
            color: #999;
        }
    }

    .upload:hover {
        border-color: #4D7CFE;
        color: #4D7CFE;
    }

    .upload:hover div {
        color: #4D7CFE;
    }

    .imgBox {
        width: 240px;
        height: 168px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        display: flex;

        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            max-height: 100%;
            max-width: 100%;
        }

        .modalBox {
            // display: none;
            opacity: 0;
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            top: 0;
            width: 240px;
            height: 168px;
            // width: 100%;
            // height: 100%;
            background: rgba(0, 0, 0, 0.6);

            .btnG {
                position: absolute;
                top: 10px;
                right: 10px;
                // display: flex;
                // width: 83px;
                // height: 25px;
                button {
                    background-color: transparent;
                    color: #fff;
                }

                .ivu-btn:hover {
                    color: #57a3f3;
                }
            }
        }
    }

    .imgBox:hover .modalBox {
        display: block;
        opacity: 1;
    }
</style>
