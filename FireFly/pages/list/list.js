// pages/list/list.js
import fetch from "../../fetch"
import setinfo from "../../setinfo"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //数据
        dataArray:[],
        title:'综合',
        //价格
        price:true,
        searchContent:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/lists'+setinfo.sitelast+'&page=1&sortType=all&sortPrice=0&category_id=0&search='+options.search,method:'GET'}).then(data=>{
           
            this.setData({
                dataArray:data.data.data.list.data,
                searchContent:options.search
            })

        }).catch(error=>{
            console.log(error)
        })
    },
    //回到搜素页面
    goToSearch(){
        wx.navigateTo({
          url: '../search/search',
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },

    //去详情页面
    goToGoods(e){
        wx.navigateTo({
          url: '../goods/goods?goos_id='+e.currentTarget.dataset.goos_id,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    // 选择规则
    selectGoods(e){
        if(e.currentTarget.dataset.title=="综合"){
            fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/lists'+setinfo.sitelast+'&page=1&sortType=all&sortPrice=0&category_id=0&search='+this.data.searchContent,method:'GET'}).then(data=>{
                // console.log(data.data.data.list.data)
                this.setData({
                    dataArray:data.data.data.list.data,
                    title:e.currentTarget.dataset.title
                })
    
            }).catch(error=>{
                console.log(error)
            })
        }else{
            fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/lists'+setinfo.sitelast+'&page=1&sortType=sales&sortPrice=0&category_id=0&search='+this.data.searchContent,method:'GET'}).then(data=>{
                // console.log(data.data.data.list.data)
                this.setData({
                    dataArray:data.data.data.list.data,
                    title:e.currentTarget.dataset.title
                })
    
            }).catch(error=>{
                console.log(error)
            })

        }
    },
    //价格
    selectPrice(e){
        if(this.data.price){
            fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/lists'+setinfo.sitelast+'&page=1&sortType=price&sortPrice=0&category_id=0&search='+this.data.searchContent,method:'GET'}).then(data=>{
                console.log(data.data.data.list.data)
                this.setData({
                    dataArray:data.data.data.list.data,
                    title:e.currentTarget.dataset.title,
                    price:!this.data.price
                })
    
            }).catch(error=>{
                console.log(error)
            })

        }else{
            fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/lists'+setinfo.sitelast+'&page=1&sortType=price&sortPrice=1&category_id=0&search='+this.data.searchContent,method:'GET'}).then(data=>{
                // console.log(data.data.data.list.data)
                this.setData({
                    dataArray:data.data.data.list.data,
                    title:e.currentTarget.dataset.title,
                    price:!this.data.price
                })
    
            }).catch(error=>{
                console.log(error)
            })

        }
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