var Card = require('#models/Card');
var ServiceWrapper = require('#services/wrapper');

const Service = ServiceWrapper(Card);
module.exports = {
  query: Service.query,
  read: Service.read,

  // CUSTOM
  isEmpty: async () => {
    const count = await Card.count();
    return count === 0;
  },
  insertMany: async (cards) => await Card.insertMany(cards),
};
