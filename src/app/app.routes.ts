import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./components/home/home.component").then(route => route.HomeComponent)
    },
    {
        path: 'countrie-detail/:id-countrie',
        loadComponent: () => import('./components/test/test.component').then(route => route.TestComponent)
    }
];
