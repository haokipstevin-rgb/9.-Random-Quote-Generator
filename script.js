let quotes = [
  "Believe in yourself.",
  "Every day is a new start.",
  "Dream big, work hard.",
  "Stay positive, stay strong.",
  "Never give up."
];

let quote = document.getElementById("quote");
let btn = document.getElementById("newQuoteBtn");

btn.onclick = function() {
  let i = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[i];
};
