var util = require('../utils/util.js')


//根据输入的值，判断候选框要展开还是要收回去
function ChangeListStatus(str) {
  if (str == ""){
    showstatus = "hide";
    return showstatus;
  } 
  var showstatus = "hide"
  var str = util.trim(str);
  var hasEnglish = util.CountIfEnglishWord(str);
  var EnglishWordCount = util.CountEnglishWordNum(str);

  var hasChinese = util.CountIfChineseWord(str);
  var ChineseWordCount = util.CountChineseWordNum(str);

  if (hasEnglish == true && hasChinese == false && EnglishWordCount == 1) {
    showstatus = "show";
  } else if (hasChinese = true && hasEnglish == false && ChineseWordCount >= 1 && ChineseWordCount <= 4) {
    showstatus = "show";
  } else {
    showstatus = "hide";
  }
  return showstatus;
}

module.exports = { 
  ChangeListStatus: ChangeListStatus
}
