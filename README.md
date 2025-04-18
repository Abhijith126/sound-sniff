# SoundSniff Music Explorer

**SoundSniff Music Explorer** is a modern music exploration web app built with React, Redux, and Vite. It provides an interface to explore music data with features such as multi-language support, API calls, and testing setups.

#### Demo: https://abhijith126.github.io/sound-sniff/

## Features

- **Music Exploration**: Explore albums, artists, and tracks.
- **Responsive Design**: Built with Material UI for a consistent and responsive UI.
- **Themes**: Ability to select Light or Dark theme.
- **Multi-language Support**: Integrated with `i18next` for internationalization.
- **State Management**: Powered by Redux and Redux Thunk.
- **Testing**: Includes Vitest for unit tests and Cypress for end-to-end testing.
- **ESLint & Prettier**: For code quality and consistency.
- **Infinite Loading**: It auto loads the next set of releases at end of screen.

## Technologies

- **React 19**: Library for building the user interface.
- **Vite**: Fast and modern build tool for development and production.
- **Redux**: State management with Redux Toolkit and Thunk for async actions.
- **Material UI**: Component library for UI.
- **i18next**: For multi-language support.
- **Axios**: For making HTTP requests.
- **Vitest**: Testing framework for unit testing.
- **Cypress**: For end-to-end testing.

## Installation

To get started with the project, follow these steps:

1. Clone the Project

```bash
git clone https://github.com/Abhijith126/sound-sniff.git
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npm run dev
```

## Environment Variable configuration

Create a file named .env and add the following 2 variables:

```bash
VITE_SPOTIFY_CLIENT_ID=
VITE_SPOTIFY_CLIENT_SECRET=
```

## Testing

Unit and integration testing is done using Vitest and React Testing Library. This can be done using `npm run test`. End-to-end testing is done using Cypress, which can be executed using `npm run cy:open`.

## Available Scripts

In the project directory, you can run the following scripts:

| Script               | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`        | Starts the development server at [https://localhost:5173](http://localhost:5173). |
| `npm run build`      | Builds the project for production.                                                |
| `npm run lint`       | Runs ESLint to check for code quality issues.                                     |
| `npm run preview`    | Previews the production build locally.                                            |
| `npm run test`       | Runs tests once.                                                                  |
| `npm run test:watch` | Runs tests in watch mode.                                                         |
| `npm run format`     | Formats the code using Prettier.                                                  |
| `npm run cy:open`    | Opens Cypress for running end-to-end tests.                                       |
