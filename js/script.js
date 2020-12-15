/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: 'The greatness of a man is not how much wealth he aquires, but in his integrity and his ability to affect those around him positively.',
        source: 'Bob Marley',
        citation: 'yourdictionary',
        hashtag: null,
        year: null
    },
    {
        quote: 'Life is like riding a bicycle.  To keep your balance, you must keep moving.',
        source: 'Albert Einstein',
        citation: 'lifestyleanytime',
        hashtag: null,
        year: null
    },
    {
        quote: 'Don\'t let yesterday take up too much of today.',
        source: 'Will Rogers',
        citation: 'quotespedia',
        hashtag: null,
        year: null
    },
    {
        quote: 'If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.',
        source: 'Gandhi',
        citation: 'goodreads',
        hashtag: '#Goals',
        year: null
    },
    {
        quote: 'It is often easier to ask for forgiveness than permission.',
        source: 'Grace Hopper',
        citation: 'quoteinvestigator',
        hashtag: null,
        year: '1982'
    },
    {
        quote: 'Be not glad at the misfortune of another, though he may be your enemy.',
        source: 'George Washington',
        citation: 'goodreads',
        hashtag: null,
        year: null
    }
];

const backgroundColor = [
    'ffa8b2',
    'eaa8ff',
    'a8c3ff',
    'a8ffed',
    'a8ffd5',
    'fffca8',
    'ffd3a8'
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * (quotes.length - 1));
    const randomQuote = quotes[randomQuoteIndex];

    return randomQuote;
}

/*
'getRandomColor' fumction gets a random color hex code
*/
function getRandomColor() {
    const randomColorIndex = Math.floor(Math.random() * (backgroundColor.length - 1));
    const randomColor = `#${backgroundColor[randomColorIndex]}`;

    return randomColor;
}
/***
 * `printQuote` function
***/
function printQuote() {
    const quote = getRandomQuote();
    const color = getRandomColor();
    let print = `<p class='quote'> ${quote.quote}</p><p class='source'>${quote.source}`;
    if (quote.citation) {
        print += `<span class = 'citation'>${quote.citation}</span>`
    }
    if (quote.year) {
        print += `<span class = 'year'>${quote.year}</span>`
    }
    if (quote.hashtag) {
        print += `<span class = 'hashtag'>, ${quote.hashtag}</span>`
    }
    print += `</p>`;

    document.body.style.backgroundColor = color;
    document.getElementById('quote-box').innerHTML = print;
}

function recurringRandomQuotes() {
    setInterval(printQuote, 2000);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('recurring-random').addEventListener("click", recurringRandomQuotes, false);