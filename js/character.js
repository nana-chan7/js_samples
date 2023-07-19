// 2023-07-12 2.week5
// 課題2 自習 ChatGPT

// 画像コンテナの要素を取得
var imageContainer = document.getElementById('image-container');
// 現在の位置を示す変数を初期化
var currentPosition = 1;
// タイマー変数を初期化
var timer;

// Startボタンがクリックされた時のイベントリスナー
document.getElementById('start-button').addEventListener('click', function() {
    // タイマーが存在しない場合にのみタイマーを開始
    if (!timer) {
        timer = setInterval(changeBackgroundPosition, 1000);
    }
});

// Stopボタンがクリックされた時のイベントリスナー
document.getElementById('stop-button').addEventListener('click', function() {
    // タイマーを停止し、タイマー変数をnullに設定
    clearInterval(timer);
    timer = null;
});

// 背景位置を変更する関数
function changeBackgroundPosition() {
    // 背景位置を計算して設定
    imageContainer.style.backgroundPosition = calculateBackgroundPosition(currentPosition);
    // 現在の位置を更新
    currentPosition = (currentPosition % 12) + 1;
    // 位置が4になった場合、1に戻す
    if (currentPosition === 4) {
        currentPosition = 1;
    }
}

// 背景位置を計算する関数
function calculateBackgroundPosition(position) {
    // 列の計算
    var column = (position - 1) % 3;
    // 行の計算
    var row = Math.floor((position - 1) / 3);
    // 背景画像のX座標を計算
    var backgroundX = column * -32;
    // 背景画像のY座標を計算
    var backgroundY = row * -32;
    // 計算された位置を返す
    return backgroundX + 'px ' + backgroundY + 'px';
}

// 位置を表示するための要素を取得
var positionDisplay = document.getElementById('position-display');

// 画像コンテナ上でマウスが移動した時のイベントリスナー
imageContainer.addEventListener('mousemove', function(event) {
    // 画像コンテナの位置を取得
    var containerRect = imageContainer.getBoundingClientRect();
    // マウス座標からコンテナ内の相対座標を計算
    var offsetX = event.clientX - containerRect.left;
    var offsetY = event.clientY - containerRect.top;
    // 位置情報を表示するテキストを作成
    var positionText = 'Position: (' + offsetX + ', ' + offsetY + ')';
    // 位置情報を表示する要素にテキストを設定
    positionDisplay.textContent = positionText;
});

// 画像コンテナからマウスが外れた時のイベントリスナー
imageContainer.addEventListener('mouseout', function() {
    // 位置情報をリセット
    positionDisplay.textContent = 'Position: -';
});
