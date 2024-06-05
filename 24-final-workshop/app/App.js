import { Router } from "./Router";

export function App() {
    const $root = document.getElementById('root');

    if(!$root) {
        throw new Error('Esa hpta no esta ahi')
    }
    Router();
}