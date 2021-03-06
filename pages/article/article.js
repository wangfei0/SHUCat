// pages/article/article.js
Page({
  data:{
    title:'',
    cover:'',
    content:'',
    view: 167,
    like:23,
    imgUrls: [
      '../../images/1495097539722.jpg',
      '../../images/1495097548559.jpg',
      '../../images/1495097552971.jpg'
    ],
    article:[
      {
        content: "1.早晨，当你的闹钟已经响过，而你却还懒在床上不起的的时候，小猫咪就会跳到你的肚皮，来使用它那软软的小爪子，在你的头上，脸上走来走去，直到把你弄起来为止。\n\n2.养猫有助于形成来良好的时间感，猫咪一日两顿饭，都要按时按点，如果你忘了它的吃饭时间，猫咪会生气，后果会很严重的。\n\n3.养猫有利于搞好家居环境的整洁与卫生，任何有碍于猫咪打闹，奔跑，任何易碎的东西都要收起来，放好了。\n\n4.养猫有利于养成爱劳动的习惯，家里有猫之后，每天扫地，拖地是必需的。至于劳动的强度，那就取决于你的猫了。\n\n5.养猫促进家具的更新换代，根据经验，除了金属家具外，其他材料做的家具都无法和猫爪的威力相抗衡。\n\n6.养猫大可不必再买地毯，如果你一个礼拜不扫地的话，地上估计就快有一张地毯了，而且是由猫毛织成的。\n\n7.养猫会让你经常运动，不仅仅是因为如果你要抓住你的猫咪，你需要跑来跑去，想想吧，当你想去挽救一个从柜子上掉下来的名贵瓷器时，你需要有守门员一样的身手。\n\n8.家里养有一只猫的话，你晚上是不会轻易地回来那么晚了，为什么？你试一次就明白了。\n\n9.养猫有助于提防夜贼，猫咪的夜半歌声，暂且不说有多闹腾，猛的听见一声，肯定会被吓跑。\n\综上，吸猫没有任何不良反应，吸猫有利于身体健康，多吸多快乐！"
      },
      {
        content:'假装每一个名字对应一张美图：\n\n1、暹罗猫\n\n2、布偶猫\n\n3、阿比西尼亚猫\n\n4、英国短毛猫\n\n5、波斯猫\n\n6、俄罗斯蓝猫\n\n7、美国短毛猫\n\n8、异国短毛猫\n\n9、挪威森林猫\n\n10、孟买猫\n\n11、缅因猫\n\n12、埃及猫\n\n13、伯曼猫\n\n14、斯芬克斯猫\n\n15、缅甸猫\n\n16、欧洲缅甸猫\n\n17、新加坡猫\n\n18、索马里猫\n\n19、土耳其梵猫\n\n20、中国狸花猫\n\n21、美国短尾猫\n\n22、西伯利亚森林猫\n\n23、日本短尾猫\n\n24、巴厘猫\n\n25、土耳其安哥拉猫\n\n26、褴褛猫\n\n27、东奇尼猫\n\n28、马恩岛猫\n\n29、柯尼斯卷毛猫\n\n30、奥西猫\n\n31、沙特尔猫\n\n32、德文卷毛猫\n\n33、美国刚毛猫\n\n34、呵叻猫\n\n35、哈瓦那棕猫\n\n36、重点色短毛猫\n\n37、波米拉猫\n\n38、塞尔凯克卷毛猫\n\n39、拉邦猫\n\n40、美国卷毛猫\n\n41、东方猫\n\n42、折耳猫\n\n'
      },
      {
        content: '1.猫的趾底有脂肪质肉垫，因而行走无声。捕鼠时不会惊跑鼠，趾端生有锐利的爪。爪能够缩进和伸出。猫在休息和行走时爪缩进去，捕鼠时伸出来，以免在行走时发出声响，防止爪被磨钝。猫的前肢有五指，后肢有四指。\n\n2.猫的牙齿分为门齿、犬齿和臼齿。犬齿特别发达，尖锐如锥，适于咬死捕到的鼠类，臼齿的咀嚼面有尖锐的突起，适于把肉嚼碎;门齿不发达。\n\n3.猫行动敏捷，善跳跃。 它猎食小鸟，兔子，老鼠，鱼等。 \n\n4.猫之所以喜爱吃鱼和老鼠，是因为猫是夜行动物，为了在夜间能看清事物，需要大量的牛黄酸，而老鼠和鱼的体内就含有牛黄酸，所以猫不仅仅是因为喜欢吃鱼和老鼠而吃，还因为自己的需要所以才吃。猫作为鼠类的天敌，可以有效减少鼠类对青苗等作物的损害。\n\n5.猫从高处掉下或者跳下来的时候，要靠尾巴调整平衡，使带软垫的四肢着地。请不要拽猫的尾巴，会影响它的平衡能力，也会容易使猫拉稀，减短猫的寿命。\n\n6.猫贪睡、任性、爱干净。\n\n7.通过叫声与主人对话和猫交往，猫的叫声不仅能传递信息，而且能表达感情，因而主人能通过观察、判断来读懂它，和它交流。 \n\n8.猫有很多种，有嘴挺贫的，有爱沉默的，不能一概而论，要长年和它相处的话，就能读懂它的每句言语。猫用肢体表达语言 所谓“猫的肢体语言”就是猫用耳、尾、毛、口、身子来表达自已的心情和欲望。猫要是腻在人的脚下、身旁，用头蹭你的话是亲热的表现。如果猫把从嘴边分泌出来的一种气味蹭到你身上的话，就表示它想把你占为已有。要是猫的喉咙里发出叽里咕噜的声音，就表明它心情很好，还有要是猫像鸭子孵蛋一样，前脚往里弯的话，就表示它的安心和依赖。猫在人类面前嘴巴张大表示信任。\n\n9.猫的报恩 一般猫在临死前会预感到自己将要死去，然后他会回到他的主人家“道个别”，然后找个无人知晓的地方，独自死去。所以，请不要在猫咪临死前离开，因为，只有和主人在一起它才有接受死亡的勇气。'
      },
      {
        title: '你真的知道如何给主子穿衣服吗',
        content: '猫咪是喜欢温暖的动物，在冬天，气温的骤变可能引起猫咪的不适，那么，宠物猫冬天要穿衣服吗？猫咪冬季的养护要注意哪些事项呢？\n\n一、关于猫咪的保暖\n\n1.猫咪要穿衣服吗？\n\n猫咪自己长了一身厚厚的皮毛，到了冬天更会长出绒毛来自我保暖，所以，一般情况下，不用给猫咪特别添加衣物。在室内，如果猫咪感到寒冷，他自己就会找一个相对暖和的地方，比如暖气旁边，太阳能晒到的地方，还有你的被窝里。\n\n2.温差不能太大\n\n寒冬里，猫咪最受不了的其实是明显的冷热温差，如卧房与客厅、被窝里外、进出室内外等，只要一遇到温度变化猫咪就狂打喷嚏。如果温差太大，猫咪最容易感冒。因此，维持猫咪活动范围的室温是必须的，尤其是在夜晚与清晨气温骤降时，在这些时段里，猫爸妈可以利用暖炉维持室内温度，而平时放养在阳台的猫咪，也必须让他进入室内保暖喔！\n\n3.带猫咪出门时要注意保暖\n\n门外天寒地冻，跟室内可不一样了。出门时，一定要对猫咪做好保暖工作。首先，先准备好外出手提笼、毛毯、暖暖包和薄毛巾，家长只要先将毛毯铺在提笼底部，接着在毛毯上放上暖暖包后，盖上一层薄毛巾，超级保暖的外出笼就完成啦！冬天外出时，为避免猫咪直接吹到冷风，建议选用密闭式防风材质的手提笼。一般市面上的暖暖包即可用来垫在提笼底部，但避免暖暖包直接接触皮肤而过热，最好垫上一层较薄的毛巾做隔离。\n\n4.多晒太阳\n\n和我们人一样，在天晴日暖的天气，应让猫多晒太阳，这特别是对于正在生长发育中的仔猫尤为需要。阳光中的紫外线，不仅有消毒杀菌之功，而且还能促进钙的吸收，促进骨骼生长发育，防止仔猫发生佝偻病。'
      },
      {
        title: '猫为什么那么爱吃鱼',
        content: "一般来说，对于野生的猫，只要能抓到的猎物，它都会吃掉吧，鱼对于猫来说并不是那么容易捕捉的，因此不太可能是它的主要食物。小猫偷鱼吃倒是很多人看到过的，我想应该是因为它能偷到。事实上只要是肉类，我们小区的小猫都会去偷取。\n\n从网上搜索了一番，关于猫的食物，很多地方都提到这样一个因素：\n\n猫体内无法制造一种它们所需要的氨基酸（amino acid arginine），缺少这种氨基酸，猫的体重会迅速降低并导致死亡，猫的视网膜会退化，视力下降低，从而失去捕食能力。一般的猫食里都添加了这种物质。\n\n是不是因为鱼体内含有这种物质？\n\n比如这段资料（来自维基百科）：\n\nCats are unusually dependent on a constant supply of the amino acid arginine, and a diet lacking arginine causes marked weight loss and can be rapidly fatal.[69] Another unusual feature is that the cat also cannot produce the amino acid taurine, with taurine deficiency causing macular degeneration, where the cat's retina slowly degenerates, causing irreversible blindness.[26] Since cats tend to eat all of their prey, they obtain minerals by digesting animal bones, and a diet composed only of meat may cause calcium deficiency."
      },
      {
        title: '养一堆猫是一种什么体验',
        content: '布偶猫因为超高的颜值受到众人的喜爱，但由于昂贵的价格让人望而退步。现在竟然有人养了一群布偶猫，真是羡煞旁人。\n\n那一个个可爱的模样，是否也萌化你了呢？\n\n天啊，这个铲屎的怎么这么幸福，有那么多小布偶，我要抱一只回家的。\n\n当然也有人说这简直就是一个个行走的人民币啊，赚大发了。'
      }
    ]
  },
  onLoad: function (options) {
    console.log()
    this.setData({
      title: options.title || this.data.article[options.id].title,
      // cover: options.cover,
      // content: this.data.article[options.id].content
      content: options.content
    })
  }
})