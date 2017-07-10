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

var DailySentences = [
  {
    "English": "Take pride in how far you've come. Have faith in how far you can go. But don't forget to enjoy the journey.",
    "Chinese": "为你的到来感到骄傲。相信你能走得很远。但别忘了享受旅程。"
  },
  {
    "English":"The supreme happiness of life is the conviction that we are loved. —Victor Hugo",
    "Chinese":"生活中最大的幸福是坚信有人爱我们。—维克多·雨果"
  },
  {
    "English": "A little thing in hand is worth more than a great thing in prospect. ",
    "Chinese": "抓在手中的东西虽小，也胜过美妙的幻想。—《伊索寓言》"
  },
  {
    "English": "If you don't walk out, you will think that this is the whole world. ",
    "Chinese": "如果你不出去走走，你会以为这就是全世界。"
  },
  {
    "English": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant. — Horace ",
    "Chinese": "逆境可以引出一个人的才能，它在富足的环境只是潜伏著。— 贺拉斯"
  },
  {
    "English": "Take nothing for granted. Know that the harder you work, the luckier you'll get. — Ivanka Trump ",
    "Chinese": "没有事情是理所当然，要知道越努力越幸运。 — 伊凡卡·川普"
  },
  {
    "English": "Everything negative-pressure,challenges-is all an opportunity for me to rise. —Kobe Bryant ",
    "Chinese": "压力、挑战，这一切消极的东西都是我能够取得成功的催化剂。—科比·布莱恩特"
  },
  {
    "English": "A true friend is one soul in two bodies. ",
    "Chinese": "一个真正的朋友是如影随形的。"
  },
  {
    "English": "If I'm gonna die,I still want to be me. —The Hunger Games ",
    "Chinese": "即使我要死了，我也要做我自己。—《饥饿游戏》"
  },
  {
    "English": "All encounters are reunions after a long separation. ",
    "Chinese": "世间所有的相遇，都是久别重逢。"
  },
  {
    "English": "Take pride in how far you've come. Have faith in how far you can go. But don't forget to enjoy the journey.",
    "Chinese": "为你的到来感到骄傲。相信你能走得很远。但别忘了享受旅程。"
  },
  {
    "English": "If you don't want to be a little ordinary sand, then try to be a shining star. ",
    "Chinese": "若不想做一粒渺小平凡的沙子，那就努力成为一颗耀眼的星星。"
  },
  {
    "English": "Life is too short for long–term grudges. ",
    "Chinese": "人生短暂，何必长期心怀怨念。"
  },
  {
    "English": "World is a fine place and worth fighting for. I agree with the second part. ",
    "Chinese": "世界很美好，值得我为之奋斗。我只同意后半句。"
  },
  {
    "English": "Nothing seek, nothing find. ",
    "Chinese": "无所求便无所得。"
  },
  {
    "English": "No matter what type of animal you are, change starts with you. ",
    "Chinese": "天性如何并不重要，重要的是你开始改变。--电影《疯狂动物城》"
  },
  {
    "English": "What is right to be done cannot be done too soon. ",
    "Chinese": "越该做的事，就越急不得。--简·奥斯汀"
  },
  {
    "English": "Build your own dreams, or someone else will hire you to build theirs. ",
    "Chinese": "打造自己的梦想，否则你就会被雇用去打造别人的梦想。"
  },
  {
    "English": "The human race has one really effective weapon, and that is laughter. ",
    "Chinese": "人类拥有一强而有力的武器，叫作欢笑。"
  },
  {
    "English": "Stay hungry,stay foolish. ",
    "Chinese": "求知若饥，虚心若愚。"
  },
  {
    "English": "The cloud stood humbly in a corner of the sky. The morning crowned it with splendor. ",
    "Chinese": "白云谦卑地站在天边，晨光给它披上壮丽的光彩。--泰戈尔"
  },
  {
    "English": "Everyone's heart is a piece of sea, shining bottomless blue. ",
    "Chinese": "每个人的心都是一片海，闪耀着深不见底的幽蓝。"
  },
  {
    "English": "Youth will fade away, but my memories of you will not. ",
    "Chinese": "青春终究会逝去，但记忆里的你一直都好。"
  },
  {
    "English": "Success is waking up in the morning, so excited about what you have to do. —Fame ",
    "Chinese": "成功是清晨醒来，对自己的人生充满期待。—名扬四海"
  },
  {
    "English": "Nothing in life is to be feared. It is only to be understood. —Marie Curie ",
    "Chinese": "生活中没有可怕的东西，只有应去了解的东西。 —玛丽·居里"
  },
  {
    "English": "I am a slow walker, but I never walk backwards.",
    "Chinese": "我走得很慢，但从来不后退。—林肯"
  },
  {
    "English": "Where there is a will, there is a way.",
    "Chinese": "有志者，事竟成。"
  },
  {
    "English": "I may not be the best person, but I'd give you the best of me.",
    "Chinese": "我也许不是最好的那个人，但我会给你最好的那个我。"
  },
  {
    "English": "Being nice to someone you dislike doesn’t mean you’re fake. It means you’re mature enough to tolerate your dislike towards them.",
    "Chinese": "能够善待不太喜欢的人， 并不代表你虚伪， 而意味着你内心成熟到可以容纳这些不喜欢。"
  },
  {
    "English": "The worst part of life is waiting. But the best part of life is having someone worth waiting for. ",
    "Chinese": "生命中最糟糕的是等待，而最美好的是有值得你等的人。"
  },
  {
    "English": "In order to discover new lands, one must be willing to lose sight of the shore for a very long time.",
    "Chinese": "想发现新大陆，就得做好很长时间看不到岸边的准备。"
  },
  {
    "English": "When you feel like giving up, remember why you held on for so long in the first place.",
    "Chinese": "每当想要放弃，就想想一直以来是为了什么去坚持。"
  }
]
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
      "head": "王者荣耀真·最强管控：小学生每天只能玩1小时啦~~",
      "content": "数据接口——双语资讯:发霉啦系列"
    },
  ];
  return news;
}

function initMotto(type){
  var randomNum = new Date().getDate(); 

  return type == "EN" ?  DailySentences[randomNum].English : DailySentences[randomNum].Chinese;
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
