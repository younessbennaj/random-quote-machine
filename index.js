//First load => random quote in #text

//First load => author in #author

//#new-quote button is clicked => new quote in #text

//#tweet-quote clicked => "twitter.com/intent/tweet" + attribute to tweet 

//#quote-box => horizontaly centred + run tests with browser's zoom level at 100% and page maximized

//Get our document element

let text = document.getElementById("text");
let author = document.getElementById("author");
let newQuoteButton = document.getElementById("new-quote");
let tweetButton = document.getElementById("tweet-quote");

//convert quote text in valid query parameters
function parseQuoteToQuery(quote) {
    quote = quote.split(" ");
    quote = quote.join('%20');
    return quote;
}

tweetButton.addEventListener("click", tweetQuote = (event) => {
    //Change the value of href attributes in a element
    //We add query parameters to tweet the quote
    tweetButton.href = `${tweetButton.href}?text=${parseQuoteToQuery(text.innerText)}`;
});

//Add a handler on click event
newQuoteButton.addEventListener("click", clickButton = (event) => {
    text.innerHTML = "This is a new quote";
});