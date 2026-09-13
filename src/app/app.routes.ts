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
    },
    {
        path: 'main',
        loadComponent: () => import('./features/main/main').then(m => m.Main)
    },
    {
        path: 'lead',
        loadComponent: () => import('./features/lead/component/lead-details/lead-details').then(m => m.LeadDetails)
    }
];
