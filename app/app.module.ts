import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ng2-bootstrap';
import { AppComponent }  from './components/app.component';
import { DemoCarouseBasicComponent }  from './components/carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        CarouselModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DemoCarouseBasicComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }