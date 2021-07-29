// Footer texto páginas Iniciales

export const footer = () => {
  const footerView = /* html */ ` 
    <div class='centrarRedes'> 
      <a class='fab fa-twitter-square fa-2x' href='https://www.youtube.com/watch?v=BtLSaxRnIhc'></a> 
      <a class='fab fa-facebook-square fa-2x' href='https://www.youtube.com/watch?v=BtLSaxRnIhc'></a> 
      <a class='fab fa-instagram-square fa-2x' href='https://www.youtube.com/watch?v=BtLSaxRnIhc'></a></div> 
    <div id='nombres'>&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.
    </div> `;
  const divFooter = document.createElement('div');
  divFooter.classList.add('divFooter');
  divFooter.innerHTML = footerView;

  return divFooter;
};
