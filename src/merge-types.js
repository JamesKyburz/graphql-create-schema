module.exports = merge

function merge (types) {
  return `
    ${types.map(x => x.typeDefs && x.typeDefs.types)}
    type Query {
      ${types.map(x => x.typeDefs && x.typeDefs.query)}
    }
    type Mutation {
      ${types.map(x => x.typeDefs && x.typeDefs.mutation)}
    }
  `
}
