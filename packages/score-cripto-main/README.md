

## Description

This project aims to extract the credit score of each wallet address entered,and ensure that it qualifies for a loan.


## Installation

```bash
$ yarn install
```

# Setting up environment variables

you need create a env in the score-cripto-main project in packages

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

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Swagger

http://localhost:3000/apidocs

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
