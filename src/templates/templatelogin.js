import { footer } from '../componentes/footer.js';
import { handlerLogin, authGoogle } from '../lib/index.js';

export const login = () => {
  const divLoginContainer = document.createElement('div');
  const viewLogin = /* html */ `
  <div id="contenedorLogin">
  <img class="portada" src="images/logo.png" />
    <form id="formLogin">
      <label for="email">Correo:</label><br><input placeholder="Ingresa tu correo" type="text" id="emailHome"
        class="inputLogin" name="email"><br>
      <label for="password">Contraseña:</label><br><input placeholder="Ingresa tu contraseña" type="password"
        id="passwordHome" class="inputLogin" name="password"><br>
        <button class="btnLogin" id="btnLogin">Login</button>
    </form>
    <div id="elementosGoogle">
      <div class="textos">¿No tienes cuenta? Registrate <a href="/#/register"><span id="aqui">aquí</span></a></div>
      <div class="textos"> O ingresa con tu cuerta de Google</div>
      <a class="fab fa-google fa-3x" id="google"></a>
      <div class="textos">¿Olvidaste tu contraseña?, recuperala <a href="/#/recover"><span id="aquiTwo">aquí</span></a></div>
  </div>
</div>`;

  divLoginContainer.innerHTML = viewLogin;
  divLoginContainer.appendChild(footer());

  const loginTwo = divLoginContainer.querySelector('#btnLogin');
  loginTwo.addEventListener('click', (e) => {
    handlerLogin(e);
  });

  const loginGoogle = divLoginContainer.querySelector('#google');
  loginGoogle.addEventListener('click', (e) => {
    console.log("login OK google");
    authGoogle(e);
  });

  return divLoginContainer;
};
