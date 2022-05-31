var Card = require('#models/Card');

module.exports = {
  isEmpty: async () => {
    const count = await Card.count();
    return count === 0;
  },
  find: async () => await Card.find().limit(20),
  insertMany: async (cards) => await Card.insertMany(cards)
};
