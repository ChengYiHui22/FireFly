// pages/classfiy/classify.js
import fetch from "../../fetch"
import setinfo from "../../setinfo"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categoryList:[],//商品分类
        goodsList:[],//全部商品
        dataDetail:[],//商品详情
        title:'全部',//判断左侧样式

    },
// 选择商品分类
selectCategory(e){
    console.log(e.currentTarget.dataset.id)
    fetch({url:setinfo.siteroot+setinfo.sitefirst+'category/index'+setinfo.sitelast+'&category_id='+e.currentTarget.dataset.id,method:'GET'}).then(data=>{
        console.log(data.data.data)
        this.setData({
            title:e.currentTarget.dataset.title,
            dataDetail:data.data.data.goodsList.data,
        })
       
    }).catch(error=>{
        console.log(error)
    })
},
//去物品详请页
    goToGoods(e){
        wx.navigateTo({
          url: '../goods/goods?goos_id='+e.currentTarget.dataset.goos_id,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        fetch({url:setinfo.siteroot+setinfo.sitefirst+'category/index'+setinfo.sitelast,method:'GET'}).then(data=>{
            // console.log(data.data.data)
            this.setData({
                goodsList:data.data.data.goodsList,
                dataDetail:data.data.data.goodsList.data,
                categoryList:data.data.data.categoryList
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