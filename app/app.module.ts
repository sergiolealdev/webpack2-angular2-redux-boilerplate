import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ng2-bootstrap';
import { AppComponent }  from './components/app.component';
import { DemoCarouseBasicComponent }  from './components/carousel/carousel.component';
import {routing} from './routes';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CarouselModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        DemoCarouseBasicComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }