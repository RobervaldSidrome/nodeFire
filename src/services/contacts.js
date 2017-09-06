var contacts = (app) =>{
    var firebase = app.firebase;
    return firebase.database().ref('contacts');

}

module.exports = contacts;