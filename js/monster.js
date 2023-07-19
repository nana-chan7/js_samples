// 2023-07-19 2.week6

// parent (親要素)
var stage = document.getElementById("stage")

// child (子要素)
var monsterElement = document.createElement("p") // 文字列でタグを指定
monsterElement.innerHTML = "スライム"

// parent に追加
stage.appendChild(monsterElement)