# Apollo/GraphQL - Chess Multiplayer Game Server

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
npm start
```
