Overview:-

This JavaScript tool analyzes a series of historical stock prices input by the user and provides recommendations on when to buy and sell stocks to maximize profit. The tool calculates the maximum profit possible from the given prices and outputs the corresponding buy/sell recommendations.


Features:-
~ User Input: Accepts a comma-separated list of stock prices.
~ Profit Calculation: Computes the maximum profit that can be achieved based on the input prices.
~ Buy/Sell Recommendations: Provides a detailed list of when to buy and sell based on price fluctuations.


How It Works:-
1) Event Listener: The tool listens for a click event on the "Analyze" button.
2) Input Handling: It retrieves the user input, splits it into an array of numbers, and checks if there are at least two prices.
3) Analysis Function: The analyzeStockPrices function processes the prices to determine the maximum profit and generates buy/sell recommendations.
4) Output: The results are displayed on the webpage, showing the maximum profit and the recommendations.


Explanation of Key Functions:-

Event Listener:
~ Listens for clicks on the "Analyze" button.
~ Retrieves and processes the input prices.

analyzeStockPrices(prices):
1) Parameters: An array of stock prices.
2) Returns: An object containing the maximum profit and an array of buy/sell recommendations.
   
Logic:
~ Iterates through the prices to identify when to buy and sell.
~ Calculates the maximum profit based on price changes.
~ Generates recommendations based on the identified buy/sell points.

Usage:-
~ Open the HTML file in a web browser.
~ Enter a series of stock prices separated by commas (e.g., 100, 180, 260, 310, 40, 535, 695).
~ Click the "Analyze" button to see the maximum profit and buy/sell recommendations.

Conclusion:-
This tool provides a simple yet effective way to analyze stock prices and make informed trading decisions. It can be further enhanced by integrating real-time stock data and additional trading strategies.
