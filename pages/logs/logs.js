//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    logs: [],
    userInfo: {},
    hidden: true,
    list: [
      {
        name: '发布书籍信息',
        imageUrl: '../../images/uploadBook.png',
        iconUrl: '../../images/forward.jpg'
      },
      {
        name: '设置',
        imageUrl: '../../images/settings.png',
        iconUrl: '../../images/forward.jpg'
      }
    ]
  },
  onLoad: function () {
    var that = this;
    this.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(that.data.userInfo);
  }
})
