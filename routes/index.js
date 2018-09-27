const express = require('express');
const app = express();
// inicializando firebase en servidor propio
const admin = require('firebase-admin');
var serviceAccount = require('../cetysiot-89da6b7c8cd7.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();
// Agrega datos
// Cloud Firestore almacena datos en documentos, 
// que se almacenan en colecciones. Cloud Firestore 
// crea colecciones y documentos de forma implícita 
// la primera vez que agregas datos al documento. 
// No es necesario que crees colecciones o documentos 
// de forma explícita.
// Crea una colección nueva y un documento con el 
// siguiente código de ejemplo.
var docRef = db.collection('gps').doc('dato1');
var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

var aTuringRef = db.collection('users').doc('aturing');
var setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

//understanding realtime
// var observer = doc.onSnapshot(docSnapshot => {
//     console.log(`Received doc snapshot: ${docSnapshot}`);
//     // ...
//   }, err => {
//     console.log(`Encountered error: ${err}`);
//   });
  
var router = express.Router()
router.get('/', function (req, res) {
    db.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
    res.render("landing", {
        my_title : "Inicio"
    });
});






module.exports = router
