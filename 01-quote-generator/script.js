const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQoutes = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show quotes
function newQuote() {
  loading();
  // To pick a random quote from api qoute
  const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
  //   Check if author field is null
  if (!quote.author) {
    authorText.textContent = "Unknow";
  } else {
    authorText.textContent = quote.author;
  }

  if (quoteText > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //   set the quote and hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Get quotes from API
async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQoutes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error here
  }
}

// Twitter quote
function tweetQuote() {
  const twitterUrl = `https://x.com/intent/post?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
