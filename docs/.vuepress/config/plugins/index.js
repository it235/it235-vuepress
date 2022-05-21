module.exports = {
    'flowchart': {

    },
	'@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
     },
    "vuepress-plugin-auto-sidebar": {
        // collapsable: true,
        // titleMode: "titlecase",
    },
    "vuepress-plugin-baidu-autopush":{

    },
    'sitemap': {
        hostname: 'https://www.xxx.com'
    },
	'copyright': {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
    },
    '@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },
    "dynamic-title":{
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/favicon.ico",
        hideText: "(●—●)哦吼,不要走,给个收藏吧！",
        recoverTime: 2000
    },
	'@vuepress/nprogress':{
		
	},
	'vuepress-plugin-smooth-scroll':{
		
	},
	'@vuepress-reco/vuepress-plugin-rss':{
		site_url: "https://it235.com", //网站地址
        copyright: "君哥聊编程", //版权署名
	},
	'reading-progress':{
		//阅读进度条
	},
	'vuepress-plugin-code-copy':{
		//一键复制代码
	},
	'@vuepress-reco/vuepress-plugin-bgm-player':{
		autoShrink: {
			type: true
		},
        audios: [
          {
            name: "大城小事",
            artist: "杨千嬅",
            url:
              "https://music.163.com/song/media/outer/url?id=316756.mp3",
            cover:
              "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
          },
          {
            name: "不再犹豫",
            artist: "Beyond",
            url:
              "https://music.163.com/song/media/outer/url?id=346084.mp3",
            cover:
              "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
          },
          {
            name: "相思风雨中",
            artist: "张学友 / 汤宝如",
            url:
              "https://music.163.com/song/media/outer/url?id=188555.mp3",
            cover:
              "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
          },
          {
            name: "月半小夜曲",
            artist: "李克勤",
            url:
              "https://music.163.com/song/media/outer/url?id=115162.mp3",
            cover:
              "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
          },
          {
            name: "野孩子",
            artist: "杨千嬅",
            url:
              "https://music.163.com/song/media/outer/url?id=316486.mp3",
            cover:
              "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
          },
          {
            name: "她的背影",
            artist: "王杰",
            url: "https://music.163.com/song/media/outer/url?id=26026460.mp3",
            cover:
              "https://p1.music.126.net/LjXufn3OaIgf8OwaEP_xcQ==/109951164419438501.jpg",
          },
          {
            name: "讲不出再见",
            artist: "谭咏麟",
            url:
              "https://music.163.com/song/media/outer/url?id=152392.mp3",
            cover:
              "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
          },
          {
            name: "一生中最爱",
            artist: "谭咏麟",
            url:
              "https://music.163.com/song/media/outer/url?id=153784.mp3",
            cover:
              "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
          },
          {
            name: "丑八怪",
            artist: "薛之谦",
            url:
              "https://music.163.com/song/media/outer/url?id=27808044.mp3",
            cover:
              "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
          },
        ],
      },
	"social-share": //分享插件
      {
		title               : '234',
	    description         : '123',
		sites               : ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
        networks: ['qzone',"qq", "weibo", "wechat", "douban", "email"], //分享类型
        email: "nobug@mail.com", //email地址
		wechatQrcodeTitle : '微信扫一扫：分享', // 微信二维码提示文字
      },
}