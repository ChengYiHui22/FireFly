// pages/Mine/mine.js
import fetch from "../../fetch"
import setinfo from "../../fetch"
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loginTitle:'点击登录'
    },
  

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
      getUserInfo: function(e) {
          let code;
        wx.login({
            success: res => {
                console.log(res.code)
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              fetch({url:'http://47.105.96.139:8081/index.php?s=/api/user/login',data:{ 
                wxapp_id: 10001,
                code:res.code,
                user_info: e.detail.rawData,
                encrypted_data: e.detail.encryptedData,
                iv: e.detail.iv,
                signature: e.detail.signature},method:'POST'}).then(data=>{
                     console.log(data)
                }).catch(error=>{
                    console.log(error)
                })
            }
          })
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
        

      },





    loginBtn(){
        // 登录
     // 
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})