document.getElementById('analyzeButton').addEventListener('click', function() {
    const priceInput = document.getElementById('priceInput').value;
    const prices = priceInput.split(',').map(Number);
    
    if (prices.length < 2) {
        document.getElementById('result').innerText = "Please enter at least two prices.";
        return;
    }

    const { maxProfit, buySellRecommendations } = analyzeStockPrices(prices);
    
    let resultText = `Maximum Profit: ${maxProfit}\nRecommendations:\n`;
    buySellRecommendations.forEach(rec => {
        resultText += `${rec}\n`;
    });

    document.getElementById('result').innerText = resultText;
});

function analyzeStockPrices(prices) {
    let maxProfit = 0;
    let buySellRecommendations = [];
    let buyPrice = null;

    for (let i = 1; i < prices.length; i++) {
        // If the price is higher than the previous price, we consider it for profit
        if (prices[i] > prices[i - 1]) {
            if (buyPrice === null) {
                buyPrice = prices[i - 1]; // Set buy price
                buySellRecommendations.push(`Buy at ${buyPrice} on day ${i}`);
            }
        } else {
            // If the price drops, we sell if we have a buy price set
            if (buyPrice !== null) {
                maxProfit += prices[i - 1] - buyPrice; // Calculate profit
                buySellRecommendations.push(`Sell at ${prices[i - 1]} on day ${i}`);
                buyPrice = null; // Reset buy price
            }
        }
    }

    // Handle case where the last price is a sell
    if (buyPrice !== null) {
        buySellRecommendations.push(`Sell at ${prices[prices.length - 1]} on day ${prices.length}`);
        maxProfit += prices[prices.length - 1] - buyPrice;
    }

    return { maxProfit, buySellRecommendations };
}
