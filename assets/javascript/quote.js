const quotes = [
    { quote: "Do it… or take a nap instead." },
    { quote: "One green tea a day keeps the stress away." },
    { quote: "One Green Tea Please." },
    { quote: "Looking busy is a skill, not a coincidence." },
    { quote: "Life’s too short—order dessert first." }
];


// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex].quote;
}

// Display a random quote on page load
document.getElementById("quote").innerText = getRandomQuote();