//jsonSource 操作数据的相关函数，还有用于存储初始化数据。

var dialogues = [{ message: "【医院口语会话】吸氧治疗" }, { message: "【医院口语会话】测量体温" }, { message: "【医院口语会话】输血" }, { message: "【医院口语会话】体温监护" }, { message: "【医院口语会话】异常体温" }, { message: "【医院口语会话】验尿" }, { message: "【医院口语会话】护士和肺气肿病人谈话" }, { message: "【医院口语会话】验大便" }, { message: "【医院口语会话】填入院表" }, { message: "【医院口语会话】注射" }, { message: "【医院口语会话】挂号" }, { message: "【医学口语会话】药房" }, { message: "【医学口语会话】晕厥" }, { message: "【医学口语会话】社区" }, { message: "【医学口语会话】社区保健内容" }, { message: "【医学口语会话】保健一例" }, { message: "【医学口语会话】基层保健队" }, { message: "【医学口语会话】康复护理" }, { message: "【医学口语会话】康复保健队" }, { message: "【医学口语会话】暴怒性躁狂病" }, { message: "【医学口语会话】预防静脉治疗的并发症" }, { message: "【医学口语会话】烧伤" }, { message: "【医学口语会话】医生和孕妇谈话" }, { message: "【医学口语会话】护理程序的四个步骤" }, { message: "【医学口语会话】龋齿" }, { message: "【医学口语会话】牙髓炎" }, { message: "【医学口语会话】牙龈炎" }, { message: "【医学口语会话】摆脱孤独" }, { message: "【医学口语会话】病人的焦虑" }, { message: "【医学口语】医生护士英语会话:西药1" }, { message: "【医学口语】医生护士英语会话:西药2" }, { message: "【医学口语】医生护士英语会话:中药" }, { message: "【医学口语】医生护士英语会话:肚子痛" }, { message: "【医学口语】医生护士英语会话:交通事故" }, { message: "【医学口语】医生护士英语会话:堕胎" }, { message: "【医学口语】医生护士英语会话:患失眠症" }, { message: "【医学口语】医生护士英语会话:患流行性感冒" }, { message: "【医学口语】医生护士英语会话:内科" }, { message: "【医院英语会话】有点失眠" }, { message: "【医院口语会话】关于医药" }, { message: "【医院英语对话】关于中药" }, { message: "【医院口语会话】内科医生护士英语会话" }, { message: "【医院口语会话】出了交通事故" }, { message: "【医院口语会话】患流行性感冒" }, { message: "【医院口语会话】婴儿看医生" }, { message: "【医院口语会话】感冒" }, { message: "【医院口语会话】挂号及办公室工作" }, { message: "【医院口语会话】入院和出院" }, { message: "【医院口语会话】摆脱孤独" }, { message: "【医学口语会话】透视－Fluoroscopy" }, { message: "【医学口语会话】挂号及办公室工作" }, { message: "【医学口语会话】医患间的英语对话" }, { message: "【医学口语会话】病人和药剂师的谈话" }, { message: "【医学口语会话】入院和出院" }, { message: "【医学口语会话】医生病人英语对话1" }, { message: "【医学口语会话】医生病人英语对话2" }, { message: "【医学口语会话】医生病人英语对话3" }, { message: "【医学口语】医务英语会话：内科" }, { message: "【医学口语】医务英语会话：患流行性感冒" }, { message: "【医学口语】医务英语会话：患失眠症" }, { message: "【医学口语】医务英语会话：堕胎" }, { message: "【医学口语】医务英语会话：交通事故" }, { message: "【医学口语】医务英语会话：肚子痛" }, { message: "【医学口语】医务英语会话：中药" }, { message: "【医学口语】医务英语会话：西药" }, { message: "【医学口语】医务英语对话：护士长的作用" }, { message: "【医学口语】医生护士英语会话：为自己预约" }, { message: "【医学口语】医生护士英语会话：为家人预约" }, { message: "【医院口语会话】肚子痛" }, { message: "【医学口语会话】公平对待每一个人" }, { message: "【医学口语会话】老视眼和屈光不正" }, { message: "【医学口语会话】心肌梗塞" }, { message: "【医学口语会话】调解病人与其家属的关系" }, { message: "【医学口语会话】帮助病人摆脱烦恼" }, { message: "【医院口语会话】腹泻" }, { message: "【医院口语会话】十二指肠溃疡" }, { message: "【医院口语会话】查房" }, { message: "【医学口语会话】急性胰腺炎" }, { message: "【医院口语会话】急诊" }, { message: "【医院口语会话】输氧" }];
function getDialogues (){
  return dialogues;
}
var news = [
/*  {
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
  */
];
var keywords = [{ message: '中医' }, { message: '血精' }, { message: '白浊' }, { message: '头风' }, { message: '顺证' }, { message: '逆证' }, { message: '五善' }, { message: '心善' }, { message: '肝善' }, { message: '脾善' }, { message: '肺善' }, { message: '紫癜风' }, { message: '重舌' }, { message: '木舌' }, { message: '结连舌' }, { message: '口舌痰包' }, { message: '涎石' }, { message: '牙岩' }, { message: '白疕' }, { message: '天疱疮' }, { message: '阴黄' }, { message: '急黄' }, { message: '肝著' }, { message: '臌胀' }, { message: '肝痈' }, { message: '肝癌' }, { message: '近视' }, { message: '远视' }, { message: '老视' }, { message: '弱视' }, { message: '耳病' }, { message: '耳疖' }, { message: '耳疮' }, { message: '耳壳痰包' }, { message: '断耳疮' }, { message: '耳胀' }, { message: '面游风' }, { message: '粉刺' }, { message: '酒渣鼻' }, { message: '脱发' }, { message: '狂犬病' }, { message: '炭疽' }, { message: '麻风' }, { message: '梅毒' }, { message: '内伤发热' }, { message: '汗证' }, { message: '自汗' }, { message: '盗汗[病]' }, { message: '肾善' }, { message: '七恶' }, { message: '心恶' }, { message: '肺痹' }, { message: '痛风' }, { message: '尿血' }, { message: '谷疸' }, { message: '酒疸' }, { message: '风秘' }, { message: '疥疮' }, { message: '鸡眼' }, { message: '胼胝' }, { message: '痱子' }, { message: '皲裂疮' }, { message: '骨折' }, { message: '冷秘' }, { message: '中药' }, { message: '麻沸散' }, { message: '阴阳' }, { message: '阴阳学说' }, { message: '阳气' }, { message: '阴气' }, { message: '心血' }, { message: '扭伤' }, { message: '断裂伤' }, { message: '氟骨病' }, { message: '异物梗喉' }, { message: '喉瘤' }, { message: '喉菌' }, { message: '龋齿' }, { message: '堕胎' }, { message: '颈椎病' }, { message: '肺气' }, { message: '肺阴' }, { message: '肺阳' }, { message: '妊娠' }, { message: '胎孕' }, { message: '产育' }, { message: '分娩' }, { message: '小产' }, { message: '伤食' }, { message: '嗜偏食' }, { message: '筋伤' }, { message: '筋断' }, { message: '阳气' }, { message: '神疲' }, { message: '乏力' }, { message: '腰酸' }, { message: '腰重' }, { message: '心血' }, { message: '肝火' }, { message: '症状' }, { message: '久疟' }, { message: '麻毒' }, { message: '脾气实' }, { message: '脾实热' }, { message: '脾寒' }, { message: '脾热' }, { message: '瘴毒' }, { message: '内伤' }, { message: '五劳' }, { message: '七伤' }, { message: '七情' }, { message: '五志过极' }, { message: '五志化火' }, { message: '瘴疟' }, { message: '热瘴' }, { message: '冷瘴' }, { message: '霍乱' }, { message: '鼠疫' }, { message: '肉行' }, { message: '头痛' }, { message: '浓缩丸' }, { message: '中药' }, { message: '大麦' }, { message: '人中' }, { message: '天麻' }, { message: '火罐' }, { message: '针眼' }, { message: '补血' }, { message: '元气' }, { message: '穴位' }];
function getNews() {
  return news;
}
function setNews(str) {
  news = str;
}


function getKeywords(){
  return keywords;
}

function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

var chtoen = [
  {
    "input": "样例数据",
    "output": "sample output"
  }
];
function getSource() {
  return chtoen;
}

function setSource(str) {
  chtoen = str;
}


var DailySentence = [
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

function getDailySentence(type){
  var randomNum = new Date().getDate(); 
  return type == "EN" ?  DailySentence[randomNum].English : DailySentence[randomNum].Chinese;
}
function setDailySentence(str) {
  DailySentence = str;
}

module.exports = {
  getDailySentence: getDailySentence,
  setDailySentence: setDailySentence,
  getSource: getSource,
  setSource: setSource,
  getNews:   getNews,
  setNews:   setNews,
  getKeywords: getKeywords,
  getRandomArrayElements: getRandomArrayElements,
  getDialogues: getDialogues
}
