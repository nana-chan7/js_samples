// 2023-07-05 2.week4

// コンテンツ取得
var priceElement = document.getElementById("price")
var price =priceElement.innerText

// console.log(priceElement)
console.log(price)


// コンテンツ更新
var messageElement = document.getElementById("message")

// messageElement.innerText = "いらっしゃい"

// messageElement.innerText = "<p>いらっしゃい</p>"
// ※ .innerTxet は入力したものがそのまま出力される(出力: <p>いらっしゃい</p>)

messageElement.innerHTML = "<p>いらっしゃい</p>"
// タグをつけたいときは、.innerHTML を使う


// 最小値と最大値を入力するとランダムで出力
function getRandomInt(min, max){
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

// タイトル「サイコロ」を表示
var titleElement = document.getElementById("title")
titleElement.innerText = "サイコロ"  // .innerHTML でも可

// サイコロの目をランダムで表示
var number = getRandomInt(1, 6)
console.log(number)

var resultElement = document.getElementById("dice_result")
resultElement.innerText = number
