var setupControllers = require('./controllers.js'),
    setupRoutes = require('./routes.js'),
    setupViews = require('./views.js');

jQuery.event.props.push( "dataTransfer" );

window.Promise = Promise || Ember.RSVP.Promise;

var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

setupRoutes(App);
setupControllers(App);
setupViews(App);