# Supreme Repo Finder

https://supreme-repo-finder.netlify.app/

A React application for searching for GitHub repositories.

## Setup and Install

 1. Clone the repo and navigate to the root directory
 2. Run `npm install` in your console

## Local Development

 1. Run `npm run start`. 
 2. The dev server will spin up and the app will be viewable at `localhost:3000`in your browser

## Local Build

 1. To create a production build, you can run `npm run build`
 2. You will need a static server tool like `serve` to serve the static build files and view in a browser. 

## Run Tests

1: Run `npm run test` to run both Jest tests and TypeScript compiler
2: For just Jest, run `npm run test:jest`
3: For just TypeScript compiler, run `npm run test:types`

Note: These tests run on staged files on every `git commit` as part of a pre-commit validation.

## Run Linting
1: Run `npm run lint` for eslint (TypeScript)

## Run Code Formatting
1: Run `npm run format` to auto-format your code with Prettier.

## Technologies Used
- **React** - bootstrapped React app using Create React App
- **React Router** - component/page routing
- **TypeScript** - type checking, type inference 
- **Styled Components** - Encapsulate styles within React components and allow JS functionality to CSS.
- **React Testing Libray & Jest** - Unit test React components
- **eslint & prettier** - JavaScript/TypeScript linting and code formatting enforcement
- **Husky & Lint-Staged** - run linting tools on staged git files in pre-commit hook
- **Netlify** - automated build and deploy to Netlify hosting from `main` branch
