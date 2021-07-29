export const footerMuro = () => {
  const footerMuroView = /* html */ ` 
    <div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.`;
  const divFooterMuro = document.createElement('div');
  divFooterMuro.classList.add('divFooterMuro');
  divFooterMuro.innerHTML = footerMuroView;

  return divFooterMuro;
};
