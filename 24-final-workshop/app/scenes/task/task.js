export function TaskPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Tareas</h1>
    <ul>
        <li>Tarea 1</li>
        <li>Tarea 2</li>
        <li>Tarea 3</li>
    </ul>
    <button id="logout">Cerrar sesión</button>
    `;

    const $logoutButton = document.getElementById('logout')
    $logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token')
    })
}