
## Run the project

### Install node.js

App has been tested with node v17.8.0 and v16.0.0

### Install dependencies

```bash
npm install
```

### Run the project and the tests

In one terminal:
```bash
npm run dev
```

In another terminal:
```bash
npm run cypress:open
```

## App & goals

### The app

The app can:
- create a todo
- set todo to "done" or "not done"
- filter todos by "show all", "show done", "show not done"
- save to FileSystem via an API call (file name: todos.json)
    - expected format of todos is validated server-side
- fetch todos.json on page load

### What is expected?

You should run the app and understand what it does. Once this is done, we'd like you to:
* Determine how you would test such application in real life
* Implement the functional tests that you think makes more sense in `cypress/integration/sample_spec.js`

### What do we look at?

We will evaluate your submission based on:
* The tests you chose to implement
* The quality of the test code you wrote
* Your ability to use Cypress

### How to submit your solution?

Send us just the `cypress/integration/sample_spec.js` file.

## FAQ

### How long should this take?

We expect the test to take around 1 hour to complete.

### Should I write unit / component tests?

No these are not part of the challenge, we focus only on functional / e2e tests here.

### I found a bug, what should I do?

If you find a bug in the app, no need to fix it. If it makes your test fail, send it that way (we are not checking for the test to pass) and add a comment that explains what is broken.