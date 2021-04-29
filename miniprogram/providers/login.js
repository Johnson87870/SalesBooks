'use strict';

const Login = {
  sendUserOpenId: () => {
    wx.cloud.callFunction({
      name:'login'
    }).then(res =>{
      // console.log('res',res)
      // wx.setStorageSync('username', res.result.openid)
      // 发送openId
    })
  },
}

module.exports = {
  Login
}


