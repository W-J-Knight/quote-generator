const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const TwitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Create a random number
  const randNum = Math.floor(Math.random() * apiQuotes.length);
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[randNum];
//   Check if Author field is Blank and replace it with 'Unknown'
    if (!quote.author) {
      authorText.textContent = "Unknow"  
    }else{
        authorText.textContent = quote.author;
    }
    // Check Quote Length to determine styling
    if (quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else {
    quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (err) {
    // Catch error here
    console.log(`ERROR: ${err}`);
  }
}

//ON Load
getQuotes();
