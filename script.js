async function getPrediction() {
    let stockSymbol = document.getElementById("stockInput").value.trim();
    if (stockSymbol === "") {
        alert("Please enter a stock symbol.");
        return;
    }

    let response = await fetch("https://your-ai-api.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock: stockSymbol })
    });

    let result = await response.json();
    document.getElementById("result").innerHTML = `🔮 AI Prediction: $${result.prediction.toFixed(2)}`;
}
