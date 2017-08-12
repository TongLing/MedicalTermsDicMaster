var util = require('../utils/util.js')

function getResultType(str){

  var hasEnglish = util.CountIfEnglishWord(str);
  var EnglishWordCount = util.CountEnglishWordNum(str);

  var hasChinese = util.CountIfChineseWord(str);
  var ChineseWordCount = util.CountChineseWordNum(str);

  if (hasEnglish && hasChinese == false && EnglishWordCount >= 1)
  {
    return "ENtoCNwords";
  } else if (hasChinese && hasEnglish == false && ChineseWordCount >= 1) {
    return "CNtoENwords";
  } else{
    return "ERROR";
  }
  return "ERROR";
}

module.exports = {
  getResultType: getResultType
}
