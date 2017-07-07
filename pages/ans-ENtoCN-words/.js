var app = getApp()
Page({
  data: {
    opacity: '1.0', //输入时的遮罩层透明度
    bgcolor: 'white', //遮罩层的颜色
    showstatus: 'hide',   //选择框隐藏和出现的状态
    input:'',
    itemcolor: '#fff', //按下每个词语时，变换选中状态
  },
    //输入框获取焦点时修改首页下方遮罩层颜色
  onfocus: function () {
    this.setData({
      opacity: '0.7'
    })
    this.setData({
      bgcolor: '#ccc'
    })
  },
  //输入框失去焦点时回复遮罩层颜色
  offfocus: function () {
    this.setData({
      opacity: '1.0'
    })
    this.setData({
      bgcolor: '#fff'
    })
  },
  //根据输入情况，自动判断是否弹出选择框
  inputchar: function (e) {
    if (e.detail.value != "") {
      this.setData({
        showstatus: 'show'
      })
    }
    if (e.detail.value == "") {
      this.setData({
        showstatus: 'hide'
      })
    }
  },
  //点击叉叉时，去除遮罩层，候选栏隐藏，自己的状态隐藏
  cancelInput: function () {
    this.setData({
      input: ""
    })
    this.setData({
      opacity: '1.0'
    })
    this.setData({
      bgcolor: '#fff'
    })
    this.setData({
      showstatus: 'hide'
    })
  },
  //按下每个词语时，变换选中的状态
  dark: function () {
    this.setData({
      itemcolor: '#f3f3f3'
    })
  },
  light: function () {
    this.setData({
      itemcolor: "#fff"
    })
  },
  //当跳出遮罩栏和搜索结果栏时，点击任意的外部界面使其恢复正常，去掉搜索结果栏和遮罩栏
  recover: function () {
    this.setData({
      opacity: '1.0'
    })
    this.setData({
      bgcolor: '#fff'
    })
    this.setData({
      showstatus: 'hide'
    })
  },
  //跳转到查词结果页面
  navigateToAns: function (e) {
    wx.redirectTo({
      url: '../ans/ans',
    })
    this.setData({
      input: "",
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide'
    })
  },
})