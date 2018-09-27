echo > readme.md
npm init 
npm install express ejs --save
cmd
set PORT=3000
node app.js


===========================firestore nosql database
frontend heavy app using angular or ionic
firebase for serverless app
backend firebase

https://console.firebase.google.com/?pli=1
project: CetysIoT
npm install firebase-admin --save
using firestore
https://cloud.google.com/datastore/docs/firestore-or-datastore

https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=0
Genera una clave privada nueva y guarda el archivo JSON. 
cetysiot-89da6b7c8cd7
https://firebase.google.com/docs/firestore/data-model

En Cloud Firestore, la unidad de almacenamiento es el documento. Un documento es un registro liviano que contiene campos con valores asignados. Cada documento se identifica con un nombre.

Un documento que representa a un usuario alovelace puede tener el siguiente aspecto:

class alovelace

first : "Ada"
last : "Lovelace"
born : 1815

Los documentos viven en colecciones, que simplemente son contenedores de documentos. Por ejemplo, podrías tener una colección llamada users con los distintos usuarios de tu app, en la que haya un documento que represente a cada uno:

No es necesario "crear" ni "borrar" las colecciones. Cuando se crea el primer documento de una colección, esta pasa a existir. Si borras todos los documentos de una colección, esta deja de existir.

https://console.firebase.google.com/project/cetysiot/database
https://firebase.google.com/docs/firestore/quickstart?authuser=0

firestore model
there are collections
there are documents
there are subcollections with their documents
etc
single queries or listening to a document or collection for changes
firestore clients are unlimited
and bills based on data transfer, reads, writes and deletes

=============git
add .gitignore
git config --global user.name "Oscar Rosete"
git config --global user.email oscaralonso11@hotmail.com
git clone /home/alice/project myrepo
git init
git add .
git commit -m "First commit"
git remote add origin https://github.com/oarb-projects/CetysIot.git
git push -u origin master