// CONTROLADORES LOGIN

// Registro con correo

const handlerRegister = (e) => {
  e.preventDefault();

  const signupEmail = document.getElementById('email').value;
  const signupPassword = document.getElementById('password').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(
      () => {
        alert('Registro Exitoso');
      },
      (error) => {
        console.error(error);
        alert(`Error: ${error.message}`);
      }
    );
};

// Login HOME

const handlerLogin = (e) => {
  e.preventDefault();

  const emailHome = document.getElementById('emailHome').value;
  const passwordHome = document.getElementById('passwordHome').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailHome, passwordHome)
    .then(
      () => {
        // Signed in
        console.log('login OK');
        window.location.href = '/#/muro';
      },
      (error) => {
        console.error(error);
        alert(`Error: ${error.message}`);
      }
    );
};

// Login Google

function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(providerGoogle)
    .then(() => {
      window.location.href = '/#/muro';
    })
    .catch(() => {
      alert('Intente nuevamente');
    });
}

// Logout

const handlerLogout = (e) => {
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = '/#/login';
    })
    .catch(() => {
      alert('Intente nuevamente');
    });
};

// Restablecimiento

const recoverPass = (e) => {
  e.preventDefault();

  const emailAddress = document.getElementById('emailRecover').value;

  firebase
    .auth()
    .sendPasswordResetEmail(emailAddress)
    .then(() => {
      alert('Correo enviado');
    })
    .catch(() => {
      alert('Intente nuevamente');
    });
};

// Observador

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log('no existe');
    window.location.href = '/#/login';
  }
});

export {
  authGoogle,
  handlerLogin,
  handlerRegister,
  handlerLogout,
  recoverPass,
};
