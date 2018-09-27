// window.alert("hello")
var db = firebase.firestore();

function storeData(){
    console.log("nombre del sensor")
    console.log(document.querySelector("#SensorName").value);
    console.log("valor del sensor")
    console.log(document.querySelector("#SensorValue").value);

    // Add a new document in collection "cities"
    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
