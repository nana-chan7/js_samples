// 2023-07-19 2.week6

var character = {
    id: 1,
    name: "アリス",
    job: "wizard",
    level: 1,
    hp: 15,
    mp: 10,
    exp: 0,
}

console.log(character)
console.log(character.name)
console.log(character.level)

character.weapon = "ブロンズナイフ"
console.log(character)


// 多次元配列
var rows = [
    [90, 78, 82,],
    [62, 70, 68,],
    [68, 88, 72,],
]

console.log(rows[1][1])