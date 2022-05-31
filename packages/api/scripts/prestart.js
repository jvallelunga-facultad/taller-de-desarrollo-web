require('#config/mongoose');
const fetch = require('node-fetch');

const CardService = require('#services/card/index');

console.log('Loading cards database...');

CardService.isEmpty()
.then(isEmpty => new Promise(async (resolve, reject) => {
  if (isEmpty) {
    try {
      console.log('Fetching cards library...');
      const dataResponse = await fetch('https://api.scryfall.com/bulk-data/default_cards');
      const data = await dataResponse.json();
      const cardsResponse = await fetch(data.download_uri);
      const cards = await cardsResponse.json();
  
      await CardService.insertMany(cards);
      resolve('Database initialized.');
    } catch(err) {
      reject(err);
    }
  }
  resolve('Database is up to date.');
}))
.then(message => {
  console.log(message);
  process.exit(0);
})
.catch((e) => {
  console.log('Error initializing database.', e.message);
  process.exit(1);
});

