

//#tweet-quote clicked => "twitter.com/intent/tweet" + attribute to tweet 

//#quote-box => horizontaly centred + run tests with browser's zoom level at 100% and page maximized

//Get our document element

let text = document.getElementById("text");
let author = document.getElementById("author");
let newQuoteButton = document.getElementById("new-quote");
let tweetButton = document.getElementById("tweet-quote");

//Fetch our quotes 

let getQuotes = () => {
    //Fetch our quotes
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://type.fit/api/quotes');
    xhr.onload = () => {
        console.log(JSON.parse(xhr.responseText));
    };
    xhr.send();
}

let init = () => {
    text.innerHTML = "Il y a des silences qui en disent longs, comme des paroles qui ne signifient rien..";
    author.innerHTML = "Edith Piaff";

    getQuotes();
}

window.addEventListener("load", function (event) {
    init();
});

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
    //#new-quote button is clicked => new quote in #text

    //random quote ?

    text.innerHTML = "This is a new quote";
});