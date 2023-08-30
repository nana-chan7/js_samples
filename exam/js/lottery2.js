var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

function getRandomItemByProbability(items) {
    // probability の合計
    var totalProbability = items.reduce(function (sum, item) {
        return sum + item.probability;
    }, 0);

    // 0 - 100のランダムな数字
    var randomValue = Math.random() * totalProbability;
    var accumulatedProbability = 0;

    for (var item of items) {
        accumulatedProbability += item.probability;

        if (randomValue <= accumulatedProbability) {
            return item;
        }
    }
}

function drawLottery() {
    var resultElement = document.getElementById('result');
    var selectedItem = getRandomItemByProbability(rarities);

    resultElement.innerHTML = `
        <p>Congratulations! You drew:</p>
        <p>Type: ${selectedItem.type}</p>
        <p>Name: ${selectedItem.name}</p>
    `;
}