

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

function getRandomQuote(quotes) {
    //Return a random quote in our fetched data
    console.log(quotes[getRandomIndex(0, quotes.length + 1)]);
}

let init = () => {
    text.innerHTML = "Il y a des silences qui en disent longs, comme des paroles qui ne signifient rien..";
    author.innerHTML = "Edith Piaff";

    getQuotes().then(
        quotes => {
            getRandomQuote(quotes);
        },
        error => {

        }
    );
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