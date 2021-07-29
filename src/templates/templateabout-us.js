import { footer } from '../componentes/footer.js';
import { nav } from '../componentes/nav.js';

export const aboutUs = () => {
  const divAboutContainer = document.createElement('div');
  const viewAbotUs = /* html */ `
  <div id="contenedorAboutUs">
  <img class="portadaMuro" src="images/logo.png" />
    <div id="textoAboutUs">Grupo de estudiantes de la generación SLC016 de Laboratoria, todas amantes del diseño y la programación. 
   Creamos esta aplicación pensando en la gran cantidad de personas que deben sentise curiosas y atraídas sobre la Astrología y los signos, creando así una instancia en la que las personas pudieran compartir sus conocimientos y conocer personas afines a sus intéreses particulares. 
     </div>
    <div class="ordenNosotras">
    <img class="nosotras" src="images/Tani.png" />
    <img class="nosotras" src="images/Nico.png" />
    <img class="nosotras" src="images/Eu.png" />
    </div>
  `;

  divAboutContainer.innerHTML = viewAbotUs;
  divAboutContainer.appendChild(footer());
  divAboutContainer.appendChild(nav());

  return divAboutContainer;
};
