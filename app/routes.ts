import {Routes, RouterModule} from '@angular/router';
import {DemoCarouseBasicComponent} from './components/carousel/carousel.component';
import {AppComponent} from './components/app.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'carousel', component: DemoCarouseBasicComponent }
    //{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);