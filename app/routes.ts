import {Routes, RouterModule} from '@angular/router';
import {DemoCarouseBasicComponent} from './components/carousel/carousel.component';

const appRoutes: Routes = [
    { path: 'carousel', component: DemoCarouseBasicComponent }
    //{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);