# Barker 2.0

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Bark at the world. Howl at the moon.

## Description

Barker is a full stack web application for a social media platform. It allows users to create accounts and socialize with fellow members.

### Validation & Security

- [Express Validator](https://express-validator.github.io/docs/) used to validate form data, including user sign up.

- [BcryptJS](https://www.npmjs.com/package/bcrypt) is used to encrypt passwords.

### Authentication

- [JWT - JSON Webtokens](https://jwt.io/) were utilized for user authentication and authorization.

When a member is logged in, each subsequent request from their account will include the JSON Webtoken, thus, granting them access to the routes and resources that are permitted with that token.

### Express Middleware

- [Express Async Handler](https://github.com/Abazhenov/express-async-handler) is used for handling exceptions inside of async express routes and passing them along to express error handlers.
