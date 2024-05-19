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


## Running App

Command necessary for running the application

```bash
  npm run start
```


# Project Proposal

## Conducted By
```bash
Sara Ruiz, Valeria Henao, Maria Alejandra Ramirez and Miguel Angel Espinal from the Meta clan and Juan Pablo Sanabria and Cristian Franco from Van Rossum clan.
```
## Category
```bash
E-commerce of products and services
```
## Purpose
```bash
Develop an inventory and billing management system for stores, with the capability to manage multiple stores simultaneously and provide differentiated functionalities for employees and administrators.
```
## Why? 
```bash
The lack of efficient systems complicates inventory and billing management in stores, causing errors, time loss, and lack of relevant information, especially when managing multiple stores.
```
## For whon? 
```bash
The StockSync inventory and billing management system is designed for store owners and managers who face challenges in inventory management and billing processes, particularly those operating multiple stores simultaneously.

It also benefits store employees by facilitating tasks such as generating invoices and managing customers, thereby optimizing their time and increasing accuracy in their daily operations.
```
# Diagrams

administrators

# Run the project

Step-by-step to start the project

### Install necessary dependencies and enter the project folder
``` bash
npm install
cd back-end-stock-async
```

### Create, configure, and save the .env file
``` bash
In the root of the project, create the .env file where we will copy and paste the following environment variables for the correct execution of the program

DB_CONNECTION=mongodb://
DB_HOST=127.0.0.1:27017
DB_NAME=stockAsync
DB_USER=juansana
DB_PASSWORD=juan123
DB_SRV=mongodb+srv:
DB_CLUSTER=cluster0.mongodb.net
DB_RETRY=retryWrites=true&w=majority

ACCESS_TOKEN=juanpablo123
JWT_ACCESS_SECRET=juanpablo123
JWT_ACCESS_EXPIRES_TIME=3m

PORT= 4000
```

### Configure Postman
```bash
We will open the local Postman and import the 'postman_collection.json' file to load the request collection and test our endpoints.
```

### Access the endpoint documentation
```bash
We access the route to view the Swagger documentation
---> http://localhost:4000/v1/api/docs
```

### Start the app and acces the endpoint documentation
```bash
After following the previous steps, the next step is to run the application to begin testing our endpoints and to view the documentation in our Swagger.

npm run start

We access the route to view the Swagger documentation
---> http://localhost:4000/v1/api/docs
```