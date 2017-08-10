// pages/ans-CNtoEN-words/ans-CNtoEN-words.jsPage({

var util = require('../../utils/util.js')
var searchList = require('../../utils/searchList.js')
var css = require('../../utils/css.js')
var pageSkip = require('../../utils/pageSkip.js')
var jsonSource = require('../../utils/jsonSource.js')

var app = getApp()
Page({

/**
 * 页面的初始数据
 */
data: {
    input:'',
    result: [{ "input": "1", "output": "2", "source": "3" }, { "input": "4", "output": "5", "source": "6" }],

    //搜索框部分
    opacity: '1.0', //输入时的遮罩层透明度
    bgcolor: 'white', //遮罩层的颜色
    showstatus: 'hide',   //选择框隐藏和出现的状态
    XXshowstatus: 'hide', //搜索框右边小叉叉隐藏还是出现
    placeholdertxt: '点击查词', //搜索框的提示文本

    //候选框部分
    list: [],  //候选框内容，输入时根据输入内容自动变化
 
    itemcolor: '#fff', //按下每个词语时，变换选中背景色
  },
//事件处理函数
onLoad: function (query) {

  if (util.CountIfEnglishWord(query.input) == false){
    wx.request({
      url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
      data: {
        "language": "Chinese",
        "type": "sentence",
        "query": query.input,
      },
      success: res => {

        var list = [];
        if (typeof (res.data) == "string") {
          //拼接成的字符串如果是string的话，表明还有格式问题，丢到util里面解析一下
          var parse = util.clearBr(res.data);
          list = JSON.parse(parse);
          jsonSource.setSource(parse);
        }
        else {
          //如果直接变成object的话，就可以直接用了
          jsonSource.setSource(res.data);
          list = res.data;
        }

        this.setData({
          result: list,
        })
      }
    })
  }else{
    wx.request({
      url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
      data: {
        "language": "English",
        "type": "sentence",
        "query": query.input
      },
      success: res => {
        var list = [];
        if (typeof (res.data) == "string" && res.data != "") {
          //拼接成的字符串如果是string的话，表明还有格式问题，丢到util里面解析一下
          var parse = util.clearBr(res.data);
          list = JSON.parse(parse);
          jsonSource.setSource(parse);
        }
        else {
          //如果直接变成object的话，就可以直接用了
          jsonSource.setSource(res.data);
          list = res.data;
        }
        this.setData({
          result: list,
        })
      }
    })
  }

  this.setData({
    //设定最上面的那个值
    input: query.input,
  })
},
back: function () {
  wx.navigateBack({
  })
},
start: function (e) { //开始触摸候选栏的信息时，改变颜色
  var txtStyle = "background-color:#f3f3f3";
  var index = e.currentTarget.dataset.index;
  var list = this.data.list;
  list[index].txtStyle = txtStyle;
  this.setData({
    list: list //重新渲染界面
  });
},
end: function (e) {
  var txtStyle = "background-color:#ffffff";
  var index = e.currentTarget.dataset.index;
  var list = this.data.list;
  list[index].txtStyle = txtStyle;
  this.setData({
    list: list
  });
},
//1输入框获取焦点时修改首页下方遮罩层颜色
onfocus: function (e) {
  var str = e.detail.value;
  if (str == "") {
    this.setData({
      XXshowstatus: 'hide'
    })
  } else {
    this.setData({
      XXshowstatus: 'show'
    })
  }
  this.setData({
    opacity: '0.7',
    bgcolor: '#ccc'
  })
},
//2输入框失去焦点时回复遮罩层颜色
offfocus: function () {
  this.setData({
    opacity: '1.0',
    bgcolor: '#fff',
    XXshowstatus:'hide'
  })
},
bindViewTap: function () {
  wx.navigateTo({
    url: '../logs/logs'
  })
},
//3点击叉叉时，去除遮罩层，候选栏隐藏，自己的状态隐藏
cancelInput: function () {
  this.setData({
    input: "",
    opacity: '1.0',
    bgcolor: '#fff',
    showstatus: 'hide',
    XXshowstatus:'hide'
  })
},
//4根据输入情况，自动判断是否弹出选择框
  inputchar: function (e) {
    var str = e.detail.value;
    // 监听搜索框的叉叉显示情况
    var XXshowstatus = (str == "" ? "hide" : "show");
    //根据输入情况，自动判断是否弹出选择框
    var showstatus = css.ChangeListStatus(str);
    //动态加载里面的list，加载的方法根据传递的字符串决定

    if (util.input_is_valid(str)) {
      if (util.CountIfEnglishWord(str) == false){
        wx.request({
          url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
          data: {
            "language": "Chinese",
            "type": "sentence",
            "query": str
          },
          success: res => {

            var list = [];
            if (typeof (res.data) == "string") {
              //拼接成的字符串如果是string的话，表明还有格式问题，丢到util里面解析一下
              var parse = util.clearBr(res.data);
              list = JSON.parse(parse);
              jsonSource.setSource(parse);
            }
            else {
              //如果直接变成object的话，就可以直接用了
              jsonSource.setSource(res.data);
              list = res.data;
            }

            this.setData({
              list: list,
              showstatus: showstatus,
              XXshowstatus: XXshowstatus
            })
          }
        })
      }
      else if (util.CountIfEnglishWord(str) == true) {
        wx.request({
          url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
          data: {
            "language": "English",
            "type": "sentence",
            "query": str
          },
          success: res => {
            var list = [];
            if (typeof (res.data) == "string" && res.data != "") {
              //拼接成的字符串如果是string的话，表明还有格式问题，丢到util里面解析一下
              var parse = util.clearBr(res.data);
              list = JSON.parse(parse);
              jsonSource.setSource(parse);
            }
            else {
              //如果直接变成object的话，就可以直接用了
              jsonSource.setSource(res.data);
              list = res.data;
            }

            this.setData({
              list: list,
              showstatus: showstatus,
              XXshowstatus: XXshowstatus
            })
          }
        })
      }
    }   
  
    
    this.setData({
      showstatus: showstatus,
      XXshowstatus: XXshowstatus
    })
  },
//5当跳出遮罩栏和搜索结果栏时，点击任意的外部界面使其恢复正常，去掉搜索结果栏和遮罩栏
recover: function () {
  this.setData({
    opacity: '1.0',
    bgcolor: '#fff',
    showstatus: 'hide'
  })
},
navigateToAns: function (e) {

  var str = e.detail.value;
  str = util.trim(str); //过滤多余空格
  var pageType = pageSkip.getResultType(str);
  //给新页面传递参数
  var navENtoCNwords = "../ans-ENtoCN-words/ans-ENtoCN-words?input=" + str;
  var navCNtoENwords = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
  var navCNtoENsentences = "../ans-CNtoEN-sentences/ans-CNtoEN-sentences?input=" + str;
  var navEntoCNsentences = "../ans-ENtoCN-sentences/ans-ENtoCN-sentences?input=" + str;
  var nav404 = "../404/404?input=" + str;
  /**开始跳转页面 */
  if (pageType == "ERROR") {
    wx.navigateTo({
      url: '../404/404',
    })
  }
  else{
    wx.redirectTo({
      url: navCNtoENwords,
    })
  } 
  //异步处理，跳过去之后把原来的页面重置
  this.setData({
    input: '',
    opacity: '1.0',
    bgcolor: '#fff',
    showstatus: 'hide',
    XXshowstatus: 'hide'
  })
},
itemNavigateToAns: function (e) {

  //获取列表中每个候选项目的字符串数据，用来传递页面参数
  var index = e.currentTarget.dataset.index;
  var list = this.data.list;
  var str = list[index].input;
  //list[index].input就是当前点击的列表项，index代表第n个
  //参数跳转方法
  var navENtoCNwords = "../ans-ENtoCN-words/ans-ENtoCN-words?input=" + str;
  var navCNtoENwords = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
  var nav404 = "../404/404?input=" + str;

  var inputHasEnglish = util.CountIfEnglishWord(str);
  var inputHasChinese = util.CountIfChineseWord(str);

  if (inputHasEnglish) {
    wx.redirectTo({
      url: navCNtoENwords,
    })
  } else if (inputHasChinese) {
    wx.redirectTo({
      url: navCNtoENwords,
    })
  } else {
    wx.navigateTo({
      url: nav404,
    })
  }
  this.setData({
    opacity: '1.0',
    bgcolor: '#fff',
    showstatus: 'hide',
    XXshowstatus: 'hide'
  })
}
})