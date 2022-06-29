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
        artist: '旺仔小乔',
        url: 'https://dl.stream.qqmusic.qq.com/C400000NaUqj2CtHGl.m4a?guid=2435162615&vkey=3CBC3E3DCBC84744157749AD14F727010E357B2ECFF675F9838B693D65673CFCA3D5B9391D636833CE6198405B43B7C3CCB60EBB991B71EC&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002dA6qz176ylM_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
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
        url: 'https://dl.stream.qqmusic.qq.com/C400001OAxbu2X5Sop.m4a?guid=8851962411&vkey=164B048AED90F240665442B7E99ADFCF4B85F0FD1FE945C3E45D1C4E1E38DACA7C4B4553DE677734EAA9CA59C766D22FE3927C33B3E6668D&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
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
        name: '朗朗晴天/ハレハレヤ',
        artist: '麦吉_Maggie ',
        url: 'https://dl.stream.qqmusic.qq.com/C400001CEaSR49Rls1.m4a?guid=6107209908&vkey=EEE39E687D60AA237C7D62A89575380DAA3584BC7F029866208D17CEA1E64A6084B8935B1E6121A72F7CBD121B9B09E1808610BA62F9E00D&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001rTXPu4E94nL_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: 'Lemon',
        artist: '米津玄师',
        url: 'https://dl.stream.qqmusic.qq.com/C400001xb80F2PZW8D.m4a?guid=7406439408&vkey=E36B5A5163F32579745A31888453FCE87A43B0E7B1D10D8D12A8AB40876C50A2EAD67206B95F9DF564B713DDA0611AB28DFBBA7C8074763C&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p1.music.126.net/vi5vobUXgNQhN8I3C1Ue4A==/109951166337048680.jpg?param=130y130', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '问心有愧',
        artist: '尹昔眠',
        url: 'https://dl.stream.qqmusic.qq.com/C400002VnsRK0cBDIF.m4a?guid=1868021816&vkey=770D8BAE8697BCFCE57F089E260AEFB5CCA419CD0975955051364BD57D64EE15C7C8AC54B66C9ED4DD6CE59D0B1C8272B2AD07749A3684C2&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001vcM3e1EVMsm_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '记忆时空',
        artist: 'K.D',
        url: 'https://dl.stream.qqmusic.qq.com/C400004JxrQw0sO6Xu.m4a?guid=6073506240&vkey=9A738C4B3124D398F4EA05B95332591BD032F7EC04F838AADB1A6A34525DBAD57E428335FD32E152DE5B617391DB15EF8D4DDF37404F26D5&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000kqDYE0eUhut_1.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '不如',
        artist: '秦海清',
        url: 'https://dl.stream.qqmusic.qq.com/C400000qrDWg2Emozz.m4a?guid=6520064796&vkey=1702367FBF11AB9982B5BE7E1DDE3CB6E0576473D2F10048B68B11464E40DD4586E1671FE90886C5C1B895CB291849A676A06168894A4A9E&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004V9UWA27Q0Hw_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '大海',
        artist: '柯柯柯啊',
        url: 'https://dl.stream.qqmusic.qq.com/C400002R8y3F3ee2ZW.m4a?guid=9233333504&vkey=0D0A9900896844F9D59DBC17A3234B824BEC6F90CAF2CA17BA65798E3DAABA8DDAECA2D115C05A65FB8C3CA8251B97F87C1BBD36BA9A5496&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000043DNRr31uvyw_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '妈妈的话',
        artist: '猪小猪',
        url: 'https://dl.stream.qqmusic.qq.com/C400002nsgm42IdNi3.m4a?guid=4093683776&vkey=62507C1B51E197725A3C223256B4862F6DACDC51765635BB989941D318CB3D9AD6BD2072E6BEE02CAD13B5A0764CEF1A890E6EF1390CA067&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000fUP5G0ZWKGA_3.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '白鸽',
        artist: '你的上好佳',
        url: 'https://dl.stream.qqmusic.qq.com/C400003yO6g71TOzDf.m4a?guid=7733612032&vkey=2F373D7724B8186016701D67BCE21851AE7472D570F21FFE6D16EAC1E1590198B6EE199BF366DA89D368305FF1E1B7B5C35BF183277B2690&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000022CjDg3DmaES_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        //theme: '#46718b',
        name: '晚风做酒',
        artist: 'L（桃籽） /周林枫 /三楠',
        url: 'https://dl.stream.qqmusic.qq.com/C4000019oo0u0jIV7Z.m4a?guid=5449785194&vkey=59C6FE449EBB70FA4699FA6844946EBE36D9FBF38898130D50128B5E22ADFBDE79E76CFE464DBAE5617DE1D0AE9D7D159555129680B885E7&uin=494067368&fromtag=120032',//'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003FdArP2PlB1j_2.jpg?max_age=2592000', //'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
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
