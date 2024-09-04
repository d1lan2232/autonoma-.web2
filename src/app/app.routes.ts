import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'carros', component: CarrosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'carros/:id', component: CarrosComponent },
    { path: '**', component: Error404Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
