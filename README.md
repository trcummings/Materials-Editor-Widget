# Example Material Editor Widget

### What is This?

Hello, I am Thomsen Cummings, and this is a basic showcase of my current familiarity of web development paradigms. The codebase is entirely from an application phase of a project pipeline I completed in October 2020 and repurposed to show recent web dev work to potential employers. This README contains instructions on how to run the repo, as well as a technical breakdown of the process.

The purpose of this widget is to organize materials for delivery to a construction site. It contains a list of materials, and a material editor form, and a line which displays the total cost of all the materials.

**Here is the technical stack:**

- React.js for frontend code (with FontAwesome 5.14 for icons, and Google Fonts' Open Sans)
- Babel and Webpack 4.0 for the build pipeline
- Express.js for the pseudo-API backend
- Jest, Enzyme, and Faker.js for testing
- JSDoc for documentation

## How to Run

### In Production

1. run `npm install`
2. run `node mockBackend.js` — This will start up the mock backend server.
3. In a new tab, run `npm run prod` — This will build the project in production mode with Webpack.
4. Open `index.html` in the dist/ folder, and et voilà!

### In Development

1. run `npm install` — You can skip this step if you've already installed the node modules.
2. run `node mockBackend.js`
3. run `npm run dev` — This will start up a Webpack dev server and host the build on `localhost:8080`.

### Run the Test Suite

**NB: This test suite will only run on Node Version 10 or later**, which I believe is an issue with Jest. For the purposes of development I have been using Node Version 12.14.1.

1. run `npm run test` — This will run the Jest test suite, set up the Enzyme adapter, and run through all of the tests.
2. Look at all that green!

## How Much Time I Spent on It (and Why)

My reflexive estimate was that in an ideal environment and with perfect execution it would take me 5-6 hours. In this case, an "ideal environment", that is to say "during a normal feature sprint at a company I work for" is one in which I would already have:

- A build environment
- A testing environment
- Some baseline CSS in place, or a style guide
- Conventions around both file organization and documentation
- A UX guy I could ask any questions about the designs given
- No mental rust about certain web-development conventions
- Reflexive familiarity with writing Markdown

I figured I could set a reasonable facsimile of that up in 2 hours, bringing the reflexive estimate to 6-8 hours. However, going with what I've learned about estimates, I tripled my worst-case estimate to **anywhere from 18-24 hours**.

### Here's a breakdown of the time I actually spent on everything:

- Planning (15 minutes)
- Setting up build pipeline (30 minutes)
- Skeletonizing components/architecture (45 minutes)
- CSS Styling (3 hours)
- Formalizing component structure, creating a mock backend/writing API calls, and first pass at making everything on the frontend work (3 hours)
- Writing tests (6(!) hours)
- Writing documentation (1.5 hours)
- Final tweaking (1 hour)
- Writing up README (1.25 hours)
- **Total: 17.25 hours**

Gosh! That's a lot. But just under the low end of my estimate.

During this project, I made economical decisions about what was worth implementing (to be discussed later). However, I also spent all sorts of time things I thought were worth doing, even if they weren't strictly necessary for this project. That's time that I would normally use to talk to friends or read a book, or watch a guy speedrun Mario 64, because some things you do for money, but some things you do for love.

#### Here's a breakdown on why some aspects took the amount of time they took:

1. Planning - Once you work with React for a while, you never forget how to quickly break things down into component structure. I stared at the mocks for about 5 minutes then wrote for about 10 in chicken-scratch onto a blank piece of paper every single component, their required data, all their required callback functions, and the general state of the app. It helped a lot that there were no routes to think about, or any intermediary datatypes. The mocks were opaque with what was required.

2. Build - Babel is a breeze. Webpack is very straightforward these days. Not like it was in 2015.

3. Skeletonizing - This took slightly longer than I expected because I opted to use a React feature I was only passingly familiar with called "hooks". But I figured it would make the code clean and have vanishingly slim room for error (I was right). The tradeoff is that it made testing much, much harder.

4. Styling - I'll be honest, I had to brush off some dust, but it came back quick. However, without being given ratios in the mocks I had to do a lot of guesswork, and couldn't quite reach "pixel perfection".

5. Formalizing - I wanted genuine frontend-backend interaction for this, so I wrote a mock backend, an APO call helper, and a few little helpers for generating test data. This added some extra time.

6. Tests - Hoo boy. Not only had I not worked with Jest and Enzyme before, but I hadn't written test suites in a while, nor had I much experience with Unit tests. A couple of those hours were spent reading and familiarizing myself with conventions, the API docs of both Jest and Enzyme. Then, I hit this insane snag for daring to use a modern React convention (Hooks) with a testing helper written by someone other than Facebook (Enzyme). Every project has a bug or implementation snag that makes you want to eat your keyboard. Not to mention I had some lurking bugs in my mocked implementation of the fetch API. This all should have taken 2.5 hours tops.

7. Documentation - I wasn't very familiar with writing in a JSDoc convention before this so I had to do a bunch of reading. `npm run docs` does not generate a nice and comprehensive website either. If I could start over, or if I had more time, I would modify it to fit React "Styleguidist" convention.

8. Tweaking - Can't help it, I'd sit down at my workstation, notice some little thing, and futz with it for anywhere from 5 minutes to 15. And I did this sometimes multiple times a day.

9. README - And here we are.

## Questions I Had

You'll notice that the most common theme with these is "I was building functionality from three images and didn't have a UX guy to bug about my questions". The unspoken state management problems of web applications are contained in those little details. I didn't bother asking these in an email because I figured just noting them now is fine.

- What are the spacing ratios in "em"s? (My monitor isn't 2560 x 1440)
- Also, what font is that? What are the font weights? (I eventually figured out that it was Open Sans)
- How should the sizes of each section (the list of materials and the material editing form) change on width of the browser? Should there be CSS breakpoints? Should the form fields become a single, even line? Do we want a grid/container system?
- What kind of behavior should the list of materials have when you hover over the material you want to select and edit? I just added a brightness filter on hover and on active.
- What kind of step size for cost and volume should we have on the number input field?
- How should the materials in the list get sorted? By name? By delivery date?
- What's going on with the spacing in the "Total Cost" section? Is it constrained to the list of materials?
- What level of precision should we be working with for the cost? Two decimal places max?
- Can you select delivery dates that are in the past?

It's a lot of little questions like this. I may still have a few lingering ones around changes I would need to make to easily port this into an existing repo, but as far as I could tell that's out of the scope of this exercise.

## Tradeoffs I Made Along the Way

For the purposes of the project I tried to use as few prefigured dependencies as possible, but the two biggest tradeoffs I made were these:

- I did not implement a customized numerical input field to make the UI fully consistent with the mocks, nor did I write extensive input validation.

Given more time I would be more than happy to, but within the constraints of the assignment, I decided against it. Right out of the gates I had decided that if I couldn't style webkit's date-picker and number field, I was not going to bother with it. Luckily, replacing the icon for the date-picker was relatively easy. Unfortunately, all I could easily do with the number input was to always show the arrows, and add a small justification between the numbers and the arrows to provide some padding. In my experience with React, this could take more than one full day of work to create a robust and customizable one at parity with the HTML standard.

With respect to input validation and form handling in general, when I started out with programming, they told me "Never roll your own crypto" (unless you're a cryptographer). To that I would like to add "Don't bother to write your own form handlers" (unless it's your job). If you're using React, just use something like Formik.

- I did not implement true error handling if the backend is down.

In a real-life situation, this is not a "Nice to Have". One of the worst things you can do to a user is to allow your application to be unresponsive in the face of user action. Were this a truly productionized product, and for whatever reason the backend were down, the end user would quickly start throwing things at their computer in frustration. I could have thrown up a modal with relative ease. But again, without a UX guy to bug, I ultimately decided against dealing with this.
