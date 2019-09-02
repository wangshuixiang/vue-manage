import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {    //要设置的全局访问的state对象
    userInfo: null
};

const getters = {   //实时监听state值的变化(最新状态)
    getUserInfo() {  //方法名随意,menuTree
        return state.userInfo
    }
};

const mutations = {    //设置state的值；
    changeUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
};

const actions = {
    getUserInfo(context) {
        let userInfo = {
            name: 'wsx',
            id: 1,
            money: 1000
        };
        context.commit('changeUserInfo', userInfo);
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store
