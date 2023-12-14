<h1>EXCHANGE-RATE-MICROSERVICE</h1>
<h3>Jerson Huayta</h3>

## Description

Microservice that allows you to exchange different currency exchanges according to the DB population. Sales prices can be added and updated between different currencies
<br/>
The microservice has a dependency on another miscoservice that is located in the same repository, which is called <b>user-microservice</b> and is used for token validation

## Technologies

<ul>
  <li>NestJs</li>
  <li>Sqlite</li>
  <li>Docker</li>
  <li>JWT</li>
</ul>


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


