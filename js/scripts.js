document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});

// スポットライトの移動をマウスの位置に連動させる
const spotlight = document.querySelector('.spotlight');
let isMouseOverWindow = true; // マウスがウィンドウ内にあるかどうかのフラグ

// ウィンドウ外にカーソルが移動した際のイベントリスナー
window.addEventListener('mouseout', function(e) {
    if (e.relatedTarget === null) {
        isMouseOverWindow = false;
        spotlight.style.display = 'none';
    }
});

// ウィンドウ内にカーソルが移動した際のイベントリスナー
window.addEventListener('mouseover', function(e) {
    if (e.relatedTarget === null) {
        isMouseOverWindow = true;
    }
});

document.addEventListener('mousemove', function(e) {
    if (!isMouseOverWindow) return; // ウィンドウ外の場合は何もしない

    const xPos = e.pageX;
    const yPos = e.pageY;

    // スポットライトの位置をマウスの位置に合わせて移動させる
    spotlight.style.left = `${xPos}px`; 
    spotlight.style.top = `${yPos}px`; 

    // カーソルが画面外に出た場合はスポットライトを非表示にする
    if (xPos < 0 || xPos > window.innerWidth || yPos < 0 || yPos > window.innerHeight) {
        spotlight.style.display = 'none';
    } else {
        spotlight.style.display = 'block';
    }
});

