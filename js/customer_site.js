const CUSTOMER_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
    },
//    1080: {
//        api: 'https://api.1080zyku.com/inc/api_mac10.php/provide/vod',
//        name: '1080资源',
//    },
    ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
    },
    askzy: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡',
        adult: true
    },
    slzy: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林',
        adult: true
    },
    nxx: {
        api: 'https://naixxzy.com/api.php/provide/vod/',
        name: '奶香香',
        adult: true
    },
    dnzy: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '大奶',
        adult: true
    },
    ljzy: {
        api: 'https://apilj.com/api.php/provide/vod/',
        name: '辣椒',
        adult: true
    },
    jzy: {
        api: 'https://www.jingpinx.com/api.php/provide/vod/',
        name: '精品',
        adult: true
    },
    155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        adult: true
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
