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
        // name: '樱花树下的约定',
        // artist: '旺仔小乔',
        // url: 'https://dl.stream.qqmusic.qq.com/C400000NaUqj2CtHGl.m4a?guid=8841275920&vkey=9591A4E69CB9F8AEC2C0C21727FE85A4CFBC14501EABC411FAAB43E90B1FC4DF12987EC80B52059C76D2B4FB5F3EE7EAD3C0E7653106366E&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002dA6qz176ylM_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
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
        // name: '晴天的猫',
        // artist: '花粥',
        // url: 'https://dl.stream.qqmusic.qq.com/C400001OAxbu2X5Sop.m4a?guid=7046017230&vkey=7DB21C6EA534F711C3BF964F2B9AAFFCCD0515BBBDCC88044ADFD39C52F4AC11E83C55FF0DB599CC32AF4A6678D9C3D12747F06779EBC2A3&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'http://p1.music.126.net/0DaQ36p_mUNteubtaLvduA==/109951167547079561.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
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
        // name: '朗朗晴天/ハレハレヤ',
        // artist: '麦吉_Maggie ',
        // url: 'https://dl.stream.qqmusic.qq.com/C400001CEaSR49Rls1.m4a?guid=262237859&vkey=558ECEF326E90B8B8A950832883DD34DE2FE1B18C938C3A45242670BE4688583007056001912CF7B970BE039AAB1BFA7E73A223D712D513A&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001rTXPu4E94nL_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: 'Lemon',
        // artist: '米津玄师',
        // url: 'https://dl.stream.qqmusic.qq.com/C400001xb80F2PZW8D.m4a?guid=7540583280&vkey=856AE75BCD536603CB97E2BBCA79094CB2BA23599CE481186033433303DD0029406CE628AC49C784C9552A7694E4B71242C3BFC97C133D8E&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'http://p1.music.126.net/vi5vobUXgNQhN8I3C1Ue4A==/109951166337048680.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '问心有愧',
        // artist: '尹昔眠',
        // url: 'https://dl.stream.qqmusic.qq.com/C400002VnsRK0cBDIF.m4a?guid=4917201745&vkey=5D22DA6A26981DD571F10AC2AEFD527DDF66FAE27640C3CAF94FE33B57C3DBB6C809852C4C003A353C1ACC43838A4F84418D04AC9928FDF5&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001vcM3e1EVMsm_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '记忆时空',
        artist: 'K.D',
        url: 'https://dl.stream.qqmusic.qq.com/C400004JxrQw0sO6Xu.m4a?guid=9171516148&vkey=2B01E958034131CC8BB271D32EE2430983E3E153B82ECA190C43700B29C74FD51F60E0CFB997CDF6BA811D0AAAB2C180F269870DC1B68910&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000kqDYE0eUhut_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '不如',
        // artist: '秦海清',
        // url: 'https://dl.stream.qqmusic.qq.com/C400000qrDWg2Emozz.m4a?guid=7653260326&vkey=5D2D63AF2B69C81A2CD4D456056F170A5700E151C5655F62029387AA3FCE82065313CDF748653B145ABF92C29C6CA868398AD921381130C9&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004V9UWA27Q0Hw_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '大海',
        // artist: '柯柯柯啊',
        // url: 'https://dl.stream.qqmusic.qq.com/C400002R8y3F3ee2ZW.m4a?guid=769433340&vkey=C0DCAF4847D3B90D374A2ABE3A2F83E88F1B99F962C8FDD55927339CD0EF304FFDA28871CDB830A45B2DCD187656325EB2F53EB1EB3FEA83&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000043DNRr31uvyw_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '妈妈的话',
        // artist: '猪小猪',
        // url: 'https://dl.stream.qqmusic.qq.com/C400002nsgm42IdNi3.m4a?guid=7923263577&vkey=54988946D4E9B14ACF8118B280640C573155FE5F51FBBFC9423917BBF6EBE39E6BEBD3F60BB83E03941DCC2725AC3FBCCB3F8AB8C62A3395&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000fUP5G0ZWKGA_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '白鸽',
        // artist: '你的上好佳',
        // url: 'https://dl.stream.qqmusic.qq.com/C400003yO6g71TOzDf.m4a?guid=6001155964&vkey=0F24EBC9AC97B6750EFAF37C56EFEFC5ACD1F4BC53C015125B690A5E64624065C2ADD8FF57C018F6056492B91F667C6D030284AF396399AA&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000022CjDg3DmaES_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        // name: '晚风做酒',
        // artist: 'L（桃籽） /周林枫 /三楠',
        // url: 'https://dl.stream.qqmusic.qq.com/C4000019oo0u0jIV7Z.m4a?guid=9194493415&vkey=C15C6146829FE676FC0674F2737B4130AB50DD8630D7CEB763F53BD6A45CE4BE3C7EF489A7ACB08901A24B0BE7CA2AF8E26451B4222F292D&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        // cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003FdArP2PlB1j_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
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
