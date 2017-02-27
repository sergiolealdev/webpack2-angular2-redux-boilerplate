import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [require('./app.component.css')],
    template: require('./app.component.html')
})
export class AppComponent { name = 'Angular'; }

