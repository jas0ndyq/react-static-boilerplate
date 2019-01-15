/*global require*/
require('es6-promise').polyfill();
import axios from 'axios';
import qs from 'qs';
import ADDRESS from '@helpers/address';
import callToast from '@helpers/helper';

axios.defaults.headers.post['Content-Type'] = 
  'application/x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
  // config.timeout = 30000;
  // change post data type to form
  if(config.method == 'post') {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // for(let i in config.data) {
    //   if (config.data[i] === null || config.data[i] === '') {
    //     delete config.data[i]
    //   }
    // }
    config.data = qs.stringify(config.data, {arrayFormat: 'brackets'});
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (res) {
  // console.log(res, APP_NO_TOAST.indexOf(res.config.url) == -1);
  // if(res.data.code != 1 && res.data.code != 10300) {
  //   if(APP_NO_TOAST.indexOf(res.config.url) == -1) {
  //     callToast(res.data.message, 'error');
  //   }
  // }
  // if(res.data.code == 10300) {
  //   const _current = router.currentRoute.fullPath;
  //   if(_current != '' && _current != '/reset' && _current != '/login') {
  //     store.dispatch('userInfo/updateUserInfo', {});
  //     router.push({
  //       path: '/login',
  //       query: {
  //         src: _current
  //       }
  //     });
  //   }
  //   else {
  //     store.dispatch('userInfo/updateUserInfo', {});
  //     router.push('/login');
  //   }
  // }
  // console.log('res is', res);
  return res;
}, function (error) {
  callToast('网络有点问题哦~', 'error');
  return Promise.reject(error);
});

export default axios;