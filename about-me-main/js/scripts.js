document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});

// スポットライトの移動をマウスの位置に連動させる
const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', function(e) {
    const xPos = e.pageX;
    const yPos = e.pageY;

    // スポットライトの位置をマウスの位置に合わせて移動させる
    spotlight.style.left = xPos + 'px';
    spotlight.style.top = yPos + 'px';
});
