// 2023-07-19 2.week6

// parent (親要素)
var stage = document.getElementById("stage")

// child (子要素)
var monsterElement1 = document.createElement("p") // 文字列でタグを指定
monsterElement1.innerHTML = "スライム"

// parent に追加
stage.appendChild(monsterElement1)


var monsterElement2 = document.createElement("p") 
monsterElement2.innerHTML = "キメラ"
stage.appendChild(monsterElement2)

// child の削除
stage.removeChild(monsterElement1)

// aリンク追加
var a = document.createElement("a")
a.href = "https://www.google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank" // 新しいブラウザで開く
a.innerHTML = monsterElement1.innerHTML
stage.appendChild(a)