module.exports = function (app) {
    var controller = app.controllers.contacts;

    app.get('/', controller.index);
    app.get('/new', controller.new);
    app.post('/new', controller.newPost);
    app.get('/view/:id', controller.view);
    app.get('/edit/:id', controller.edit);
    app.post('/edit/:id', controller.editPost);
    app.get('/remove/:id', controller.remove);
}