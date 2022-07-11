var Model = require('#models/Deck');

const QUERY_DEAFULTS = {
  filter: {},
  sort: { name: 'asc' },
  skip: 0,
  limit: 10
};
module.exports = (Model, {
  queryDefaults = QUERY_DEAFULTS,
  queryPopulate = [],
  readPopulate = [],
} = {}) => ({
  query: async ({ filter, sort, skip, limit } = {}) => {
    const query = Model
      .find(filter || queryDefaults.filter)
      .sort(sort || queryDefaults.sort)
      .skip(skip || queryDefaults.skip)
      .limit(limit || queryDefaults.limit);

    return await queryPopulate.reduce(
      (temp, populate) => temp.populate(populate),
      query);
  },

  // CRUD
  create: async (data) => await Model.create(data),
  read: async (id, populate = []) => {
    const query = Model.findById(id);
    return await readPopulate.reduce(
      (temp, p) => temp.populate(p),
      query);
  },
  update: async (id, data) => await Model.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Model.findByIdAndDelete(id),

  // EXTRA
  deleteMany: async (filter) => await Model.deleteMany(filter),
});
