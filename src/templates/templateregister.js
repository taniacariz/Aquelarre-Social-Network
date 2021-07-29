import { footer } from '../componentes/footer.js';
import { handlerRegister } from '../lib/index.js';

export const register = () => {
  const viewRegister = /* html */ `
  <div id="contenedorRegistro">
  <img class="portada" src="images/logo.png" />
    <form id="formRegistro"> 
      <label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br> 
      <label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br> 
      <label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="password" id="password" class="inputRegistro" name="password"><br> 
      <label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="password" id="confpassword" class="inputRegistro" name="confirmpassword"><br> 
      <button type="submit" id="btnConfirmar">CONFIRMAR</button> 
      <a href="/#/login"><button type="button" id="btnCancelar">CANCELAR</button></a>
    </form>
  </div>`;

  const divRegisterContainer = document.createElement('div');
  divRegisterContainer.innerHTML = viewRegister;
  divRegisterContainer.appendChild(footer());

  const confirmarTwo = divRegisterContainer.querySelector('#btnConfirmar');
  confirmarTwo.addEventListener('click', (e) => {
    handlerRegister(e);
  });

  return divRegisterContainer;
};
