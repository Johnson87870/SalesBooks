// components/FilterBox/FilterBox.js
const moment = require('../../js/moment.min');

Component({
   /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      show: false,
      screeningDate: '',
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } 
        if (type === 'month') {
          return `${value}月`;
        }
        return value;
      },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput(event) {
      this.setData({
        currentDate: event.detail,
      });
    },
    onConfirm(event) {
      this.setData({
        screeningDate: moment(event.detail).format('YYYY年MM月DD日')
      })
      this.onClose();
    },
    showPopup() {
      this.setData({ show: true })
    },
    onClose() {
      this.setData({ show: false })
    }
  }
})