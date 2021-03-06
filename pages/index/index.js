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
    hidden:true,
    //候选框部分
    list: [],  //候选框内容，输入时根据输入内容自动变化
    keywords: [{ message: '阳气', }, { message: '心血' }, { message: '肝火' }, { message: '症状', }, { message: '头痛' }, { message: '浓缩丸' }, { message: '中药', }, { message: '大麦' }, { message: '人中' }, { message: '天麻', }, { message: '火罐' }, { message: '针眼' }, { message: '补血', }, { message: '元气' }, { message: '穴位' }],
    showstatus: 'hide',   //候选框隐藏和出现的状态    
    itemcolor: '#fff', //按下每个词语时，变换选中背景色

    //正文部分
    bgcolor: 'white', //阴影的颜色
    userInfo: {},//头像和昵称相关信息
    mottoEN: '',
    mottoCN: '',
    dialogues :[],
    news: [], //双语资讯部分的内容
  },
  onLoad: function () {
    var dialogues = jsonSource.getTopThreeDialogues();
    var news = jsonSource.getTopThreeNews();
    
    //每日一句部分更新
    var mottoEN = jsonSource.getDailySentence("EN");
    var mottoCN = jsonSource.getDailySentence("CN");

  
    this.setData({
      mottoEN:mottoEN,
      mottoCN:mottoCN,
      news: news,
      dialogues: dialogues,
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
  changeKeywords:function (e){
    var keywords = jsonSource.getKeywords();
    keywords = jsonSource.getRandomArrayElements(keywords, 15);
    this.setData({
      keywords:keywords
    });
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
  keywordstart:function(e){
    var txtStyle = "background-color:#f3f3f3";
    var index = e.currentTarget.dataset.index;
    var keywords = this.data.keywords;
    keywords[index].txtStyle = txtStyle;
    this.setData({
      keywords: keywords //重新渲染界面
    });
  },
  newsstart:function(e){
    var txtStyle = "background-color:#f3f3f3";
    var index = e.currentTarget.dataset.index;
    var news = this.data.news;
    news[index].txtStyle = txtStyle;
    this.setData({
      news: news //重新渲染界面
    });
  },
  dialoguesstart:function(e){
    var txtStyle = "background-color:#f3f3f3";
    var index = e.currentTarget.dataset.index;
    var dialogues = this.data.dialogues;
    dialogues[index].txtStyle = txtStyle;
    this.setData({
      dialogues: dialogues //重新渲染界面
    });
  },
  dialoguesend: function (e) {
    var txtStyle = "";
    var index = e.currentTarget.dataset.index;
    var dialogues = this.data.dialogues;
    dialogues[index].txtStyle = txtStyle;
    this.setData({
      dialogues: dialogues //重新渲染界面
    });
  },
  newsend:function(e){
    var txtStyle = "";
    var index = e.currentTarget.dataset.index;
    var news = this.data.news;
    news[index].txtStyle = txtStyle;
    this.setData({
      news: news //重新渲染界面
    });
  },
  keywordend: function (e) {
    var txtStyle = "";
    var index = e.currentTarget.dataset.index;
    var keywords = this.data.keywords;
    keywords[index].txtStyle = txtStyle;
    this.setData({
      keywords: keywords //重新渲染界面
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
  
  gotoNewsContent:function(e){
    this.setData({
      hidden: false
    })
    var types = "news";
    var index = e.currentTarget.dataset.index;
    var num = this.data.news[index].index;
    console.log(num);
    var requestURL = "../NewsInfo/NewsInfo?types=" + types + "&num=" + num;
    wx.navigateTo({
      url: requestURL,
    })
    this.setData({
      hidden: true
    })
  },
  gotoNews: function (e){
    this.setData({
      hidden: false
    })
    var news = jsonSource.getTopThreeNews().slice(0,1);
  
    var types = "news";
    var num = news[0].index;
    var requestURL = "../NewsInfo/NewsInfo?types=" + types + "&num=" + num;
    wx.navigateTo({
      url: requestURL,
    })
    this.setData({
      hidden:true
    })
  }
  ,
  gotoDialoguesContent: function (e) {
    this.setData({
      hidden: false
    })
    var types = "dialogues";
    var index = e.currentTarget.dataset.index;
    var num = this.data.dialogues[index].index;
    console.log(num);
    var requestURL = "../NewsInfo/NewsInfo?types=" + types + "&num=" + num;
    wx.navigateTo({
      url: requestURL,
    })
    this.setData({
      hidden: true
    })
  },

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
    var search = e.detail.value;
    //console.log(str);
    // 监听搜索框的叉叉显示情况
    var XXshowstatus = (str == "" ? "hide" : "show");
    //根据输入情况，自动判断是否弹出选择框
    var showstatus = css.ChangeListStatus(str);
    //动态加载里面的list，加载的方法根据传递的字符串决定 
    if (util.input_is_valid(str)){
      if(util.CountIfEnglishWord(str)==false){
        wx.request({
          url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
          data: {
            "language": "Chinese",
            "type": "sentence",
            "query": search
          },
          success: res => {
            var list = [];
            if(typeof(res.data)=="string" && res.data != ""){
              //拼接成的字符串如果是string的话，表明还有格式问题，丢到util里面解析一下
              var parse = util.clearBr(res.data);
              list = JSON.parse(parse); 
              jsonSource.setSource(parse);
            }
            else{
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
      else if(util.CountIfEnglishWord(str) == true){
        wx.request({
          url: 'https://99238208.yixueshuyuzhushou.club/new/test.php',
          data: {
            "language": "English",
            "type": "sentence",
            "query": search
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
    else{
      this.setData({
        list: "[{}]"
      })
    }

    this.setData({
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
    var str = e.detail.value;
    str = util.trim(str); //过滤多余空格
    var pageType = pageSkip.getResultType(str);
    //给新页面传递参数
    var navENtoCNwords = "../ans-ENtoCN-words/ans-ENtoCN-words?input=" + str;
    var navCNtoENwords = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
    var nav404 = "../404/404?input=" + str;
    if (pageType == "ERROR"){
      wx.navigateTo({
        url: nav404,
      }) 
    }
    else{
      wx.navigateTo({
        url: navCNtoENwords
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

  keywordNavigate:function(e){
    this.setData({
      hidden:false
    })
    var index = e.currentTarget.dataset.index;
    var keywords = this.data.keywords;
    var str = keywords[index].message;
    var navCNtoENwords = "../ans-CNtoEN-words/ans-CNtoEN-words?input=" + str;
    wx.navigateTo({
      url: navCNtoENwords,
    })
    this.setData({
      hidden: true
    })
  },
  itemNavigateToAns: function (e) {
    this.setData({
      hidden: false
    })
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

    if (inputHasEnglish){
    wx.navigateTo({
      url: navCNtoENwords,
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
      XXshowstatus: 'hide',
      hidden:true
    })

  },
  moreDialogues:function(e){
    this.setData({
      hidden: false
    })
    var newsUrl = "../NewsList/NewsList?input=dialogues";
    wx.navigateTo({
      url: newsUrl,
    })
    this.setData({
      hidden: true
    })
  },
  moreNews: function (e) {
    this.setData({
      hidden: false
    })
    var newsUrl = "../NewsList/NewsList?input=news";
    wx.navigateTo({
      url: newsUrl,
    })
    this.setData({
      hidden: true
    })
  }
})
