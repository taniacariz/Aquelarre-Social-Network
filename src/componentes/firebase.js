const db = firebase.firestore();

// CREAR PUBLICACIÓN - handlerPost se ejecuta en Muro

export const handlerPost = (post) => {
  db.collection('murogeneral').add({
    post,
  });
};

// FUNCIÓN DELETE - Se ejecuta dentro de Traer Datos

const deletePost = (borrar) => {
  const deleteFirestore = (id) => db.collection('murogeneral').doc(id).delete();
  deleteFirestore(borrar);
};

// Controlador que actualiza, elimina y edita datos dentro del Template de muro

export const traerDatos = () => {
  db.collection('murogeneral').onSnapshot((querySnapshot) => {
    // console.log(querySnapshot.docChanges().length);
    const addPost = document.querySelector('#post-container');
    addPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      addPost.innerHTML += /* html */ `
        <div class="inputPost" id="postText">${doc.data().post}</div>
        <button type="button" class="btnCrud" id="btnEdit" data-id='${data.id}'>Editar</button>
        <button type="button" class="btnCrud" id="btnDelete" data-id='${data.id}'>Eliminar</button>
        <div id="textChange"></div>
        <div id="newText" class="newText"></div>      
    `;

      const btnDelete = document.querySelectorAll('#btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log('Borrado Correctamente');
          deletePost(e.target.dataset.id);
        });
      });
    });
  });
};
