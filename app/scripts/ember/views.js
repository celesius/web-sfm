'use strict';

App.ImageLoaderView = Ember.View.extend({

    isActive: false,

    tagName: 'div',

    classNames: [
        'main-container__input-gallery__item',
        'main-container__input-gallery__input'
    ],

    dragOver: function(e){
        e.preventDefault();
    },

    dragEnter: function(e){
        e.preventDefault();
        this.isActive = true;
    },

    dragLeave: function(e){
        e.preventDefault();
        this.isActive = false;
    },

    drop: function(e){
        e.preventDefault();
        var files = e.dataTransfer.files;
        for (var i=0; i<files.length; i++) {
            App.Data.images.addObject(App.Image.create({ file: files[i] }));
        }
    }

});