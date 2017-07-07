//jsonSource 操作数据的相关函数，还有用于存储初始化数据。

//候选列表里的json sample 英文->中文单词
var dataEnglishToChineseWords = [];
//候选列表里的json 中文转英文单词
var dataChineseToEnglishWords = [];


//结果页里面的json,中文转英文单词
var resultChineseToEnglishWords = [];
//结果页里面的json, 英文转中文单词。
var resultEnglishToChineseWords = [];
//结果页里面的句子，中转英
var resultChineseToEnglishSentences = [];
//结果页里面的句子，英转中
var resultEnglishToChineseSentences = [];


function initSource(){
  //候选列表里的json sample 英文->中文单词
  dataEnglishToChineseWords = [
    {
      "input": "engage",
      "PartOfSpeech": "vt.",
      "output": "吸引住,聘用,与..交战"
    },
    {
      "input": "environment",
      "PartOfSpeech": "n.",
      "output": "环境,外界,周围,围绕"
    },
    {
      "input": "enterprise",
      "PartOfSpeech": "n.",
      "output": "企业,事业单位,事业心,进取心"
    },
    {
      "input": "encounter",
      "PartOfSpeech": "vt.",
      "output": "不期而遇,遭遇,对抗"
    },
    {
      "input": "energy",
      "PartOfSpeech": "n.",
      "output": "能量,活力,精神"
    },
    {
      "input": "engineer",
      "PartOfSpeech": "n.",
      "output": "工程师,技师,司机,工兵"
    },
    {
      "input": "enhance",
      "PartOfSpeech": "vt.",
      "output": "提高,增强,加强"
    },
    {
      "input": "enough",
      "PartOfSpeech": "adv.",
      "output": "足够地,充足地,十分地"
    },
    {
      "input": "enthusiasm",
      "PartOfSpeech": "n.",
      "output": "热情,热忱,宗教的狂热"
    },
    {
      "input": "enjoy",
      "PartOfSpeech": "vt.",
      "output": "享有,享受,欣赏,喜欢"
    }
  ];

  //候选列表里的json 中文转英文单词
  dataChineseToEnglishWords = [
    {
      "input": "参加",
      "output": "join, attend, participate in, take part in",
    },
    {
      "input": "参加者",
      "output": "attendee, participant",
    },
    {
      "input": "参加培训",
      "output": "attend training",
    },
    {
      "input": "参加人数",
      "output": "number of entries",
    },
    {
      "input": "参加会议",
      "output": "attend the meeting",
    },
    {
      "input": "参加比赛",
      "output": "run prizes, in the running",
    },
    {
      "input": "参加活动",
      "output": "participate in activities",
    },
    {
      "input": "参加工作",
      "output": "join in work, enter the servise",
    },
    {
      "input": "参加考试",
      "output": "take an exam, sit an exam",
    },
    {
      "input": "参加人员",
      "output": "participant, attendee",
    }
  ];

  //结果页里面的json,中文转英文单词
  resultChineseToEnglishWords = [
    {
      "wordInput": "参加",
      "voice":"cān jiā",
      "word": [{
        "partOfSpeech": "vt.",
        "output": "join"
      },
      {
        "partOfSpeech": "vi.",
        "output": "attend"
      },
      {
        "partOfSpeech": "vt.",
        "output": "participate in"
      },
      {
        "partOfSpeech": "null",
        "output": "take part in"
      }],
      "sentence": [{
        "input": "I thought I‘d enrol you with an art group at the school.",
        "output": "我想我会吸收你参加学校的一个艺术团。"
      },
      {
        "input": "You have to pay your outstanding bill before joining the scheme.",
        "output": "在参加该项目之前必须结清余账。"
      },
      {
        "input": "We‘ll go to a meeting in Birmingham and come straight back.",
        "output": "我们将去伯明翰参加会议，然后马上回来。"
      }]
    }
  ];

  //结果页里面的json, 英文转中文单词。
  resultEnglishToChineseWords = [
    {
      "wordInput": "engage",
      "AmericanVoice": "[ɪnˈgeɪdʒ]",
      "EnglishVoice": "[ɪnˈgedʒ]",
      "word": [{
        "partOfSpeech": "vt.",
        "output": "吸引住；聘用，与...交战"
      },
      {
        "partOfSpeech": "vi.",
        "output": "与...建立联系，从事，与...紧密结合"
      }],
      "sentence": [{
        "input": "You can engage in croquet on the south lawn.",
        "output": "你可以参加南边草坪上的槌球游戏。"
      },
      {
        "input": "Press the lever until you hear the catch engage",
        "output": "压下挡杆，直到听到挡挂好。"
      },
      {
        "input": " They never learned skills to engage the attention of the others.",
        "output": "他们从未学过吸引他人注意的技巧。"
      }]
    }
  ];

  //结果页里面的句子，中转英
  resultChineseToEnglishSentences = [
    {
      "input": "或许这就是上善若水的含义。",
      "output": "The greatest benevolence is like water.",
      "sentence": [{
        "input": "This is perhaps on the meaning of good is like.",
        "output": "这也许就是上善若水的含义"
      },
      {
        "input": "In my eyes, wisdom and spirituality are more important.",
        "output": "祝愿其和更多人也包括自己，能在有生之年达到上善若水的境界。"
      },
      {
        "input": "You are Lane Wood of the New York based organization charity: water",
        "output": "莱恩伍德是纽约“上善若水”公益机构的一员。"
      }]
    }
  ]

  resultEnglishToChineseSentences = [
    {
      "input": "Where there is a will, there is a way.",
      "output": "有志者，事竟成",
      "sentence": [{
        "input": "Where there is a will, there is a way.",
        "output": "有志者事竟成。"
      },
      {
        "input": "Where there is a will, there is a way. Live and Learn",
        "output": "虽然看过了，还是顶一记。"
      },
      {
        "input": "There is another English proverb, that is: Where there is a will, there is a way.",
        "output": "还有一个谚语是这样说的，有志者，事竟成。"
      }]
    }
  ]
}

function getSource(str){
  // 输入：传入一个str字符串，读取指定的json source
  // 输出：返回一个object，获取当前指定页面或当前列表的json
  switch(str){
    case "dataEnglishToChineseWords":       return dataEnglishToChineseWords; break;
    case "dataChineseToEnglishWords":       return dataChineseToEnglishWords; break;
    case "resultChineseToEnglishWords":     return resultChineseToEnglishWords; break;
    case "resultEnglishToChineseWords":     return resultEnglishToChineseWords; break;
    case "resultChineseToEnglishSentences": return resultChineseToEnglishSentences; break;
    case "resultEnglishToChineseSentences": return resultEnglishToChineseSentences; break;
    default: console.warn("function getSource: invalid input string parameters"); return -1;
  }
}

function setSource(){
}


function initNews(){
  var news= [
    {
      "photoURL": "../../img/news-510c2dgx1z.png",
      "head": "【数据接口】英国超市里的标签和促销标语",
      "content": "你究竟有几个小秘密？最新研究.."
    },
    {
      "photoURL": "../../img/news-62jha31z.png",
      "head": "原本是摇钱树，现在却让腾讯赔了140亿美元！",
      "content": "雅思又双叒叕涨价！一年连涨四.."
    },
    {
      "photoURL": "../../img/news-8394217ds.png",
      "head": "王者荣耀真·最强管控：小学生只能玩1小时啦~~",
      "content": "数据接口——双语资讯:发霉啦系列"
    },
  ];
  return news;
}

function initMotto(type){
  if (type == "EN"){
    var mottoEN = "Take pride in how far you've come. Have faith in how far you can go. But don't forget to enjoy the journey.";
    return mottoEN;
  }
  else if (type =="CN"){
    var mottoCN = "为你的到来感到骄傲。相信你能走得很远。但别忘了享受旅程。";
    return mottoCN
  }
}

function setNews(e){

}
function setMotto(type,str){

}
module.exports = {
  initSource: initSource,
  getSource:  getSource,
  setSource:  setSource,
  initMotto:  initMotto,
  setMotto:   setMotto,
  initNews:   initNews,
  setNews:    setNews
}
