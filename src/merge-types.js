module.exports = merge

function merge (types) {
  const query = `${types
    .map(x => x.typeDefs && x.typeDefs.query)
    .filter(Boolean)}`
  const mutation = `${types
    .map(x => x.typeDefs && x.typeDefs.mutation)
    .filter(Boolean)}`
  return `
    ${types.map(x => x.typeDefs && x.typeDefs.types).filter(Boolean)}
    ${query ? `type Query {${query}}` : ''}
    ${mutation ? `type Mutation {${mutation}}` : ''}
  `
}
