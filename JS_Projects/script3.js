const quotes = [
{
	name: 'Stephen king',
	quote: 'Get busy living or get busy dying.'
},
{
	name: 'John F.Kennedy',
	quote: 'Those who are dare to fall miserably can achieve greatly.'
},
{
	name: 'Abraham Lincoin',
	quote: 'I am a success today bcoz i had a friend who beleivedin me & did not have the heart to let him down'
},
{
	name: 'Leonardo De Vinci',
	quote: 'It had long since come to my attention that people of accomplishment rarely......'
},
{
	name: 'Leo Tolstay',
	quote: 'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote()
{
 let number = Math.floor(Math.random()*quotes.length);
 quoteAuthor.innerHTML = quotes[number].name;
 quote.innerHTML = quotes[number].quote;
}