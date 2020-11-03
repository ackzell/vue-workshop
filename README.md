# vue-workshop

Hello!

And welcome to this workshop repo. In here you will find some excercises that will hopefully help you get a good grasp on some of the basic building blocks that make Vue such an awesome framework.

The idea with this repo is that you have a Vue app with different sections which need to be fixed in order for the tests to pass.

## How to use this repo:

0. **Make sure you are on a relatively new version of Node.js (I am using 12.x)**
1. Install all the dependencies for this repo.
   ```
   npm install
   ```
1. Run the unit tests (this will run in watch mode)
   ```
   npm run test:unit
   ```
   2a. Please note: you might come accross this https://github.com/facebook/create-react-app/issues/4540
1. At the same time, you want to run your development server so you can see your app and interact with it (open a new terminal session):
   ```
   npm run serve
   ```
1. Now that your services are running, find `/tests/unit/helloWorld.spec.js` and make the test declaration to look like this (we are removing the `x` at the beginning, effectively marking this test to _not_ be skipped):
   ```diff
   -  xit("should bind the `name` properly", async () => {
   +  it("should bind the `name` properly", async () => {
   ```
1. Go into the `/src/components/HelloWorld.vue` file and implement the proper code according to the instructions found in the comments of the file.
1. Visit http://localhost:8080/ and there you will find your app running.

Once you fix the Vue code (in the components folder) your tests will pass and the application on the browser window will behave as intended!
