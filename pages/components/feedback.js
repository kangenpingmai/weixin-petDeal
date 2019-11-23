// components/feedback.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSubmited: {
      type: Boolean,
      value: true,
      observer(NewProps, OldProps) {

      }
    },
    isSucc: {
      type: Boolean,
      value: false,
      observer(NewProps, OldProps) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      wx.navigateBack({})
    }
  }
})
