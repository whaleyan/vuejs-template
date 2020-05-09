import ajax from '@/libs/ajax';
import urls from '@/config/url';
let baseUrl = urls.baseUrl;

export default {
  // 获取店铺信息
  getCommodityInfo(params) {
    return new Promise((resolve, reject) => {
        ajax.get(baseUrl + '/paytest/getShopinfo', { params: params }).then(function (response) {
            resolve(response);
        }).catch(function (error) {
            console.log('Error:', error);
            // reject(error);
        });
    });
  },
  // pay(params) {
  //     return new Promise((resolve, reject) => {
  //         ajax.post(baseUrl + '/sys/user/page', params).then(function(response) {
  //             resolve(response);
  //         }).catch(function(error) {
  //             console.log('Error:', error);
  //             // reject(error);
  //         });
  //     });
  // },
  // getItems(params) {
  //     return new Promise((resolve, reject) => {
  //         ajax.get(baseUrl + '/sys/user/page', { params: params }).then(function(response) {
  //             resolve(response);
  //         }).catch(function(error) {
  //             console.log('Error:', error);
  //             // reject(error);
  //         });
  //     });
  // }
}
