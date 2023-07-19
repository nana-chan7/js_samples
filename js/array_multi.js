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
   // 0,  1,  2, ...
    [90, 78, 82,], // 0
    [62, 70, 68,], // 1
    [68, 88, 72,], // 2
]
console.log(rows[1][1])
console.log(rows[2][1])

// 多次元配列 & オブジェクト
var users=[
    {
        id: 1,
        name: "User1",
        email: "user1@test.com", 
    },
    {
        id: 2,
        name: "User2",
        email: "user2@test.com", 
    },
    {
        id: 3,
        name: "User3",
        email: "user3@test.com", 
    },
]
