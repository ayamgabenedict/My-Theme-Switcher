# REACT Theme Switcher (DarkMode)

## What is this project about?

This ThemeSwitcher project implements the classic darkmode using the `useContext`, `useEffect` and `useState` hooks.
This project is built with [React](https://react.dev) JS library, the [Vite](https://vitejs.dev) bundler, and the <b>darkMode</b> feature from [Tailwindcss](https://tailwindcss.com/docs/dark-mode).

# Getting Started

#### Installing Dependencies

1.  **Installing Node and NPM**
    This project builds on top of Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2.  **Installing project dependencies**
    To get started with Vite, follow these steps:

    Install Vite: You can install Vite using npm (Node Package Manager). Open your terminal and run the following command:

    ```bash
    npm install vite@latest
    ```

    The project further uses NPM to manage software dependencies. NPM Relies on the package.json
    Open your terminal and run:

    ```bash
    npm install
    ```

    > _tip_: `npm i` is shorthand for `npm install``

    To get started with Tailwind css, follow these steps:

    Install Tailwindcss: Navigate to the Docs page of the [Tailwindcss](https://tailwindcss.com) home page.

    Select your framework of choice from the [Installation](https://tailwindcss.com/docs/installation) heading on the above page, and follow the instructions over there.

### Running Your Frontend in Dev Mode

The frontend app was built using the React Library with Vite (as the bundler). In order to run the app in development mode use `npm run dev`.

Open [http://localhost:5173](http://localhost:) to view it in the browser. The page will reload if you make edits.

```bash
npm run dev
```

## Contributions

1. Refactored the code for optimization such as:
   1. Implemented the `useContext` hook to avoid passing states as <strong>props</strong> through each nested component; a situation referred to as <strong>props drilling</strong>
   1. Implemented the `useEffect` hook to manipulate the <strong>DOM</strong> as and when the `themeMode` changes.
   1. Implemented the `useState` hook to manage states in our functional component.
   1. Improved CSS for better user experience 😊😊😊

## Acknowledgements

- [Hitesh Choudhary](https://hiteshchoudhary.com/) The project was developed as part of a React Video tutorial on [Youtube](https://www.youtube.com/watch?v=4DqAvWonPAg).
