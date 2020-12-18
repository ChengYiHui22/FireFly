// pages/First/first.js
import fetch from "../../fetch"
import setinfo from "../../setinfo"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图片
        imgarray:{},
        best:[],
        newest:[],
        top:0,
        scrollTop:0
            
    },
    goTo(e){
        wx.navigateTo({
          url: '../goods/goods?goos_id='+e.detail.goods,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    //监听界面滚动
    onPageScroll (e) { 
        if(e.scrollTop>300){
            this.setData({
                top:1
            })
        }else{
            this.setData({
                top:0,
            })
        }
        },
        //回到顶部
        goTop(e){
        wx.pageScrollTo({
          duration: 0,
          scrollTop:0,
        })
        },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        fetch({url:setinfo.siteroot+setinfo.sitefirst+'index/page'+setinfo.sitelast,method:'GET'}).then(data=>{
            console.log(data.data.data)
            this.setData({
                imgarray:data.data.data.items.n606196612728596.data,
                newest:data.data.data.newest,
                best:data.data.data.best
            })
        }).catch(error=>{
            console.log(error)
        })
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