var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lotteryDraw() {
    var randomNumber = getRandomNumber(1, 100);
    var cumulativeProbability = 0;
    
    for (var i = 0; i < rarities.length; i++) {
        cumulativeProbability += rarities[i].probability;
    
        if (randomNumber <= cumulativeProbability) {
            return rarities[i];
        }
    }
    
    return null;
}

function displayResult(result) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Type: " + result.type + "<br>" + "Name: " + result.name;
}

window.onload = function() {
    var result = lotteryDraw();
    displayResult(result);
};
