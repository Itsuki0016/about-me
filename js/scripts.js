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

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const body = document.querySelector('body');

    // 初回ロード時にフェードイン効果を適用
    body.classList.add('fade-in');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルトのリンク動作を無効化
            const targetUrl = e.target.href;

            // フェードアウト効果を追加
            body.classList.remove('fade-in');
            body.classList.add('fade-out');

            // フェードアウトが完了したら次のページに遷移
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000); // フェードアウトの時間に合わせる
        });
    });
});



document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

    // ここにフォームの送信処理を追加（例：AJAXで送信する場合）
    alert("フォームが送信されました。"); // 確認用のアラート（必要に応じて削除）

    // フォームのリセット
    this.reset();
});