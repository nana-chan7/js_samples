// 2023-09-20 3.week1

// ※ 2つある h2タグの１つだけ←初めに見つかったやつ
console.log("--- querySelector ---")
var h2 = document.querySelector('h2') 
console.log(h2)

// All ← 複数
console.log("--- querySelectorAll ---")
var h2 = document.querySelectorAll('h2')
// var h2 = document.getElementsByTagName('h2')  // ※ 同じ処理
console.log(h2[0]) // インデックスを指定する
console.log(h2[1])

// id を指定 (※ idは必ず一つ)
console.log("--- id(#)で指定 ---")
var cityTitle = document.querySelector('#city-title')
// var cityTitle = document.getElementById('city-title')  // ※ 同じ処理
console.log(cityTitle)

// 表示される型が違う
console.log("-----------")
var cities = document.getElementsByClassName('city') // (今回のテストには出ない)
console.log(cities)
var cities = document.querySelectorAll('.city') 
console.log(cities)

// 繰り返し処理
for (const city of cities) {
    console.log(city.innerHTML)
}

console.log("-----------")
var items = document.querySelectorAll('ul.menus > li')
console.log(items)
// 'ul.menus > li' ulタグmenusクラスの子(>: 親子関係) li

// jQuery だと↓
// $('ul.menus > li')

