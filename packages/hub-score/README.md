

## Description

This project aims to creates stadistic of each wallet address entered,for loans.


## Installation

```bash
$ yarn install
```

# Setting up environment variables

you need create a env in the hub-score project in packages

```bash
cp .env.example .env
```

#  Starting a local database

in the root of the project you need to execute the next script to create the database with docker

```bash
yarn nest:docker:db:up
```

# Stopping a local database

```bash
yarn nest:docker:db:down
```



## Running the app

for start you need to use the next scripts in the root of the project

```bash
# development
$ yarn nest:start

# watch mode
$ yarn nest:start:dev

```

## Test

for execute the test you need to use the next scripts

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn nest:test:e2e

# test coverage
$ yarn test:cov
```

## Swagger

for see the documentation of the routes you can visit the next link

http://localhost:3000/apidocs