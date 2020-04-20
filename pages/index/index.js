Page({
  data: {
    title: '上海大学猫咪之家',
    imgUrls: [
      '../../images/1495097539722.jpg',
      '../../images/1495097548559.jpg',
      '../../images/1495097552971.jpg'
    ],
    content:[
      {
        title:'上大猫咪集群',
        cover:'../../images/pages/item1.jpg',
        desc:'一日吸猫，终生想吸！这玩意儿可比鸦片厉害多了!'
      },
      // {
      //   title: '上大猫咪美图',
      //   cover: '../../images/pages/item2.jpg',
      //   desc: '上大的猫有多好看，进来就知道！'
      // }
      // {
      //   title: '惊！来上大那么久，今天才知道校园里有那么多猫！',
      //   cover: '../../images/pages/item3.jpg',
      //   desc: '愚蠢的两脚兽？没点能耐还能征服你们的星球？'
      // }
    ]
  },
  onLoad:function(){
    this.setData({
      imgUrls: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3670697426,1565929756&fm=26&gp=0.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587374205341&di=9da41e361586992e4035ebde090f6000&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg']
    });
  }
})