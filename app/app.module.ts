import {NgModule}                       from '@angular/core';
import {BrowserModule}                  from '@angular/platform-browser';
import {APP_BASE_HREF,
        LocationStrategy,
        PathLocationStrategy}           from '@angular/common';
import {routing}                        from './routes';

import {CarouselModule,
        DropdownModule}                 from 'ng2-bootstrap';

import {AppComponent}                   from './components/app.component';
import {DemoCarouseBasicComponent}      from './components/carousel/carousel.component';
import {HomeComponent}                  from './components/home/home.component';
import {HeaderComponent}                from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoCarouseBasicComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        routing,
        CarouselModule.forRoot(),
        DropdownModule.forRoot()
    ],
    bootstrap:    [ AppComponent ],
    providers:[
        {provide: APP_BASE_HREF, useValue: '/'},
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]

})
export class AppModule { }