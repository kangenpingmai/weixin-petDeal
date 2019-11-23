Page({
  data: {
    isSubmited: false,
    isSucc: false,
    address: '请选择地址',
    type: 'buy',
    message: '',
    contact: ''
  },

  chooseAddress() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          address: res.address
        })
        this.latitude = res.latitude
        this.longitude = res.longitude
      }
    })
  },

  handleChange(e) {
    console.log(e)
    this.setData({
      type: e.detail.value
    })
  },

  handleMessageInput(e) {
    console.log(121)
    console.log(e)
    this.setData({
      message: e.detail.value
    })
  },

  handleContactInput(e) {
    console.log(e)
    this.setData({
      contact: e.detail.value
    })
  },

  showToast(title) {
    wx.showToast({
      title,
      icon: 'loading',
      duration: 2000
    })
  },

  submit() {
    let { address, message, contact, type } = this.data
    let { latitude, longitude } = this

    if (address === '请选择地址') {
      this.showToast('请选择地址')
      return
    }
    if (!message) {
      this.showToast('请填写信息')
      return
    }
    if (!contact) {
      this.showToast('请填写联系方式')
      return
    }

    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/add_item',
      method: 'POST',
      data: {
        address,
        latitude,
        longitude,
        message,
        contact,
        type
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if (res.data.ret) {
          this.setData({
            isSubmited: true,
            isSucc: true
          })
        } else {
          this.setData({
            isSubmited: true,
            isSucc: false
          })
        }
      },
      fail: (res) => {
        this.setData({
          isSubmited: true,
          isSucc: false
        })
      }
    })
  }
})