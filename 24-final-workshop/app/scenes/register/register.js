import { encryptData } from "../../helpers/encrypt";
import { navigateTo } from "../../Router";

export function Register(){
    document.getElementById('root').innerHTML = `<form>
    <input type="text" placeholder="Bananito"/>
    <input type="email" placeholder="autocomplete"/>
    <input type="password" placeholder = "autocomplete"/>
    <button>Crear usuario</button>
    </form>`;

    const $form = document.getElementsByTagName('form')[0];
    $form.addEventListener('submit', e => {
        e.preventDefault();

        const userName = document.querySelector('[type="text"]');
        const userEmail = document.querySelector('[type="email"]');
        const  userPassword = document.querySelector('[type="password"]');

        if(!userName.value || !userEmail.value || !userPassword.value){
            alert('Llena todos los campos')
        } else {

        

        const data = {
            userName: userName.value,
            userEmail: userEmail.value,
            userPassword: userPassword.value,
        }

        const createUser = fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'content-type': 'aplication json'},
            body: JSON.stringify(data)
        })

        navigateTo('/login')

        }
    })
}