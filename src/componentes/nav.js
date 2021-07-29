import { handlerLogout } from '../lib/index.js';

export const nav = () => {
  const viewNav = /* html */ `
    <div class="dropdown" style="float:right;"> 
    <button class="dropbtn"><img src="images/menu.png" class="iconMenu" alt="icono menú"></button>
    <nav class="dropdown-content"> 
      <ul class="linklist"> 
        <li class="enlace"><a href="#/muro">Inicio</a></li> 
        <li class="enlace"><a href="#/perfil">Perfil</a></li> 
        <li class="enlace" id= 'astrologia'><a href="#/astrologia">Astrología</a></li> 
        <li class="enlace" id= "nosotras"><a href="#/nosotras">Nosotras</a></li> 
        <li class="enlace" id="logoutNav"><a>Logout</a></li>
      </ul> 
    </nav> 
    </div>`;

  const divNav = document.createElement('div');
  divNav.innerHTML = viewNav;

  const logoutTwo = divNav.querySelector('#logoutNav');
  logoutTwo.addEventListener('click', (e) => {
    console.log('deslogueando');
    handlerLogout(e);
  });

  return divNav;
};
