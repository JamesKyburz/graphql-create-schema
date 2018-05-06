module.exports = merge

function merge (types) {
  const resolvers = {}
  for (const type of types) {
    if (type.resolvers) {
      for (const key of Object.keys(type.resolvers)) {
        resolvers[key] = resolvers[key] || {}
        for (const resolver of Object.keys(type.resolvers[key])) {
          if (resolvers[key][resolver]) {
            throw new TypeError(`${key}[${resolver} already defined`)
          }
          resolvers[key][resolver] = type.resolvers[key][resolver]
        }
      }
    }
  }
  return resolvers
}
