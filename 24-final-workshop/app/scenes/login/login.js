import { decryptData, encryptData } from "../../helpers/encrypt";
import { navigateTo } from "../../Router";

export function LoginPage(){
    document.getElementById('root').innerHTML = `<form>
    <input type="email" placeholder="autocomplete"/>
    <input type="password" placeholder = "autocomplete"/>
    <button>Login</button>
    </form>`;

    const $form = document.getElementsByTagName('form')[0];
    $form.addEventListener('submit', async e => {
        e.preventDefault();

        const userEmail = document.querySelector('[type="email"]');
        const  userPassword = document.querySelector('[type="password"]');

        if(!userEmail.value || !userPassword.value){
            alert('Llena todos los campos')
        } else {

        

        const data = {
            userEmail: userEmail.value,
            userPassword: userPassword.value
        }

        const userFetch = await fetch('http://localhost:3000/users');

        if(!userFetch.ok){
            alert('Hubo problema para iniciar sesión');
            return;
            }

            const userJson = await userFetch.json();

            const userFound = userJson.find(e => e.email === userEmail)

            if(!userFound.ok){
                alert('No existe el usuario')
                return
            }

            if(decryptData(e.password) == userPassword.value){
                alert('Bienvenido');
            }
            navigateTo('/task')
         }
       
    })
}
