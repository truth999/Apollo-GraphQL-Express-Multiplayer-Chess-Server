# Online Multiplayer Chess Game Server - Node.js, Express, Apollo GraphQL

Online multiplayer chess game server built with Node.js, Express and Apollo GraphQL. Feel free to checkout the [client side source code](https://github.com/ratkosolar/React-Apollo-Mutiplayer-Chess-Game) too.

## Installation

#### 1. Install node_modules

```sh
npm install
```

#### 2. Setup MongoDB and .env file

In order to run server, you have to setup a mongodb and provide a login url through .env
Create .env file in root directory:

```sh
touch .env
```

Add the following environemnt variables to .env:

```
DATABASE_URL=[MongoDB url]
SECRET=[JWT token secret]
```

#### 3. Run the server

```sh
npm run dev
```
