const app = getApp()
const moment = require('../../js/moment.min');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title:'账单列表',
    },
    height: app.globalData.height * 2 + 10,
    showFilter:false,
    filterDate:{
      year:'2021',
      month:'05',
      day:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
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
    
  },
  
  selectDate () {
    this.setData({
      showFilter:true,
    })
  },
  // 筛选日期确认按钮返回
  onConfirm (e) {
    const {data} = e.detail;
    this.setData({
      showFilter: false,
      filterDate:{
        year: moment(data).format('YYYY'),
        month: moment(data).format('MM'),
        day: moment(data).format('DD'),
      }
    })
  },
  // 筛选日期取消按钮返回
  onCencel(e) {
    this.setData({
       showFilter: false,
    })
  }
})