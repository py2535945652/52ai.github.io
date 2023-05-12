const data = 'http://new.cutim.top/,https://chat.gandli.ga/,https://ai.16661905.xyz/,https://chat.kimwong.me/,https://chatgpt.cros3hadow.org/,https://www.starryu.cn/,https://gpt.nyanners.moe/,https://chatgpt.revincx.icu/,https://chat.dofun.tech/,https://cham.pub/,https://plus.wxredcover.cn/,https://yiyan.baidu.com/,https://chat.gptly.net/,https://chat.w630.cc/,https://dataweng.com/,https://www.nununu.net/,https://chatgpt.orcas.link/,https://gpt.bactive.bio/,https://www.chatgptcn.live/,https://chatgpt.bowlofnoodles.top/,https://chat.marlonlu.cn/,https://hub.docker.com/r/quzard/chatgpt-demo,https://sofast.ai/chat,https://next.wio.me/,https://chatgpt.eclipsewww.xyz/,https://chatgpt.peterdavehello.org/,https://chatgpt.gengai.net/ChatGPT.html,https://www.weijiwangluo.com/talk,https://aitools.run/,https://chat.lmsys.org/,https://chat.moyunav.com/,https://chatgpt-next.aab.icu/,https://www.ziyuandaili.com/,https://chat.bigs.top/,https://trychatgp.com/,https://chat.internetip.cn/,https://chat.getgpt.world/,https://chat.fcc.cm/,https://freechatgpt.chat/,https://chat.wobcw.com/,https://modelscope.cn/,https://dusk.chat/,https://404find.me/,https://ytliu.top/,https://sotai.cc/,https://ai-toolbox.codefuture.top/,https://chat.geekr.cool/,https://chatgpt.waltcow.com/';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();