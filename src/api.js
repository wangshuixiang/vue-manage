let HOST_URL = window.location.protocol + '//' + window.location.host + '/r/';
let APITool = {};

APITool['setting'] = {
    getMenuTree: {
        url: HOST_URL + 'setting/menuTree',
        method: 'GET'
    }
};

APITool['user'] = {
    //登录
    login: {
        url: HOST_URL + 'api/v1/api-auth',
        method: 'POST'
    },

    //退出
    loginOut: {
        url: HOST_URL + 'api/v1/api-auth',
        method: 'GET'
    },
};

APITool['custom'] = {
    //获取状态列表
    getStatusList: {
        url: HOST_URL + 'api/v1/custom/status/list',
        method: 'GET'
    },

    //获取账户列表
    getAccountList: {
        url: HOST_URL + 'api/v1/custom/list',
        method: 'GET'
    },
    //添加账户
    addAccount: {
        url: HOST_URL + 'api/v1/custom/add',
        method: 'POST'
    },
    //删除账户
    deleteAccount: {
        url: HOST_URL + 'api/v1/custom/delete',
        method: 'POST'
    },
    //编辑账户
    editAccount: {
        url: HOST_URL + 'api/v1/custom/update',
        method: 'POST'
    },
    //获取账户详情
    getAccountDetail: {
        url: HOST_URL + 'api/v1/custom/detail',
        method: 'GET'
    },


    //获取客户资料列表
    getCustomList: {
        url: HOST_URL + 'api/v1/custom/data/list',
        method: 'GET'
    },
    //编辑客户资料
    editCustom: {
        url: HOST_URL + 'api/v1/custom/data/update',
        method: 'POST'
    },
    //获取客户资料详情
    getCustomDetail: {
        url: HOST_URL + 'api/v1/custom/data/detail',
        method: 'GET'
    },


    //获取阿里云信息列表
    getAliInfoList: {
        url: HOST_URL + 'api/v1/custom/aliyun/list',
        method: 'GET'
    },
    //编辑阿里云信息
    editAliInfo: {
        url: HOST_URL + 'api/v1/custom/aliyun/update',
        method: 'POST'
    },
    //获取阿里云信息详情
    getAliInfoDetail: {
        url: HOST_URL + 'api/v1/custom/aliyun/detail',
        method: 'GET'
    },


    //获取客户logo列表
    getCustomLogoList: {
        url: HOST_URL + 'api/v1/custom/logo/list',
        method: 'GET'
    },
    //编辑客户资料
    editCustomLogo: {
        url: HOST_URL + 'api/v1/custom/logo/update',
        method: 'POST'
    },
    //获取客户资料详情
    getCustomLogoDetail: {
        url: HOST_URL + 'api/v1/custom/logo/detail',
        method: 'GET'
    },
    //上传logo图片
    uploadLogo: {
        url: HOST_URL + 'api/v1/custom/logo/upload',
        method: 'POST'
    },


    //获取官网列表
    getWebSiteList: {
        url: HOST_URL + 'api/v1/custom/website/list',
        method: 'GET'
    },
    //编辑官网资料
    editWebSite: {
        url: HOST_URL + 'api/v1/custom/website/update',
        method: 'POST'
    },
    //获取官网详情
    getWebSiteDetail: {
        url: HOST_URL + 'api/v1/custom/website/detail',
        method: 'GET'
    }
};

export default APITool;
