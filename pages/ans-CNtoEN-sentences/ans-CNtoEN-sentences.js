// ans-CNtoEN-sentences.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    opacity: '1.0', //输入时的遮罩层透明度
    bgcolor: 'white', //遮罩层的颜色
    motto: 'Hello World,this is my first micro-app program, So if there is anything wrong or misbehave, please contact me as as soon as possible. click here', //每日一句的内容
    showstatus: 'hide',   //选择框隐藏和出现的状态
    input: '',
    itemcolor: '#fff', //按下每个词语时，变换选中状态
  },
  //事件处理函数
  back: function () {
    wx.navigateBack({
    })
  },
  //输入框获取焦点时修改首页下方遮罩层颜色
  onfocus: function () {
    this.setData({
      opacity: '0.7',
      bgcolor: '#ccc'
    })
  },
  //输入框失去焦点时回复遮罩层颜色
  offfocus: function () {
    this.setData({
      opacity: '1.0',
      bgcolor: '#fff'
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //点击叉叉时，去除遮罩层，候选栏隐藏，自己的状态隐藏
  cancelInput: function () {

    this.setData({
      input: "",
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide'
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
  //当跳出遮罩栏和搜索结果栏时，点击任意的外部界面使其恢复正常，去掉搜索结果栏和遮罩栏
  recover: function () {
    this.setData({
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide'
    })
  },
  //跳转到查词结果页面
  //跳转到查词结果页面
  navigateToAns: function (e) {
    console.log("start??")
    /*根据不同的查词条件，返回不同的页面结构，主要分为四类：
    第一类，单词英译中 输入英文单词 输出多个中文释义 page: ENtoCN-words: 样例词语：engage
    第二类：单词中译英 输入中文单词 输出多个英文释义 page: CNtoEN-words: 样例词语：参加
    第三类，句子中译英 输入中文句子 输出英文翻译     page: CNtoEN-sentences 这个暂时留空，不用做
    第四类，句子英译中 输入英文句子 输出中文翻译     page: ENtoCN-sentences 这个暂时留空，不用做
     */

    /**这一段是判断用户输入字符逻辑的，根据用户输入的不同内容，查询不同的页面*/
    var str = e.detail.value;
    str = util.trim(str); //过滤多余空格
    console.log("当前输入的字符串是" + str);

    var hasEnglish = util.CountIfEnglishWord(str);
    var EnglishWordCount = util.CountEnglishWordNum(str);
    console.log("有英文吗?" + hasEnglish);
    console.log("英文单词数量" + EnglishWordCount);

    var hasChinese = util.CountIfChineseWord(str);
    var ChineseWordCount = util.CountChineseWordNum(str);
    console.log("有中文?" + hasChinese)
    console.log("中文单词数量" + ChineseWordCount);


    /**开始跳转页面 */
    if (hasEnglish == true && hasChinese == false && EnglishWordCount == 1) //单词英译中
    {
      console.log('单词英译中');
      wx.redirectTo({
        url: '../ans-ENtoCN-words/ans-ENtoCN-words',
      })
    } else if (hasChinese = true && hasEnglish == false && ChineseWordCount >= 1 && ChineseWordCount <= 4) { //单词中译英
      console.log('单词中译英')
      wx.redirectTo({
        url: '../ans-CNtoEN-words/ans-CNtoEN-words',
      })
    }
    else if (hasChinese = true && hasEnglish == false && ChineseWordCount >= 5) { //句子中译英
      console.log('句子中译英')
      wx.redirectTo({
        url: '../ans-CNtoEN-sentences/ans-CNtoEN-sentences',
      })
    }
    else if (hasEnglish == true && hasChinese == false && EnglishWordCount > 1) { //句子英译中
      console.log('句子英译中')
      wx.redirectTo({
        url: '../ans-ENtoCN-sentences/ans-ENtoCN-sentences',
      })
    }
    else {  /**除了这四种输入情况以外，其他字符，数字等情况直接跳到404去处理 */
      wx.navigateTo({
        url: '../404/404',
      })
    }
    this.setData({
      input: '',
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide'
    })
  },
  itemNavigateToAns: function (e) {
    this.setData({
      input: "",
      opacity: '1.0',
      bgcolor: '#fff',
      showstatus: 'hide'
    })
    wx.redirectTo({
      url: '../ans-ENtoCN-words/ans-ENtoCN-words',
    })
  },
})