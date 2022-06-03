const { exit } = require('process');
const assert = require('assert');
const mongoose = require('mongoose');

const url = process.argv[2] || process.env.DATABASE_URL;

if (!url) {
  console.error('[ERROR] Please provide a DATABASE_URL environment variable or an argument to the script. Ex: mongodb://mongodb:27017/myapp');
  exit(1);
}
mongoose.connect(url, async function(err) {
  assert.equal(null, err);
  console.log("Connected correctly to MongoDB server");

  // Crear Schemas
  const userSchema = mongoose.Schema({ name: String, lastname: String });
  const deckSchema = mongoose.Schema({ name: String, user: mongoose.ObjectId });
  const librarySchema = mongoose.Schema({ name: String, user: mongoose.ObjectId, copies: Number });

  // Crear Modelos
  const userModel = mongoose.model('users', userSchema);
  const deckModel = mongoose.model('decks', deckSchema);
  const libraryModel = mongoose.model('library', librarySchema);

  try {
    // Limpiar todo
    await userModel.deleteMany();
    await deckModel.deleteMany();
    await libraryModel.deleteMany();

    // Crear Usuarios
    await userModel.create({ name: 'Usuario 1', lastname: 'Lastname 1' });
    await userModel.insertMany([
      { name: 'Usuario 2', lastname: 'Lastname 1' },
      { name: 'Usuario 3', lastname: 'Lastname 1' },
      { name: 'Usuario 4', lastname: 'Lastname 1' },
      { name: 'Usuario 5', lastname: 'Lastname 2' },
      { name: 'Usuario 6', lastname: 'Lastname 3' },
      { name: 'Usuario 7', lastname: 'Lastname 3' },
      { name: 'Usuario 8', lastname: 'Lastname 3' },
    ]);
    // Eliminar Usuarios
    await userModel.deleteOne({ name: 'Usuario 7' });
    await userModel.deleteMany({ $or: [{ name: 'Usuario 8' }, { name: 'Usuario 6' }] });
    const userDocs = await userModel.find({});

    console.log("USERS: " + JSON.stringify(userDocs, null, 2));

    // Buscar Usuario
    const userDoc1 = await userModel.findOne({ name: 'Usuario 1' });
    const userDoc2 = await userModel.findOne({ name: 'Usuario 2' });

    // Crear Mazos
    await deckModel.insertMany([
      { name: 'Deck 1' },
      { name: 'Deck 2' },
      { name: 'Deck 3' },
      { name: 'Deck 4' },
    ]);
    await deckModel.updateMany({}, { $set: { user: userDoc1._id } });
    await deckModel.updateOne({ name: 'Deck 3' }, { $set: { user: userDoc2._id } });

    const deckDocs = await deckModel.find({});
    console.log("DECKS: " + JSON.stringify(deckDocs, null, 2));

    // Crear Librerias
    await libraryModel.insertMany([
      // User 1
      { card: 'Card 1', user: userDoc1._id ,copies: 1 },
      { card: 'Card 2', user: userDoc1._id ,copies: 1 },
      { card: 'Card 3', user: userDoc1._id ,copies: 1 },
      { card: 'Card 4', user: userDoc1._id ,copies: 1 },
      // User 2
      { card: 'Card 1', user: userDoc2._id ,copies: 1 },
    ]);
    await libraryModel.updateMany({ user: userDoc1._id }, { $inc: { copies: 1 } });
    await libraryModel.updateOne({ user: userDoc2._id }, { $inc: { copies: 3 } });

    const libraryCardUser1Docs = await libraryModel.find({ user: userDoc1._id });
    console.log("LIBRARY. USER 1: " + JSON.stringify(libraryCardUser1Docs, null, 2));
    const libraryCardUser2Docs = await libraryModel.find({ user: userDoc2._id });
    console.log("LIBRARY. USER 2: " + JSON.stringify(libraryCardUser2Docs, null, 2));

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
});
