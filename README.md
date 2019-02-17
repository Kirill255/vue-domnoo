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

### Deploy to Firebase

https://firebase.google.com/docs/hosting/deploying

1. `npm run build` Это создаст папку dist

2. `npm install -g firebase-tools`

3. `firebase login`

4. `firebase init`

**Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.**

- Hosting: Configure and deploy Firebase Hosting sites

**Select a default Firebase project for this directory:**

- выбираем наш проект ([если проекта нет в списке](https://stackoverflow.com/a/53949717), нужно отменить процесс и перезапустить заново с ключом -P и указанием id проекта `firebase -P vue-domnoo-c3b76 init`)

**What do you want to use as your public directory?(public)**
По-умолчанию это папка public, а у нас папка dist, пишем название нашей папки

- dist

**Configure as a single-page app (rewrite all urls to /index.html)?**

- N

**File dist/index.html already exists. Overwrite?**

- N

5. `firebase deploy`

### Firebase database rules for deploy

https://firebase.google.com/docs/database/security/

```json
{
  "rules": {
    // ".read": true,
    // ".write": true,
    "products": {
      ".read": true,
      ".write": false
    },
    "users": {
      ".read": true,
      ".write": true,
      ".indexOn": ["email"]
    }
  }
}
```

Для users мы разрешаем всё - читать и записывать, у нас запрос идёт сначала на чтение, чтобы проверить есть ли такой пользователь в базе, и потом запрос на запись, сохраняет нового пользователя.

Для products мы чтение разрешаем, запрос на список продуктов, а вот запись (тоесть изменение/редактрирование) списка продуктов мы запрещаем, чтобы никто из вне не мог послать запрос в базу и удалить или добавить какие-то продукты.

Можно вынести общие правила отдельно:

```json
{
  "rules": {
    ".read": true,
    "products": {
      ".write": false
    },
    "users": {
      ".write": true,
      ".indexOn": ["email"]
    }
  }
}
```
