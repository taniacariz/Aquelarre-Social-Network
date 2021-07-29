import { footer } from '../componentes/footer.js';
import { nav } from '../componentes/nav.js';

export const perfil = () => {
  const divPerfilContainer = document.createElement('div');
  const viewPerfil = /* html */ `
  <div id="contenedorAboutUs">
  <img class="portadaMuro" src="images/logo.png" />
  `;

  divPerfilContainer.innerHTML = viewPerfil;
  divPerfilContainer.appendChild(footer());
  divPerfilContainer.appendChild(nav());

  return divPerfilContainer;
};
