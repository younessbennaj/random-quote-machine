//Get our document element (UI)
let text = document.getElementById("text");
let author = document.getElementById("author");
let newQuoteButton = document.getElementById("new-quote");
let tweetButton = document.getElementById("tweet-quote");

//Fetch our quotes 

let getQuotes = () => {
    //Fetch our quotes
    return new Promise((resolve, reject) => {
        //Our async operation
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://type.fit/api/quotes');
        xhr.onload = () => {
            //If the operation success
            resolve(JSON.parse(xhr.responseText));
        };
        xhr.onerror = () => {
            //If the operation failed
            reject(JSON.parse(xhr.responseText));
        }
        xhr.send();
    })
}

function getRandomIndex(min, max) {
    //return a random number between min (include) and max (exclude)
    return Math.ceil(Math.random() * (max - min) + min);
}

//A function that return a random quote with a given array of quotes
function getRandomQuote(quotes) {
    //Return a random quote in our fetched data
    return quotes[getRandomIndex(0, quotes.length + 1)];
}

//Function to display a random quote in the #text element and the author in #author
function setQuote(quote) {
    text.innerHTML = quote.text;
    author.innerHTML = quote.author;
}

//Convert quote text in valid query parameters
function parseQuoteToQuery(quote, author) {
    quote = `"${quote}" - ${author}`;
    quote = quote.split(" ").join('%20');
    return quote;
}

let init = () => {
    getQuotes().then(
        quotes => {
            setQuote(getRandomQuote(quotes));
        },
        error => {

        }
    );
}

window.addEventListener("load", function (event) {
    init();
});


tweetButton.addEventListener("click", tweetQuote = (event) => {
    //#tweet-quote clicked => "twitter.com/intent/tweet" + attribute to tweet 
    //Change the value of href attributes in a element
    //We add query parameters to tweet the quote
    tweetButton.href = `https://www.twitter.com/intent/tweet?text=${parseQuoteToQuery(text.innerText, author.innerText)}`;
});

//Add a handler on click event
newQuoteButton.addEventListener("click", clickButton = (event) => {
    //#new-quote button is clicked => new quote in #text

    //random quote ?

    text.innerHTML = "This is a new quote";
});