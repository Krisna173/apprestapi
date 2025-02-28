'use strict';

export default function(app) {
    var jsonku = require('./controller');
    
    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadatasensor);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
}