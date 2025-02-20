document.getElementById('analyzeButton').addEventListener('click', function () {
    const priceInput = document.getElementById('priceInput').value;
    const prices = priceInput.split(',').map(Number).filter(n => !isNaN(n));

    if (prices.length < 2) {
        document.getElementById('result').innerText = "Please enter at least two valid prices.";
        return;
    }

    const singleTransactionProfit = maxProfitSingleTransaction(prices);
    const multipleTransactionsProfit = maxProfitMultipleTransactions(prices);
    const buySellRecommendations = getBuySellRecommendations(prices);

    let resultText = `🔹 Max Profit (Single Transaction): ${singleTransactionProfit}\n`;
    resultText += `🔹 Max Profit (Multiple Transactions): ${multipleTransactionsProfit}\n\n`;
    resultText += `📈 Buy-Sell Recommendations:\n${buySellRecommendations.join('\n')}`;

    document.getElementById('result').innerText = resultText;
});

// Kadane's Algorithm for Single Buy-Sell
function maxProfitSingleTransaction(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

// Greedy Algorithm for Multiple Buy-Sell Transactions
function maxProfitMultipleTransactions(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

// Buy-Sell Recommendations
function getBuySellRecommendations(prices) {
    let recommendations = [];
    let buyPrice = null;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            if (buyPrice === null) {
                buyPrice = prices[i - 1];
                recommendations.push(`Buy at ${buyPrice} on day ${i}`);
            }
        } else {
            if (buyPrice !== null) {
                recommendations.push(`Sell at ${prices[i - 1]} on day ${i}`);
                buyPrice = null;
            }
        }
    }

    if (buyPrice !== null) {
        recommendations.push(`Sell at ${prices[prices.length - 1]} on day ${prices.length}`);
    }

    return recommendations;
}
