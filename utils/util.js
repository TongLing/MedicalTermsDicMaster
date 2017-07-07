// utils: 常用的工具函数，包括字符过滤、正则匹配等


// 格式化时间，把标准date类的格式转换成 2017/0x/0x 1x:0x:0x的格式显示
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//过滤字符串中无用字符，只留下汉字或字母，直接调用，需要依赖后面trimRight,trimLeft,stripTrim三个函数。
function trim(s) {
  return stripTrim(trimRight(trimLeft(s)));
}

//去掉字符串中的特殊字符
function stripTrim(s)
{
  var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%123456789]")
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

//去掉字符串左边的空白和空格
function trimLeft(s) {
  if (s == null) {
    return "";
  }
  var whitespace = new String(" \t\n\r");
  var str = new String(s);
  if (whitespace.indexOf(str.charAt(0)) != -1) {
    var j = 0, i = str.length;
    while (j < i && whitespace.indexOf(str.charAt(j)) != -1) {
      j++;
    }
    str = str.substring(j, i);
  }
  return str;
}

//去掉字符串右边的空白空格
function trimRight(s) {
  if (s == null) return "";
  var whitespace = new String(" \t\n\r");
  var str = new String(s);
  if (whitespace.indexOf(str.charAt(str.length - 1)) != -1) {
    var i = str.length - 1;
    while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1) {
      i--;
    }
    str = str.substring(0, i + 1);
  }
  return str;
}     

//数字格式化，将"x"格式化成"0x"，如3格式化成03,以便给其他函数处理成时间03:03的格式。
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//不知道这是干嘛用的，但是不能删掉他，一删掉就GG
function onblur(a){
  var obj = document.getElementsByClassName("container");
  obj = a;
  return obj;
}

//判断传入的字符串是不是英文字母，返回bool
function CountIfEnglishWord(str){
  str = trim(str);
  var regExp = new RegExp(/[a-zA-Z]+/g);//正则
  var isEnglish = regExp.test(str);
  return isEnglish;
}

//判断字符串中英文单词有几个
function CountEnglishWordNum(str){
  str = trim(str);
  //匹配英文单词的正则表达式
  var regExp = new RegExp(/[a-zA-Z]+/g);
  var isEnglish = regExp.test(str);
  if (isEnglish) {
  //用空格匹配英文单词个数
  var EnglishWordCount = str.split(" ").length;  
  } else {
    var EnglishWordCount = 0;
  }
  return EnglishWordCount;
}

//判断字符串中是不是中文，返回bool
function CountIfChineseWord(str) {
  str = trim(str);
  //正则表达式，匹配中文
  var reg = /[\u4e00-\u9fa5]/g;
  var isChinese = reg.test(str);
  return isChinese;
}

//判断字符串中中文汉字有几个
function CountChineseWordNum(str){
  str = trim(str)
  //正则表达式，匹配中文
  var reg = /[\u4e00-\u9fa5]/g;
  var isChinese = reg.test(str);
  if (reg.test(str)) {
    var ChineseWordCount = str.match(reg).length;
  } else {
    var ChineseWordCount = 0;
  }
  return ChineseWordCount;
}

function ChangeListStatus(str){
  var showstatus = "hide"
  var str = trim(str);
  var hasEnglish = CountIfEnglishWord(str);
  var EnglishWordCount = CountEnglishWordNum(str);

  var hasChinese = CountIfChineseWord(str);
  var ChineseWordCount = CountChineseWordNum(str);

  if (hasEnglish == true && hasChinese == false && EnglishWordCount == 1){
    showstatus = "show";
  } else if (hasChinese = true && hasEnglish == false && ChineseWordCount >= 1 && ChineseWordCount <= 4){
    showstatus = "show";
  } else{
    showstatus = "hide";
  }
  return showstatus;
}

module.exports = {
  formatTime: formatTime,
  trim: trim,
  CountIfEnglishWord:  CountIfEnglishWord,
  CountEnglishWordNum: CountEnglishWordNum,
  CountIfChineseWord:  CountIfChineseWord,
  CountChineseWordNum: CountChineseWordNum,
  ChangeListStatus:    ChangeListStatus
}

