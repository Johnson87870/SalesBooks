// components/Navbar/Navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 0,
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    }
  },

  attached: function () {
    wx.getSystemInfo({
      success: (res) => {
        const { statusBarHeight } = res;
        this.setData({
          height: statusBarHeight
        })
      }
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页面
    _navback() {
      wx.navigateBack()
    },
  //返回到首页
    _backhome() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }
})
