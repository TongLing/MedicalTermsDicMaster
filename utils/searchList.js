var util = require('../utils/util.js')
var jsonSource = require('../utils/jsonSource.js')

//结果页里面的句子，英转中

function loadSearchListData(str){
  jsonSource.initSource();
  //在候选页面加载data系列的json
  //console.log("searchList.loadData: 当前传入的字符串参数是" + str);
  var nil = "";
  var str = util.trim(str);//字符串格式化

  var hasEnglish = util.CountIfEnglishWord(str);
  var EnglishWordCount = util.CountEnglishWordNum(str);

  var hasChinese = util.CountIfChineseWord(str);
  var ChineseWordCount = util.CountChineseWordNum(str);
  
    if (hasEnglish == true && hasChinese == false && EnglishWordCount == 1){ //单词英译中
      return jsonSource.getSource("dataEnglishToChineseWords");
    }
    else if (hasChinese = true && hasEnglish == false && ChineseWordCount >= 1 && ChineseWordCount <= 4){ //单词中译英
      return jsonSource.getSource("dataChineseToEnglishWords");
    } else{
      return null;
    }
}


module.exports = {
  loadSearchListData: loadSearchListData
}
