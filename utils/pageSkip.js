var util = require('../utils/util.js')

function getResultType(str){
  console.log("getResultTypeStart");
  var hasEnglish = util.CountIfEnglishWord(str);
  var EnglishWordCount = util.CountEnglishWordNum(str);
  console.log("有英文吗?" + hasEnglish);
  console.log("英文单词数量" + EnglishWordCount);

  var hasChinese = util.CountIfChineseWord(str);
  var ChineseWordCount = util.CountChineseWordNum(str);
      //console.log("有中文?" + hasChinese)
      //console.log("中文单词数量" + ChineseWordCount);

  if (hasEnglish && hasChinese == false && EnglishWordCount == 1)
  {
    return "ENtoCNwords";
  } else if (hasChinese && hasEnglish == false && ChineseWordCount >= 1 && ChineseWordCount <= 4) {
    return "CNtoENwords";
  } else if (hasChinese && hasEnglish == false && ChineseWordCount >= 5){
    return "CNtoENsentences";
  } else if (hasEnglish && hasChinese == false && EnglishWordCount > 1) {
    return "ENtoCNsentences";
  } else{
    return "ERROR";
  }
  return "ERROR";
}

module.exports = {
  getResultType: getResultType
}
