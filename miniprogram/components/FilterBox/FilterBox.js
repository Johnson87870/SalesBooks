// components/FilterBox/FilterBox.js
const moment = require('../../js/moment.min');

Component({
   /**
   * 组件的属性列表
   */
  properties: {
    filterDate: String,
    FilterType:String,
    show: Boolean
  },

  attached: function () { 
    this.setData({
      currentDate: Number(moment(this.data.filterDate).format('x')),
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
      filterDate:'',
      show: false,
      FilterType: '',
      currentDate: '',
      screeningDate: '',
      minDate:  '',
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } 
        if (type === 'month') {
          return `${value}月`;
        }
        if (type === 'day'){
          return `${value}日`;
        }
        return value;
      },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput(event) {
      // this.setData({
      //   currentDate: event.detail,
      // });
    },
    onConfirm(event) {
      this.triggerEvent('confirm',{ data: event.detail})
      // this.onClose();
    },
    onCancel() {
      this.triggerEvent('cancel');
    }
  }
})