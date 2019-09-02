import axios from 'axios';
import iView from 'iview'
import router from './router'

const action = {
    ajaxAction: (api, options, postData, msgAlert) => new Promise(
        (resolve, reject) => {
            let url = api.url;
            if (url.indexOf("?") < 0) {
                url += '?_dt=' + Math.random();
            }

            if (options && typeof options === 'object') {
                for (let k in options) {
                    url += '&' + k + '=' + options[k];
                }
            }

            if (msgAlert === undefined) {
                msgAlert = true;
            }

            let headEdit = {
                headers: {
                    'Authorization': localStorage.token || ''
                }
            };

            if (api.method === 'GET') {
                axios.get(url, headEdit).then((r) => {
                    r.data.success = r.data.status ? true : false;
                    if (!r.data.success && msgAlert !== 'silent') {
                        iView.Message.error(r.data.message);
                    }
                    if (r.data.message == "Signature has expired.") {
                        router.push({name:'login'});
                    }
                    resolve(r.data);
                }, (r) => {
                    if (r.response.status === 403) {
                        resolve({
                            success: true,
                            message: '',
                            value: null
                        });
                    } else {
                        reject(r.data);
                    }
                });
            } else if (api.method === 'POST') {
                axios.post(url, postData, headEdit).then((r) => {
                    r.data.success = r.data.status ? true : false;
                    if (!r.data.success && msgAlert !== 'silent') {
                        iView.Message.error(r.data.message);
                    }
                    if (r.data.message == "Signature has expired.") {
                        router.push({name:'login'});
                    }
                    resolve(r.data);
                }, (r) => {
                    reject(r.data);
                });
            } else if (api.method === 'DELETE') {
                axios.delete(url, headEdit).then((r) => {
                    r.data.success = r.data.status ? true : false;
                    if (!r.data.success && msgAlert !== 'silent') {
                        iView.Message.error(r.data.message);
                    }
                    if (r.data.message == "Signature has expired.") {
                        router.push({name:'login'});
                    }
                    resolve(r.data);

                }, (r) => {
                    reject(r.data);
                });
            } else if (api.method === 'PUT') {
                axios.put(url, postData, headEdit).then((r) => {
                    r.data.success = r.data.status ? true : false;
                    if (!r.data.success && msgAlert !== 'silent') {
                        iView.Message.error(r.data.message);
                    }
                    if (r.data.message == "Signature has expired.") {
                        router.push({name:'login'});
                    }
                    resolve(r.data);
                }, (r) => {
                    reject(r.data);
                });
            }

        })
};

export default action;
