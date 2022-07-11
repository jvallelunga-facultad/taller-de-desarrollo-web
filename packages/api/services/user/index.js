var User = require('#models/User');
var ServiceWrapper = require('#services/wrapper');

var ServiceDeck = require('#services/deck/index');
var ServiceDeckCard = require('#services/deck_card/index');
var ServiceUserCard = require('#services/user_card/index');

const Service = ServiceWrapper(User);

module.exports = {
  query: Service.query,
  create: Service.create,
  read: Service.read,
  update: Service.update,
  delete: async (id) => {
    const user = await User.findByIdAndDelete(id);
    const decks = await ServiceDeck.query({ filter: { owner: id }, limit: 100 });

    const deck_ids = decks.map(({ _id }) => _id);

    await ServiceUserCard.deleteMany({ owner: id });
    await ServiceDeck.deleteMany({ owner: id });
    await ServiceDeckCard.deleteMany({ deck: deck_ids });

    return user;
  },
}
