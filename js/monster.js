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


// モンスターリスト
function createMonserElement(name, imageName){
    var div = document.createElement("div")
    var p = document.createElement("p")
    var img = document.createElement("img")

    // モンスター名を設定
    p.innerHTML = name
    // 画像ファイル設定
    img.src = "images/" + imageName

    // div に追加
    div.appendChild(p)
    div.appendChild(img)

    // class=col-4
    div.setAttribute("class", "col-4")          //1
    // div.className = "col-4"                  //2
    // div.classList.add("col-4")               //3
    // div.classList.add("monster")

    // id=monster-list に追加
    monsterList.appendChild(div)
}

var monsterList = document.getElementById("monster-list")
createMonserElement("モンスター１", "monster_006.png")

createMonserElement("モンスター２", "monster_022.png")
createMonserElement("モンスター３", "monster_040.png")
