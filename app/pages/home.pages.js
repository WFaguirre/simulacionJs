export function HomePage() {
    const root = document.getElementById('root');
    const $myDiv =  document.createElement('DIV');
    $myDiv.textContent = "Hola mundo desde homepage"
    root.appendChild($myDiv)
}