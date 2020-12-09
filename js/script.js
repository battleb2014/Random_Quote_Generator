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
        author: 'Bob Marley',
        citation: 'https://quotes.yourdictionary.com/author/bob-marley/615083#:~:text=Bob%20Marley%20Quotes&text=3%20of%2043-,The%20greatness%20of%20a%20man%20is%20not%20in%20how%20much,affect%20those%20around%20him%20positively.',
        source: 'yourdictionary',
        date: null
    },
    {
        quote: 'Life is like riding a bicycle.  To keep your balance, you must keep moving.',
        author: 'Albert Einstein',
        citation: 'https://lifestyleanytime.com.au/life-is-like-riding-a-bicycle/#:~:text=The%20famous%20physicist%20Albert%20Einstein,balance%20you%20must%20keep%20moving.',
        source: 'lifestyleanytime',
        date: null
    },
    {
        quote: 'Don\'t let yesterday take up too much of today.',
        author: 'Will Rogers',
        citation: 'https://www.quotespedia.org/authors/w/will-rogers/dont-let-yesterday-take-up-too-much-of-today-will-rogers/',
        source: 'quotespedia',
        date: null
    },
    {
        quote: 'If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.',
        author: 'Gandhi',
        citation: 'https://www.goodreads.com/quotes/122211-if-i-have-the-belief-that-i-can-do-it',
        source: 'goodreads',
        date: null
    },
    {
        quote: 'It is often easier to ask for forgiveness than permission.',
        citation: 'Grace Hopper',
        source: 'https://quoteinvestigator.com/2018/06/19/forgive/#:~:text=In%201982%20the%20%E2%80%9CChicago%20Tribune,get%20permission%2C%E2%80%9D%20she%20said.',
        date: '1982'
    },
    {
        quote: 'Be not glad at the misfortune of another, though he may be your enemy.',
        citation: 'George Washington',
        source: 'https://www.goodreads.com/quotes/561557-be-not-glad-at-the-misfortune-of-another-though-he',
        date: null
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
console.log(getRandomQuote());

/*
'getRandomColor' fumction
*/
function getRandomColor() {
    const randomColorIndex = Math.floor(Math.random() * (backgroundColor.length - 1));
    const randomColor = backgroundColor[randomColorIndex];

    return randomColor;
}
console.log(getRandomColor())
/***
 * `printQuote` function
***/
function printQuote() {
    const quote = getRandomQuote();
    const color = getRandomColor();
    let print = `< p class="quotes" > ${quote.quote}</p > <p class="source">${quote.source}`;

    if (quote.citation) {
        print += `<span class = 'citation'>${quote.citation}</span>`
    }
    if (randomQuote.author) {
        print += `<span class = 'author'>${quote.author}</span>`
    }
    print += `</p>`;
    document.body.style.backgroundColor = color;

    return print;

}
console.log(printQuote);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);