module.exports = function (app) {
    //seto o caminho do arquivo contacts 
    var service = require('../services/contacts.js')(app);//injeto o app que tras o retorno de contacts

    return {
        index: (req, res) => {
            service.on('value', (snapshot) => {
                res.render('index', { contacts: snapshot.val() || [] });
            });
            res.render('index');
        },
        new: (req, res) => {
            res.render('new');
        },
        newPost: (req, res) => {
            var newContacts = service.push();
            newContacts.set({
                name: req.body.name,
                email: req.body.email
            });
            res.redirect('/');
        },
        view: (req, res) => {
            var child = service.child(req.params.id);
            child.on('value', (snapshot) => {
                res.render('view', { id: req.params.id, contact: snapshot.val() || [] });
            });

        },
        edit: (req, res) => {
            var child = service.child(req.params.id);
            child.on('value', (snapshot) => {
                res.render('edit', { id: req.params.id, contact: snapshot.val() || [] });
            });

        },
        editPost: (req, res) => {
            var child = service.child(req.params.id);
            child.update({
                name: req.body.name,
                email: req.body.email
            });
            res.redirect('/');
        },
        remove: (req, res) => {
            var child = service.child(req.params.id);
            child.set(null);
            res.redirect('/');
        },
    }
}