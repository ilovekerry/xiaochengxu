// map.js
Page({
  data:{
    navArray: [
      { name: 'AQI', selected: true, unique: 'unique_0' },
      { name: 'PM', number: 2.5, selected: false, unique: 'unique_1' },
      { name: 'PM', number: 10, selected: false, unique: 'unique_2' },
      { name: 'SO', number: 2, selected: false, unique: 'unique_3' },
      { name: 'NO', number: 2, selected: false, unique: 'unique_4' },
      { name: 'O', number: 3, selected: false, unique: 'unique_5' },
      { name: 'CO', selected: false, unique: 'unique_6' },
    ]
  },
  changeNav:function(e){
    let unique = e.currentTarget.dataset.unique;    
    let tempArr = [];
    this.data.navArray.forEach((item)=>{
      if (unique === item.unique){
        item.selected = true;
      }else{
        item.selected = false;
      };
      tempArr.push(item);
    });
    this.setData({navArray:tempArr});
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})