const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote');

async function getQuote() {
  const response = await fetch('https://type.fit/api/quotes');
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomIndex];
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = randomQuote.author ? `- ${randomQuote.author}` : '- Desconhecido';
}

newQuoteButton.addEventListener('click', getQuote);

// Obter a primeira citação quando a página é carregada
getQuote();
