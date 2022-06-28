const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	// {
  //       name: "平凡之路",
  //       artist: '朴树',
  //       url: 'http://www.ytmp3.cn/down/59211.mp3',
  //       cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
  //     },
    {
        //theme: '#46718b',
        name: '樱花树下的约定',
        artist: '柯柯柯啊',
        url: 'https://dl.stream.qqmusic.qq.com/C400002CA28O3CoUBz.m4a?guid=8361261128&vkey=A0FF24DA7E3386E33366B3BE75F43FC73D8B39693C0A1CF8B0755EF3A66D3D58F4F4E86B517F7687857D12A6CEFB865BAAEDB21D9D995480&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p2.music.126.net/OsLSfOlsXZq1vazIotpJNA==/109951167564202278.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
    // {
    //     //theme: '#46718b',
    //     name: '想见你想见你',
    //     artist: '八三夭',
    //     url: 'https://m804.music.126.net/20220628202853/c93cf28f195b5db3fdc17b615fecc38a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096452803/f2ae/1552/ca9f/e489f0694a38988ca9426a79c686b15c.m4a?authSecret=00000181aa32507511630aa460b90a46',//'https://music.163.com/song/media/outer/url?id=1358848433',
    //     cover: 'http://p4.music.126.net/8MjQbJQtJRV81d1dNfiH6A==/109951164485238047.jpg?param=34y34', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
    //   },
    {
        //theme: '#46718b',
        name: '晴天的猫',
        artist: '花粥',
        url: 'https://dl.stream.qqmusic.qq.com/C400001OAxbu2X5Sop.m4a?guid=6418154938&vkey=3918D8C87E2B7F02730052CFBBC9B1187C2E593A0085B89A4528BFADAA8F5F2120F4CF2849DEDB22ADF190E2E275EE787A96B9E53B8394B6&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p1.music.126.net/0DaQ36p_mUNteubtaLvduA==/109951167547079561.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      // {
      //   //theme: '#46718b',
      //   name: '回到夏天',
      //   artist: '傲七爷',
      //   url: 'https://m804.music.126.net/20220628203440/324f6ac722a24d27df63a0292dc10b9d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096432162/8f83/3910/a77e/4383e75cce84b7f83703ce2334da01a1.m4a?authSecret=00000181aa379b8a11120aa4681c084b',//'https://music.163.com/song/media/outer/url?id=1358848433',
      //   cover: 'http://p2.music.126.net/6DtmsO-P4jyJPLjnGa8Ytg==/109951165004114065.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      // },
      {
        //theme: '#46718b',
        name: 'summertime（Arrange ver.）',
        artist: '麦吉_Maggie / 盖盖Nyan',
        url: 'https://m10.music.126.net/20220628204044/4afee9bf4765b3cf036464ca54c0b326/yyaac/510e/5508/0752/fdf5b22675bbf36c4123083c6fdd0b57.m4a',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p1.music.126.net/F8n59CLKs2J_YH62RGPR9g==/109951165269752250.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: 'Lemon',
        artist: '米津玄师',
        url: 'https://m804.music.126.net/20220628204819/0463a8fc660f78ef00ad7340815f9dc8/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5537384411/f08a/b15b/5f96/831f179ed0f4504de4da6bc4ba97d229.mp3?authSecret=00000181aa441c62103d0aaba23d171b',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p1.music.126.net/vi5vobUXgNQhN8I3C1Ue4A==/109951166337048680.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '问心有愧',
        artist: '尹昔眠',
        url: 'https://dl.stream.qqmusic.qq.com/C400002VnsRK0cBDIF.m4a?guid=9344603019&vkey=AD3B5AC88B25630DAB26A537CA7F385E40178C60AB0A32C8A686943C2EBEFCDB4B3E283F0409CFE04F7C74BC7F1AE8F6EE6E56CB0559E161&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001vcM3e1EVMsm_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '记忆时空',
        artist: 'K.D',
        url: 'https://dl.stream.qqmusic.qq.com/C400004JxrQw0sO6Xu.m4a?guid=7682699107&vkey=17096DE5CF5531C667EB6FCD5A9EEF1030DAAACAFCE438173DAF71934E952366CED4DD25813D671C1585323D18C9B1B416A2B8E379E2E62D&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000kqDYE0eUhut_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '不如',
        artist: '秦海清',
        url: 'https://dl.stream.qqmusic.qq.com/C400000qrDWg2Emozz.m4a?guid=1239625305&vkey=7CEED7CD91E7E8FD2D1F832EA8248E5A590406B44F3E23DD2048EF7E64A287B1842F4D0C6DE974523F4CAF8EA66D4C6E3E62F9E50B24E41B&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004V9UWA27Q0Hw_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '大海',
        artist: '柯柯柯啊',
        url: 'https://dl.stream.qqmusic.qq.com/C400002R8y3F3ee2ZW.m4a?guid=3964264053&vkey=AA6B675D796947DC672BBD57DD6E6723A4526106301094B5761C528A07398095A3F1A801585FD0E4C933268464AEBDFDE1B112ADD381969B&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000043DNRr31uvyw_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '妈妈的话',
        artist: '猪小猪',
        url: 'https://dl.stream.qqmusic.qq.com/C400002nsgm42IdNi3.m4a?guid=0&vkey=86FA4761769F931FF144549C01CDE98598B2D0C01D3054A690C2E4B0244B2F1A98D9BDDEB39B3FF48196411587F5974FBC2114F288AFA6F6&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000fUP5G0ZWKGA_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },



	  // {
    //     name: '这些民谣 - 一次听个够',
    //     artist: '翁大涵',
    //     url: 'http://www.ytmp3.cn/down/60222.mp3',
    //     cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
    //   },
    //   {
    //     name: '你的酒馆对我打了烊',
    //     artist: '陈雪凝',
    //     url: 'http://www.ytmp3.cn/down/59770.mp3',
    //     cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
    //   },
	  // {
    //     name: 'Something Just Like This',
    //     artist: 'The Chainsmokers',
    //     url: 'http://www.ytmp3.cn/down/50463.mp3',
    //     cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
    //   },
      // {
      //   name: 'Good Time',
      //   artist: 'Owl City&Carly Rae Jepsen',
      //   url: 'http://www.ytmp3.cn/down/34148.mp3',
      //   cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      // },
  //  {
      //theme: 'pink',
    //   name: '圈住你',
    //   artist: '一口甜',
    //   url: 'https://music.163.com/song/media/outer/url?id=1372552573',
    //   cover: 'http://p1.music.126.net/Y05iUqwPp1IBwCj291_Ulg==/109951164156398679.jpg?param=130y130',
    //   lrc: ""
    // }, 
    
    // {
    //   name: "冬眠",
    //   artist: '司南',
    //   url: 'https://music.163.com/song/media/outer/url?id=1398663411',
    //   cover: 'http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130',
    //   // theme: '#fff' //进度条颜色
    // }
  ]
});
