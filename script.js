const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  showLoadingSpinner();
  // Create a random number
  const randNum = Math.floor(Math.random() * apiQuotes.length);
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[randNum];
  //   Check if Author field is Blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknow";
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote Length to determine styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Get Quotes From API
async function getQuotes() {
  //   const apiUrl = "https://type.fit/api/quotes";
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  showLoadingSpinner();
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (err) {
    // Catch error here
    console.log(`ERROR: ${err}`);
    const apiNotFind = () => {
        window.location.replace("./404.html");
    }
    setTimeout(apiNotFind, 3000);
  }
}
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//ON Load
getQuotes();
// loading()
