# graphql-create-schema

create a graphql schema using one or more files.

Each file containing queries, mutations, types or resolvers is then merged to a single executable schema.

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)

# usage

```javascript
const createSchema = require('graphql-create-schema')
const types = [
  require('./user'),
  require('./product')
]
const schema = createSchema(types)
```

```javascript
// type.js
module.exports = {
  typeDefs: {
    query: '....',
    mutation: '....',
    types: '',
  },
  resolvers: {
    Query: {}
    Mutation: {}
  }
}
```

# license

[Apache License, Version 2.0](LICENSE)
