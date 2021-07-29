import { footer } from '../componentes/footer.js';
import { recoverPass } from '../lib/index.js';

export const recover = () => {
  const viewRestablecimiento = /* html */ `
  <div id="contenedorRestablecimiento">
  <img class="portada" src="images/logo.png" />
    <form id="formRestablecimiento"> 
      <label for="emailRecuperacion">Ingresa tu correo aquí</label><br><input placeholder="Ingresa un correo valido" type="text" id="emailRecover" class="inputRegistro" name="emailRecover"><br> 
            <button type="submit" id="btnConfirmarRecover">CONFIRMAR</button> 
      <a href="/#/login"><button type="button" id="btnCancelar">CANCELAR</button></a>
    </form>
  </div>`;

  const divRestablecimientoContainer = document.createElement('div');
  divRestablecimientoContainer.innerHTML = viewRestablecimiento;
  divRestablecimientoContainer.appendChild(footer());

  const restoreTwo = divRestablecimientoContainer.querySelector(
    '#btnConfirmarRecover'
  );
  restoreTwo.addEventListener('click', (e) => {
    console.log('correo enviado OK');
    recoverPass(e);
  });

  return divRestablecimientoContainer;
};
