import { showRoute } from './componentes/router.js';

const init = () => {
  showRoute(window.location.hash);
};

init();
