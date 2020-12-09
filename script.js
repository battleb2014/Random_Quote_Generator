/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: 'The greatness of a man is not how much wealth he aquires, but in his integrity and his ability to affect those around him positively.',
        author: 'Bob Marley',
        citation: 'https://quotes.yourdictionary.com/author/bob-marley/615083#:~:text=Bob%20Marley%20Quotes&text=3%20of%2043-,The%20greatness%20of%20a%20man%20is%20not%20in%20how%20much,affect%20those%20around%20him%20positively.',
        date: null
    },
    {
        quote: 'Life is like riding a bicycle.  To keep your balance, you must keep moving.',
        author: 'Albert Einstein',
        citation: 'https://lifestyleanytime.com.au/life-is-like-riding-a-bicycle/#:~:text=The%20famous%20physicist%20Albert%20Einstein,balance%20you%20must%20keep%20moving.',
        date: null
    },
    {
        quote: 'Don\'t let yesterday take up too much of today.',
        author: 'Will Rogers',
        citation: 'https://www.quotespedia.org/authors/w/will-rogers/dont-let-yesterday-take-up-too-much-of-today-will-rogers/',
        date: null
    },
    {
        quote: 'If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.',
        author: 'Gandhi',
        citation: 'https://www.goodreads.com/quotes/122211-if-i-have-the-belief-that-i-can-do-it',
        date: null
    },
    {
        quote: 'It is often easier to ask for forgiveness than permission.',
        author: 'Grace Hopper',
        citation: 'https://quoteinvestigator.com/2018/06/19/forgive/#:~:text=In%201982%20the%20%E2%80%9CChicago%20Tribune,get%20permission%2C%E2%80%9D%20she%20said.',
        date: '1982'
    },
    {
        quote: 'Be not glad at the misfortune of another, though he may be your enemy.',
        author: 'George Washington',
        citation: 'https://www.goodreads.com/quotes/561557-be-not-glad-at-the-misfortune-of-another-though-he',
        date: null
    }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    let quote;

    randomIndex = Math.floor(Math.random() * 5);
    randomQuote = quotes[randomIndex];

    return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
    getRandomQuote();
    let print = < p class="quotes" > `${randomQuote.quote}`</p > <p class="source">`${randomQuote.source}`;

    if (randomQuote.quote) {
        print += `<span class = 'citation'>${randomQuote.quote}</span></p>`
    }
    if (randomQuote.author) {

    }
    return print;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);