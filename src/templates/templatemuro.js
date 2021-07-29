import { nav } from '../componentes/nav.js';
import { footerMuro } from '../componentes/footerMuro.js';
import { handlerPost, traerDatos } from '../componentes/firebase.js';

export const muro = () => {
  const divMuroContainer = document.createElement('div');
  const viewMuro = /* html */ `
    <div id="contenedorMuro">
      <img class="portadaMuro" src="images/logo.png" />
      <div class="headerMuro">¡Bienvenidos a Aquelarre!</div>
        <div id="formMuro"> 
          <input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="post-placeholder" class="inputPost"><br>
          <div class="btnsMuro">
          <button type="submit" id="btnPublicar">Publicar</button>
          </div>
        </div>
        <div id="contenedorPost" class="scroll">
        <div id="post-container"></div>
        </div>
        <div class="centrarRedesOne">
    </div>`;

  divMuroContainer.innerHTML = viewMuro;

  divMuroContainer.appendChild(nav());
  divMuroContainer.appendChild(footerMuro());

  // BOTÓN PUBLICAR
  const btnPublicar = divMuroContainer.querySelector('#btnPublicar');
  btnPublicar.addEventListener('click', () => {
    const post = divMuroContainer.querySelector('#post-placeholder').value;
    console.log('Publicado Correctamente >:)');
    handlerPost(post)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        document.getElementById('post-placeholder').value = '';
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });

  traerDatos();

  return divMuroContainer;
};
