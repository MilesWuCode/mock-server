# mock server

- json generation: [fakerjs](https://fakerjs.dev/)
- json-server

```sh
# use packages
npm install typescript @types/node @faker-js/faker json-server

# export index.js
npx tsc index.ts

# export temp.json
node indes.js

# run server
npx json-server db.json
```
