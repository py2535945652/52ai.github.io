const data = 'https://chat1.52ai.pw,https://chat2.52ai.pw,https://chat3.52ai.pw,https://chat4.52ai.pw,https://chat5.52ai.pw,https://chat6.52ai.pw,https://chat7.52ai.pw,https://chat8.52ai.pw,https://chat9.52ai.pw,https://chat.zoai.cc,';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();
