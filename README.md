# Part 1 - Introduction  

### Thing's to test
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

### Tools used in the assignment
If needed please reference these tools' respective sites for information on how to use them.

Tool  | Description
----- | -----------
express | Express is popular HTTP framework for NodeJS which will be used for creating the API
request | Request is a library for making HTTP requests. This will be used for making the HTTP requests in the tests
mocha | Mocha is a test runner that will be used to run the tests
chai | Chai is an assertion library which will be used to make assertions during the tests
sinon | Sinon is a library used to create mocks, spies, and stubs. It will used in the mocking tests
mockery | Mockery is used to control the require cache. It allows a different module to be substituted for a require. Mockery will be used for providing our mock of the database to the server

# Part 2 - Setup

Step | Action
---- | ------
Install NodeJS | https://nodejs.org/en/
Fork api-testing-javascript repository | https://github.com/gsypolt/api-testing-javascript
Change directory | cd api-testing-javascript
Install the project dependencies | npm install 
Run each individual tests | Feel free to run them now to see example test output. The tests included in the assignment are empty and all tests should pass when executing command below.


```
$ npm run test-external-process
$ npm run test-database
$ npm run test-mocks
```

# Part 3 - Familiarizing Yourself with the System Under Test

It's always necessary to get to know the code you are testing. Let us examine the API that we are testing. The purpose of the API is to be an interface with a vegetable database. The vegetable database is only a single array of data and supports the following operations:

- Adding a vegetable
- Deleting a vegetable
- Getting all vegetables

The API supports adding and deleting individual vegetables. You can also get all vegetables in the database. Here are the API routes:

* GET /vegetable
    * Description
        * Get all the vegetables in the database
    * Query Parameters
        * upperCase
            * If set to "true" the vegetables will be return uppercase
            * Default is false

* POST /vegetable
    * Description
        * Add a vegetable to the database

* DELETE /vegetable/:name
    * Description
        * Delete a vegetable from the database
    * Url Parameters
        * name
            * The name of the vegetable to delete

# Part 4 - Writing Tests


* Testing against an API running as an external process
* Testing an API by manipulating data in a database
* Testing an API using mocks and stubs

### api-testing-javascript/test/external-process.js
This method involves having an API running as an external process perhaps locally or on a server. The HTTP methods will used to interact with the code base. The tests that need to complete inside `external-process.js` test file. Create the test which tests that a correct response is received from the server after a POST with a new vegetable, GET, and DELETE a vegatable. 

*Acceptance Criteria*
* Construct the url that will be used in the test. Also, you MUST add "done" as a parameter to the test.
* Make a request using the request library.
* Add some options to tell the request library how we want the request made.
* Add a callback to the request which will called when it completes.
* Add the assertions for status code and response text.

### test-automation-labs/api-testing-javascript/test/database.js
This test will interact with the database while using the API. The API will run in the test file and will stopped after the test is finished. WARNING `Express` does not have a stop method so we are relying on the test runner to destroy everything and end the process. The tests need to completed inside `database.js` test file. Create the test which tests that a vegetable gets put in the database after a POST with a new vegetable, GET, and DELETE a vegatable.

*Acceptance Criteria*
* Construct the url that will be used in the test. Also, you MUST add "done" as a parameter to the test.
* Make a request using the request library.
* Add some options to tell the request library how we want the request made. We will be sending plain text in the post request and the body is the vegetable to add to the database.
* Add a callback to the request which will called when it completes.
* Add the assertion to check the database has the correct vegetable.

### test-automation-labs/api-testing-javascript/test/mocks.js
This test will mock database interactions. The API will run in the test file and will stopped after the test is finished. WARNING `Express` does not have a stop method so we are just relying on the test runner to destroy everything and end process. 

