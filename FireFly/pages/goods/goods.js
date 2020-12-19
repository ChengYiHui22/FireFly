// pages/goods/goods.js
import fetch from "../../fetch"
import setinfo from "../../setinfo"
let wxParse = require('../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //轮播
        indicatorDots: true,//导航点
        autoplay: true,
        circular: true, //衔接滑动
        interval: 5000,
        duration: 1000,
        image:[],
        current:0,
        dataObj:{},
        activeNames: ['1'],
        value:1,//购买数量
        top:0,
        show:false,
       
    },
    onChange(event) {
        this.setData({
          activeNames: event.detail,
        });
      },
      //添加购买数量
      onCount(){
          this.setData({
            value:this.data.value+1
          })
      },
      //减少购买数量
      downCount(){
       if( this.data.value!=1){
        this.setData({
          value:this.data.value-1
        })
       }else{
        this.setData({
          value:1
        })
          
      }
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
      //显示图标
      showIcon(){
        this.setData({
          show:!this.data.show
        })
      },
//跳转页面
goToBar(e){
    wx.switchTab({
      url:e.currentTarget.dataset.title,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        fetch({url:setinfo.siteroot+setinfo.sitefirst+'goods/detail'+setinfo.sitelast+'&goods_id='+options.goos_id,method:'GET'}).then(data=>{
            console.log(data.data.data.detail)
            this.setData({
                image:data.data.data.detail.image,
                dataObj:data.data.data.detail,
            })
            let _this = this;
            wxParse.wxParse('content', 'html', data.data.data.detail.content,_this, 0);
            
        }).catch(error=>{
            console.log(error)
        })
       


       
    },
    //改变当前页
    swiperChange: function(e) {
        console.log(e.detail.source )
        if (e.detail.source == 'touch') {
          this.setData({
            current: e.detail.current,
           
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