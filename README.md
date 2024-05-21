<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive<a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>


# StockAsync

The registration and login system has been implemented to provide a secure and efficient method of user authentication. When logging in, the system generates and returns a JSON Web Token (JWT). This token is used to authenticate and authorize access to the resources of the ApiRest developed in Java. By using the JWT, it ensures that subsequent interactions with the ApiRest are secure and that only authenticated users can access the protected services.

# Project Proposal

## Conducted By

Sara Ruiz, Valeria Henao, Maria Alejandra Ramirez and Miguel Angel Espinal from the Meta clan and Juan Pablo Sanabria and Cristian Franco from Van Rossum clan.

## Category

E-commerce of products and services

## Purpose

Develop an inventory and billing management system for stores, with the capability to manage multiple stores simultaneously and provide differentiated functionalities for employees and administrators.

## Why? 

The lack of efficient systems complicates inventory and billing management in stores, causing errors, time loss, and lack of relevant information, especially when managing multiple stores.

## For whon? 

The StockSync inventory and billing management system is designed for store owners and managers who face challenges in inventory management and billing processes, particularly those operating multiple stores simultaneously.

It also benefits store employees by facilitating tasks such as generating invoices and managing customers, thereby optimizing their time and increasing accuracy in their daily operations.

# Software and tools

To implement a registration and login system, we used the following technologies and tools:

### Development environment: 

Visual Studio Code is used

### NestJS: 

The main framework for building the application, known for its modularity and scalability.

### MongoDB:

A NoSQL database offering flexibility and scalability to handle large volumes of data.
 
### Postman: 

A tool to test and validate the API endpoints.GitHub: A platform used for version control and code collaboration.

### JSON Web Tokens (JWT) and Passport: 

JWT is used for secure user authentication, while Passport facilitates the integration of JWT into the authentication system.
 
### class-validator and class-transformer:

Used for data validation and transformation, ensuring the data is correct and secure.
 
### Swagger: 
 
A tool for documenting the API, making it easier to visualize and test the endpoints.
 
This combination has allowed us to develop a secure, efficient, and maintainable system.

### Task assignment

In Trello, we manage task assignments with three columns: To-Do List, In Progress, and Completed Tasks, where the workflow is maintained.

Link --> https://trello.com/b/FK2JK8o2/stockasync

# Structure

We use the hexagonal structure as it can promote a cleaner, more flexible, and maintainable architecture, making software development and evolution easier over time

``` bash
src/
├── infrastructure/
│   ├── database/
│   │   ├── database.module.ts
│   │   ├── db-config.ts
│   │   └── index.ts
│   ├── adapters/ 
│   │   ├── hashing/
│   │   │   ├── bcrypt.service.ts
│   │   │   └── hashing.service.ts
│   │   ├── models/
│   │   │   ├── roles.model.ts
│   │   │   ├── signIn.model.ts
│   │   │   └── token.model.ts
│   │   ├── strategys/
│   │   │   ├── jwt.strategy.ts
│   │   │   └── local.strategy.ts
├── app/
│   ├── modules/
│   │   ├── users/
│   │   │   ├── controllers/
│   │   │   │   └── users.controller.ts
│   │   │   ├── dtos/
│   │   │   │   └── create-user.dto.ts
│   │   │   ├── entities/
│   │   │   │   └── users.entity.ts
│   │   │   ├── services/
│   │   │   │   └── users.service.ts
│   │   │   └── users.module.ts
│   │   └── authentication/
│   │       ├── controllers/
│   │       │   └── authentication.controller.ts
│   │       ├── dtos/
│   │       │   └── signin-auth.dto.ts
│   │       ├── services/
│   │       │   ├── auth.service.ts
│   │       │   └── authenticatiion.service.ts
│   │       └── authentication.module.ts
├── errors/
│   ├── errors.module.ts
│   └── errors.service.ts
├── guards/
│   ├── jwt-auth.guard.ts
│   └── local-auth.guard.ts
├── app.module.ts
└── main.ts
```

# Run the project

Step-by-step to start the project

### Install necessary dependencies and enter the project folder

After cloning the repository

``` bash
cd back-end-stock-async
npm install
```

### Create, configure, and save the .env file
``` bash
In the root of the project, create the .env file where we will copy and paste the following environment variables for the correct execution of the program

DB_CONNECTION=mongodb://
DB_HOST=127.0.0.1:27017
DB_NAME=yourDataBase
DB_USER=yourUser
DB_PASSWORD=yourPassword
DB_SRV=mongodb+srv:
DB_CLUSTER=cluster0.mongodb.net
DB_RETRY=retryWrites=true&w=majority

ACCESS_TOKEN=yourAccessToken
JWT_ACCESS_SECRET=yourSecret
JWT_ACCESS_EXPIRES_TIME=3m

PORT= 4000
```

### Configure Postman
```bash
We will open the local Postman and import the 'StockAsync.postman_collection.json' file, which is in the 'postman' folder, to load the request collection and test our endpoints.
```

### Start the app and acces the endpoint documentation
```bash
After following the previous steps, the next step is to run the application to begin testing our endpoints and to view the documentation in our Swagger.

npm run start

We access the route to view the Swagger documentation
---> http://localhost:4000/v1/api/docs
```