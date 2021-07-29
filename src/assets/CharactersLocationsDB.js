import firebase from "firebase/app";
import "firebase/firestore";

function initializeDatabase() {
  if (!firebase.apps.length) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDo5vRqSe9ScSIg_zGjpGmSeiifdqdZ_-g",
      authDomain: "learning-firestore-8aed7.firebaseapp.com",
      projectId: "learning-firestore-8aed7",
      storageBucket: "learning-firestore-8aed7.appspot.com",
      messagingSenderId: "395722441817",
      appId: "1:395722441817:web:f8bc744bbd5cb942e39d48",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  getCharacters();
}

const liara = new Path2D();
const talia = new Path2D();
const garrus = new Path2D();

function getCharacters() {
  const database = firebase.firestore();
  database
    .collection("characters")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((document) => {
        const character = document.data();
        if (character.name.toLowerCase() === "liara") {
          liara.ellipse(
            character.x,
            character.y,
            character.radiusX,
            character.radiusY,
            character.rotation,
            character.startAngle,
            character.endAngle
          );
        } else if (character.name.toLowerCase() === "garrus") {
          garrus.ellipse(
            character.x,
            character.y,
            character.radiusX,
            character.radiusY,
            character.rotation,
            character.startAngle,
            character.endAngle
          );
        } else if (character.name.toLowerCase() === "talia") {
          talia.ellipse(
            character.x,
            character.y,
            character.radiusX,
            character.radiusY,
            character.rotation,
            character.startAngle,
            character.endAngle
          );
        }
      });
    });
}

function getCharacterLocation(name) {
  if (name.toLowerCase() === "liara") {
    return liara;
  } else if (name.toLowerCase() === "garrus") {
    return garrus;
  } else if (name.toLowerCase() === "talia") {
    return talia;
  } else {
    throw new Error();
  }
}

export { getCharacterLocation, initializeDatabase };
