// pages/search/search.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchContent:'',//搜索内容
        searchHistroy:[],
        


    },
    getSeachContent(e){
        this.setData({
            searchContent:e.detail.value
        })
    },
    searchBtn(){
     this.setData({
         searchHistroy:[...this.data.searchHistroy,this.data.searchContent]
     })
        wx.setStorage({
          data: [...new Set(this.data.searchHistroy)],
          key: 'searchHistory',
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
        
        wx.navigateTo({
          url: '../list/list?search='+this.data.searchContent,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    // 清除历史记录
    deleteHistory(){
        wx.removeStorage({
          key: 'searchHistory',
          success: (res) => {
            this.setData({
                searchHistroy:[]
            })
          },
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        //获取搜素历史
        this.setData({
            searchHistroy:wx.getStorageSync('searchHistory')
        })
       

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