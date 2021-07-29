import { muro } from "../templates/templatemuro.js";
import { login } from "../templates/templatelogin.js";
import { register } from "../templates/templateregister.js";
import { aboutUs } from "../templates/templateabout-us.js";
import { recover } from "../templates/templaterecover.js";
import { muroAstrología } from "../templates/templatemuroastrologia.js";
import { perfil } from "../templates/templateperfil.js";

const showTemplate = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML = "";

  switch (hash) {
    case "#/":
      containerRoot.appendChild(login());
      break;
    case "#/login":
      containerRoot.appendChild(login());
      break;
    case "#/register":
      containerRoot.appendChild(register());
      break;
    case "#/recover":
      containerRoot.appendChild(recover());
      break;
    case "#/muro":
      containerRoot.appendChild(muro());
      break;
    case "#/astrologia":
      containerRoot.appendChild(muroAstrología());
      break;
    case "#/perfil":
      containerRoot.appendChild(perfil());
      break;
    case "#/nosotras":
      containerRoot.appendChild(aboutUs());
      break;
    default:
      containerRoot.innerHTML = "ERROR";
      break;
  }
};

export const showRoute = (hash) => {
  if (hash === "#/login") {
    return showTemplate(hash);
  }
  if (hash === "#/register") {
    return showTemplate(hash);
  }
  if (hash === "#/recover") {
    return showTemplate(hash);
  }
  if (hash === "#/muro") {
    return showTemplate(hash);
  }
  if (hash === "#/perfil") {
    return showTemplate(hash);
  }
  if (hash === "#/astrologia") {
    return showTemplate(hash);
  }
  if (hash === "#/nosotras") {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener(
  "hashchange",
  () => {
    showRoute(window.location.hash);
  },
  false
);
