const app =getApp();
Page({
  data:{
    isIphonex:false,
    longitude: 0,
    latitude: 0 ,
    controls: [{
      id: 1,
      iconPath: '../resources/back.jpg',
      position: {
        left: 0,
        top: app.getsysinfo().windowHeight - 100,          
        width: 30,
        height: 30
      },
      clickable: true
    },{
        id: 2,
        iconPath: '../resources/location.jpg',
        position: {
          left: (app.getsysinfo().windowWidth / 2 - 15),
          top: (app.getsysinfo().windowHeight/2 -20),
          width: 30, 
          height: 30
        },
        clickable: true
    }
    ]
  },
  
  onReady(){
    this.mapCtx = wx.createMapContext('myMap');
    if (app.getsysinfo().model === 'iPhone X'){
      this.setData( {
        isIphonex:true
      })
    }
      wx.authorize({
        scope: 'scope.userLocation',
        success: (res) => {
          console.log('成功：', res)
        },
        fail: (res) => {
          console.log('失败：', res)
        },
      })

    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log("info",res)
        let { latitude, longitude } = res
        this.setData({
          longitude,
          latitude
        })
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  },

  controltap(){
    console.log(this.data.latitude)
    this.mapCtx.moveToLocation()
  },
  publishTO(){
    console.log(2)
    wx.navigateTo({
      url: '/pages/public/index',
    })
  }
})