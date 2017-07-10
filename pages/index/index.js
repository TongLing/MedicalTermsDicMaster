//index.js
//获取应用实例
var util       = require('../../utils/util.js')
var searchList = require('../../utils/searchList.js')
var css        = require('../../utils/css.js')
var pageSkip   = require('../../utils/pageSkip.js')
var jsonSource = require('../../utils/jsonSource.js')
var app = getApp()
Page({
   //初始化的data列表
  data: {
    //搜索框部分
    XXshowstatus:'hide', //搜索框右边小叉叉隐藏还是出现
    placeholdertxt: '点击查词', //搜索框的提示文本
    input: '',  //搜索框内容
    opacity: '1.0', //输入时，正文部分阴影的透明度
    
    //候选框部分
    list: [],  //候选框内容，输入时根据输入内容自动变化
    showstatus: 'hide',   //候选框隐藏和出现的状态    
    itemcolor: '#fff', //按下每个词语时，变换选中背景色

    //正文部分
    bgcolor: 'white', //阴影的颜色
    userInfo: {},//头像和昵称相关信息
    mottoEN: '',
    mottoCN: '',
    
    news: [], //双语资讯部分的内容

    //不知道这个变量是干嘛的，但是一删了这个变量就会出bug
    num: '1',
  },
  onLoad: function () {
    var mottoEN = jsonSource.initMotto("EN");
    var mottoCN = jsonSource.initMotto("CN")
    var news  = jsonSource.initNews();

    this.setData({
      mottoEN:mottoEN,
      mottoCN:mottoCN,
      news: news,
    })
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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
  //事件处理函数

  //1输入框获取焦点时修改首页下方遮罩层颜色
  onfocus: function (e) {
    var str = e.detail.value;
    if (str == ""){
      this.setData({
        XXshowstatus: 'hide'
      })
    } else{
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
      XXshowstatus:'hide',
      opacity: '1.0',
      bgcolor: '#fff'
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //监听搜索框的叉叉有没有按下去
  cancelInput: function () {
    this.setData({
      input: "",
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide',
      XXshowstatus:'hide'
    })
  },
  //监听框框中的字符
  inputchar: function (e) {
    var str = e.detail.value;
    //console.log(str);
    // 监听搜索框的叉叉显示情况
    var XXshowstatus = (str == "" ? "hide" : "show");
    //根据输入情况，自动判断是否弹出选择框
    var showstatus = css.ChangeListStatus(str);
    //动态加载里面的list，加载的方法根据传递的字符串决定 
    var list = searchList.loadSearchListData(str);
    this.setData({
      list:list,
      showstatus:showstatus,
      XXshowstatus:XXshowstatus
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
  //跳转到查词结果页面
  navigateToAns: function (e) {
    /*根据不同的查词条件，返回不同的页面结构，主要分为四类：
    第一类，单词英译中 输入英文单词 输出多个中文释义 page: ENtoCN-words: 样例词语：engage
    第二类：单词中译英 输入中文单词 输出多个英文释义 page: CNtoEN-words: 样例词语：参加
    第三类，句子中译英 输入中文句子 输出英文翻译     page: CNtoEN-sentences 这个暂时留空，不用做
    第四类，句子英译中 输入英文句子 输出中文翻译     page: ENtoCN-sentences 这个暂时留空，不用做
     */
    /**这一段是判断用户输入字符逻辑的，根据用户输入的不同内容，查询不同的页面*/
    
    var str = e.detail.value;
    str = util.trim(str); //过滤多余空格
    var pageType = pageSkip.getResultType(str);
    //给新页面传递参数
    var navENtoCNwords     = "../ans-ENtoCN-words/ans-ENtoCN-words?input=" + str;
    var navCNtoENwords     = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
    var navCNtoENsentences = "../ans-CNtoEN-sentences/ans-CNtoEN-sentences?input=" + str;
    var navEntoCNsentences = "../ans-ENtoCN-sentences/ans-ENtoCN-sentences?input=" + str;
    var nav404 = "../404/404?input=" + str;
    /**开始跳转页面 */
    if (pageType =="ENtoCNwords"){
      wx.navigateTo({
        url: navENtoCNwords,
      })
    } else if (pageType == "CNtoENwords") {
      wx.navigateTo({
        url: navCNtoENwords,
      })
    }
    else if (pageType == "CNtoENsentences") { 
      console.log('句子中译英')
      wx.navigateTo({
        url: navCNtoENsentences,
      })
    }
    else if (pageType == "ENtoCNsentences") { 
      console.log('句子英译中')
      wx.navigateTo({
        url: navEntoCNsentences,
      })
    }
    else {  /**除了这四种输入以外，经过trim过滤字符，数字后还没搞定的情况，直接跳到404处理 */
      wx.navigateTo({
        url: '../404/404',
      })
    }
    //异步处理，跳过去之后把原来的页面重置
    this.setData({
      input:'',
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide',
      XXshowstatus:'hide'
    })
  },
  itemNavigateToAns: function (e) {

    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    var str = list[index].input;
    console.log(str);
    //参数跳转方法
    var navENtoCNwords = "../ans-ENtoCN-words/ans-ENtoCN-words?input=" + str;
    var navCNtoENwords = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
    var nav404 = "../404/404?input=" + str;

    var inputHasEnglish = util.CountIfEnglishWord(str);
    var inputHasChinese = util.CountIfChineseWord(str);
    if (inputHasEnglish){
    wx.navigateTo({
      url: navENtoCNwords,
    })
    }else if (inputHasChinese){
      wx.navigateTo({
        url: navCNtoENwords,
      })
    }else{
      wx.navigateTo({
        url: nav404,
      })
    }
    this.setData({
      input: "",
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide',
      XXshowstatus: 'hide'
    })
  }
})
