module.exports = merge

function merge (types) {
  const query = `${types.map(x => x.typeDefs && x.typeDefs.query)}`
  const mutation = `${types.map(x => x.typeDefs && x.typeDefs.mutation)}`
  return `
    ${types.map(x => x.typeDefs && x.typeDefs.types)}
    ${query ? `type Query {${query}}` : ''}
    ${mutation ? `type Mutation {${mutation}}` : ''}
  `
}
