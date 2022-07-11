module.exports = Service => ({
  query: async function(req) {
    const { params: { id, ...params } = {}, query = {} } = req;
    const filter = Object.assign({}, params, JSON.parse(decodeURIComponent(req.query.filter || '{}'))); 

    return await Service.query({ ...query, filter });
  },

  // CRUD
  create: async function(req) {
    const { params, body } = req;
    return await Service.create({ ...body, ...params });
  },
  read: async function(req) {
    const { params: { id } } = req;
    return await Service.read(id);
  },  
  update: async function(req) {
    const { params: { id, ...params }, body } = req;
    return await Service.update(id, { ...body, ...params });
  },
  delete: async function(req) {
    const { params: { id } } = req;
    return await Service.delete(id);
  },  
});