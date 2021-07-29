import { nav } from '../componentes/nav.js';
import { footerMuro } from '../componentes/footerMuro.js';

export const muroAstrología = () => {
  const divMuroAstroContainer = document.createElement('div');
  const viewMuroAstro = /* html */ `
    <div id="contenedorMuroAstro">
    <img id="portadaAstro" src="images/logo.png" />
      <div class="headerMuroAstro">¿Quieres hacer una consulta o compartir alguna información sobre Astrología? ¡Hazlo aquí! </div>
      <div class="inviteMuro"></div>
        <form id="formRegistro"> 
          <label for="post"></label><br><input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="createPost" class="inputPost" name="post"><br> 
          <div class="btnsMuro">
          <button type="submit" id="btnPublicar">Publicar</button> 
          </div>
        </form>
        <div class="centrarRedesOne">
    </div>`;

  divMuroAstroContainer.innerHTML = viewMuroAstro;

  divMuroAstroContainer.appendChild(nav());
  divMuroAstroContainer.appendChild(footerMuro());

  return divMuroAstroContainer;
};
