# graphql-create-schema

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/graphql-create-schema.svg)](https://greenkeeper.io/)

create a graphql schema using one or more files.

each file containing queries, mutations, types or resolvers are then merged to a single executable schema.

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

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)

# license

[Apache License, Version 2.0](LICENSE)
