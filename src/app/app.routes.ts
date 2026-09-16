import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'leads',
    pathMatch: 'full',
  },

  {
    path: 'leads',
    loadComponent: () => import('./features/lead/leads').then((m) => m.Leads),
  },

  {
    path: 'owner',
    loadComponent: () =>
      import('./features/owner-page/owner-page.component').then((m) => m.OwnerPageComponent),
  },
  {
    path: 'broker',
    loadComponent: () => import('./features/brokers/brokers').then((m) => m.Brokers),
  },
  {
    path: 'main',
    loadComponent: () => import('./features/main/main').then((m) => m.Main),
  },
  {
    path: 'metaLog',
    loadComponent: () =>
      import('./features/meta-conversions-log/meta-conversions-log').then((m) => m.MetaConversionsLog),
  }
];
