# mock server

- [fakerjs](https://fakerjs.dev/)
- [json-server](https://github.com/typicode/json-server)

## Case1: TSC

```sh
# not working
npx tsc index.ts && node index.js

# use this
npx tsc index.ts
node index.js
```

## Case2: Rollup

```sh
npm run rollup && node index.cjs
```

## Run

```sh
npx json-server db.json
```

## Model example

- ./model/\*.ts
