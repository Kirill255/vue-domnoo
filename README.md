# vue-domnoo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase

Problem:

`https://vue-domnoo-c3b76.firebaseio.com/users.json?orderBy="email"&&equalTo="francis@gmail.com"`

Result:

```js
{
error: "Index not defined, add ".indexOn": "email", for path "/users", to the rules"
}
```

Solution:

https://firebase.google.com/docs/database/security/indexing-data

```js
{
  "rules": {
    ".read": true,
    ".write": true,
    "users": {
    	".indexOn": ["email"]
    }
  }
}
```

Result:

```json
{
  "-LJVJNFaRnLVMW5mf83f": {
    "email": "francis@gmail.com"
  }
}
```
