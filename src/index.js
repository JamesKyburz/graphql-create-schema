const mergeResolvers = require('./merge-resolvers')
const mergeTypes = require('./merge-types')

module.exports = createSchema

function createSchema (makeExecutableSchema, types) {
  types = Array.isArray(types) ? types : [types]
  return makeExecutableSchema({
    typeDefs: mergeTypes(types),
    resolvers: mergeResolvers(types)
  })
}
