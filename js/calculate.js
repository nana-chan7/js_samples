console.log("---二項演算---")
var hp = 5;     // ; はなくてもいいがある方がいい
hp = hp + 3;
console.log(hp);

hp = hp - 2;
console.log(hp);

hp = hp * 2;
console.log(hp);

hp = hp / 3;
console.log(hp);


console.log("---単項演算---")
hp = 5;
hp ++;
console.log(hp);

hp = 5;
hp --;
console.log(hp);


console.log("---単項演算---")
var hp = 5;
hp ++;
console.log(hp);

hp = 5;
hp --;
console.log(hp);


console.log("---複合演算---")
hp = 5;
hp += 3;
hp -= 2;
hp *= 3;
hp /= 5;
console.log(hp);


console.log("---文字の連結---")
hp = 10;
var monsterName = "スライム";
var message = monsterName + "のHPは" + hp;
console.log(message);


console.log("---論理演算---")
var isBool = false;
hp = 10;
isBool = (hp == 20);
console.log(isBool);

isBool = (hp > 10);
console.log(isBool);

isBool = (hp <= 10);
console.log(isBool);

isBool = (hp != 20);
console.log(isBool);


console.log("---三項演算---")
// hp = 20;
hp = 5;
message = (hp < 10) ? "ピンチ！" : "大丈夫";
console.log(message)

