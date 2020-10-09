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

## How Much Time I Spent on It (and Why)

When I start a project, I like to get my rough estimates first. In an ideal environment, my reflexive thought would be "This will take two days" or "This will take about 5-6 hours in total". So, going with what I've learned about estimates, I realized it would take most of the week, and I tripled my estimate to **anywhere from 15-18 hours**.

In this case, an "ideal environment", that is to say "during a normal feature sprint at a company I work for" is one in which I would already have:

- A build environment
- A testing environment
- Some baseline CSS in place, or a style guide
- Conventions around both file organization and documentation
- A UX guy I could harass for any questions about the designs given
- No mental rust about various web-development conventions
- Reflexive familiarity with writing Markdown (bless you Github markdown cheat-sheet)

So I expected this to take much longer than it would. Even with a couple of early-stage feature sacrifices I pre-comitted to. Thus, I worked on this in patches starting the day after I got the assignment, with some patches much longer than others.

### Here's a breakdown of the time I really spent on everything:

- Planning (15 minutes)
- Setting up build pipeline (30 minutes)
- Skeletonizing components/architecture (45 minutes)
- CSS Styling (3 hours)
- Formalizing component structure, writing api calls, creating a mock backend, first pass at making everything on the frontend work (3 hours)
- Writing tests (5(!) hours)
- Writing documentation (2 hours)
- Final tweaking (1 hour)
- Writing up README (1.25 hours)
- **Total: 16.75 hours**

Gosh! That's a lot. But under the high end of my estimate. What kind of maniac spends that much time on something for a job application? Well, let's be honest here. **I was a touch out of practice, and I wanted to go from zero-to-feature on something no matter how much time I spent on it**. And I do like this company. At the same time, I do have a life, and I wasn't getting paid for this. So I made economical decisions on certain things that I deemed in the professional sphere of the submission, and I burned some time that I would normally use to talk to friends or read a book, or watch a guy speedrun Mario 64. Some things you do for money, some things you do for love.

#### Here's a breakdown on why some aspects took the amount of time they took:

1. Planning - Once you work with React for a while, you never forget how to instantly break things down into component structure. I stared at the mocks for about 5 minutes then wrote for about 10 in chickenscratch onto a blank piece of paper every single component, their required data, all their required callback functions, and the general state of the app. And wouldn't you know it, I was 100% correct down to the filesystem structure. It helped a lot that there were no routes to think about or any intermediary datatypes. The mocks were opaque with what was required.

2. Build pipeline - Webpack is very straightforward these days and babel is a breeze. Not like 2015.

3. Skeletonizing - This took actually slightly longer than I expected because I opted to use a React feature I was unfamiliar with called "hooks". But I figured it would make the code clean as hell and have vanishingly slim room for error (I was right). The tradeoff is that it made testing much, much harder.

4. CSS Styling - I'll be honest man, I had to look up a bunch of stuff on CSS-Tricks again that I forgot how to do. This took way more time because

5. Formalizing - I wanted genuine frontend-backend interaction for this, so I wrote a mock backend, an api call helper, and a few little helpers for generating test data. This added some extra time.

6. Tests - Hoo boy. Not only had I not worked with Jest and Enzyme before, but I hadn't written test suites in a while, nor had I much experience with Unit tests. A couple of those hours were based on reading and familiarizing myself with conventions, the API docs of both Jest and Enzyme.

7. Documentation - Not much to say here just that I wasn't very familiar with writing in a jsdoc convention before this.

8. Tweaking - Can't help it, I'd sit down at my workstation, notice some little thing, and futz with it for anywhere from 5 minutes to 15. And I did this sometimes multiple times a day.

9. README - And here we are.

## Questions I Had

- Is the date format in the mocks that way because Smart Construction is being developed for a Japanese company?

## Tradeoffs I Made Along the Way

For the purposes of the project I tried to use as few prefigured dependencies as possible,

- did not implement customized numerical input field or datepicker
- did not implement true error handling if the backend is down
