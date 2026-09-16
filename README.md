# Jokebox

A tiny React demo: spin a 3-digit combination lock to the right code and it reveals a random joke fetched from [icanhazdadjoke.com](https://icanhazdadjoke.com/). The whole app lives in one file (`src/App.tsx`), but packs in a handful of core React concepts:

- Functional components with typed props (TypeScript interfaces)
- `useState` for local state, including functional updates (`setState(prev => ...)`)
- `useEffect` for a one-time data fetch on mount
- Immutable array updates (rebuilding state without mutating it)
- Conditional rendering (`&&` guards)
- List rendering with `.map()` and `key` props
- Component composition and callback props (`onChange`) for parent-child communication

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
