# Part 1 - Overview 

### Things To Test with APIs
- Routes (Endpoints)
- HTTP Methods
- URL Parameters
- Query Parameters
- Response Codes
- External Data Stores

### Overview

In this assignment you will be using an existing application and writing some tests for it. During this assignment you will write tests following three different patterns including:

- Testing against an API running as an external process
- Testing an API by manipulating data in a database
- Testing an API using mocks and stubs

Please use your brain and/or seek out help for which methods to use which may include methods not mentioned here.

### Tools You Will be using
If needed please reference these tools' respective sites for information on how to use them.

express
`Express is popular HTTP framework for NodeJS which will be used for creating the API`

request
`Request is a library for making HTTP requests. This will be used for making the HTTP requests in the tests`

mocha
`Mocha is a test runner that will be used to run the tests`

chai

`Chai is an assertion library which will be used to make assertions during the tests`

sinon
`Sinon is a library used to create mocks, spies, and stubs. It will used in the mocking tests`

mockery
`Mockery is used to control the require cache. It allows a different module to be substituted for a require. Mockery will be used for providing our mock of the database to the server`

# Part 2 - Setup

Setup
Please install node from the [NodeJS website](https://nodejs.org/en/).

Clone the api-testing-javascript(https://github.com/gsypolt/api-testing-javascript) repository and open a terminal to the directory.

Change directory to api-testing-javascript:

`
$ cd api-testing-javascript
` 

Now install the dependencies by running the following command:

`
$ npm install
`

To run each individual test the following npm scripts are included. Feel free to run them now to see example test output. The tests included in the assignment are empty and all tests should pass when executing command below.

`
$ npm run test-external-process
$ npm run test-database
$ npm run test-mocks
`

# Part 3 - Familiarizing Yourself with the System Under Test

It's always necessary to get to know the code you are testing. Let us examine the API that we are testing. The purpose of the API is to be an interface with a vegetable database. The vegetable database is only a single array of data and supports the following operations:

- Adding a vegetable
- Deleting a vegetable
- Getting all vegetables

The API supports adding and deleting individual vegetables. You can also get all vegetables in the database. Here are the API routes:

- GET /vegetable
.* Description
..* Get all the vegetables in the database
.* Query Parameters
..* upperCase
...* If set to "true" the vegetables will be return uppercase
...* Default is false

- POST /vegetable
.* Description
..* Add a vegetable to the database

- DELETE /vegetable/:name
.* Description
..* Delete a vegetable from the database
.* Url Parameters
..* name
...* The name of the vegetable to delete

