#  医学术语助手  MedicalTermsDicMaster
 
### 简介

微信扫码使用我的小程序：
![images1](http://img.blog.csdn.net/20171018073846226?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGxvbmxpbmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


医学术语助手是一个微信小程序，主要用于中医学专业术语的翻译查询，目前正处于开发阶段。

利用微信小程序即用即走的框架开发，程序非常轻量化，运行方便。

该程序内置 5 大官方字典，拥有近 50,000 条中医学术语名词的精准描述，分别是

1. WFAS世界针灸学会联合会认定的中医学名词翻译
2. 中国中医药学名词审定委员会审定的中医学名词列表
3. WHO世卫组织认定的英文翻译
4. 国家中管局版本的医学术语英译
5. 英国中医学翻译泰斗Nigel wiseman学者的著作

正在开发的功能：

* 词语联想功能。在搜索框中输入单词时，对于用户的输入，程序应在当前页面提供反馈并展示出候选单词。

* 程序搜索当前字典中是否含有该单词。若含有该单词，则在结果界面中展示三个栏目：

  * 该单词的发音：提供中文拼音。  

  * 单词英文翻译：若有多个与中文单词的对应英文结果，需返回所有英文结果。
  
  * 双语例句：以中文句子中出现的关键词为筛选标准，展示3个与中文关键词相关的双语例句。

### 开发者指南： 该程序的开发运行方法：

1. 下载或克隆本项目到本地目录。

2. 点击这里下载[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

3. 打开微信开发者工具。在AppID一栏，直接选择"无AppID"，在项目目录一栏，选择 MedicalTermsDicMaster 文件夹所在目录，项目名称可以自选。

![images1](http://img.blog.csdn.net/20170630141709486?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGxvbmxpbmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

点击左边的编辑，里面含有整个Project的文件结构。
![images2](http://img.blog.csdn.net/20170630141943318?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGxvbmxpbmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

小程序包含一个描述整体程序的 app 和多个描述各自页面的 Page。 


一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：


|文件类型       |必填           |作用            |
|-------------- |:-------------:|:-------------|
|app.js         |是            |小程序逻辑      |
|app.json       |是            |小程序公共设置   |
|app.wxss       |否            |小程序的css样式表 |

每个单独的小程序页面由四个文件组成，分别是：

|文件类型|	必填|	作用|
|:------------- |:-------------:|:-----|
|js	|是	|页面逻辑|
|wxml	|是|	页面结构|
|wxss	|否|	页面样式表|
|json	|否|	页面配置|

这两个表格内的文件，就是小程序运行的所有组件。具体的内容，根据详细的[开发框架](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/api.html)，完成需要制作的程序即可。



4. 点击左侧的"项目"，再点击预览，扫码后即可在微信客户端中体验小程序在手机端运行的效果。

![这里写图片描述](http://img.blog.csdn.net/20170630144330081?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGxvbmxpbmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)




