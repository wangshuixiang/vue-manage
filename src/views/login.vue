<template>
    <div class="login">
        <div class="loginBox">
            <Button type="primary" @click="login()">Primary</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {}
        },

        mounted() {
        },

        methods: {
            login() {
                let info = {
                    name: 'wsx',
                    id: 1,
                    money: 1000
                };
                this.$store.commit('changeUserInfo', info);
                this.$router.push({name: 'homeIndex'});
            },
        }
    }
</script>

<style scoped lang="less">
    .login {
        width: 100%;
        height: 100%;
        background-color: #42b983;

        .loginBox {
            width: 600px;
            height: 400px;
            background-color: #fff;
            /*margin: 50px auto;*/
        }
    }
</style>
