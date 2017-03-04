import {Routes, RouterModule} from '@angular/router';
import {DemoCarouseBasicComponent} from './components/carousel/carousel.component';
import {AppComponent} from './components/app.component';

const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'carousel', component: DemoCarouseBasicComponent }
    //{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);