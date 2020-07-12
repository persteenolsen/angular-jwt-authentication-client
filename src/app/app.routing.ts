import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [

    {  path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    {  path: '', component: AboutComponent },
    {  path: 'login', component: LoginComponent },

    // otherwise redirect to about
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);