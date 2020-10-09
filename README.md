# Cesium Project Phase

#### Hello, welcome to Thomsen Cummings' official submission to Cesium's project phase of the application pipeline.

**Here is the technical stack:**

- React.js for frontend code (with FontAwesome 5.14 for icons, and Google Fonts' Open Sans)
- Babel and Webpack 4.0 for the build pipeline
- Express.js for the pseudo-API backend
- Jest, Enzyme, and Faker.js for testing
- JSDoc for documentation

## How to Run

### In Production

1. run `npm install`
2. run `node mockBackend.js` -- This will start up the mock backend server.
3. In a new tab, run `npm run prod` -- This will build the project in production mode with Webpack.
4. Open `index.html` in the dist/ folder, and et voilà!

### In Development

1. run `npm install` -- You can skip this step if you've already installed the node modules.
2. run `node mockBackend.js`
3. run `npm run dev` -- This will start up a Webpack dev server and host the build on `localhost:8080`.

### Run the Test Suite

**NB: This test suite will only run on Node Version 10 or later**, I believe it's an issue with Jest. For the purposes of development I have been using Node Version 12.14.1.

1. run `npm run test` -- This will run the Jest test suite, set up the Enzyme adapter, and run through all of the tests.
2. Look at all that green!

## The Planning Phase and How Much Time I Spent on It (and Why)

For the purposes of the project I tried to use as few prefigured dependencies as possible,

## Questions I Had

- Is the date format in the mocks that way because Smart Construction is being developed for a Japanese company?

## Tradeoffs I Made Along the Way

- did not implement customized numerical input field or datepicker
- did not implement true error handling if the backend is down
