import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'owner',
        pathMatch: 'full'
    },
    {
        path: 'owner',
        loadComponent: () => import('./features/owner-page/owner-page.component').then(m => m.OwnerPageComponent)
    },
    {
        path: 'broker',
        loadComponent: () => import('./features/brokers/brokers').then(m => m.Brokers)
    }
];
