let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Create a random number
  const randNum = Math.floor(Math.random() * apiQuotes.length);
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[randNum];
  console.log(quote);
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
