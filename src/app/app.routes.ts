import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'srp',
    loadComponent: () =>
      import('./s-single-responsability/s-single-responsability').then(
        (m) => m.SSingleResponsability
      ),
  },
  {
    path: 'ocp',
    loadComponent: () =>
      import('./o-open-closed/o-open-closed').then((m) => m.OOpenClosed),
  },
  {
    path: 'lsp',
    loadComponent: () =>
      import('./l-liskov-substitution/l-liskov-substitution').then(
        (m) => m.LLiskovSubstitution
      ),
  },
  {
    path: 'isp',
    loadComponent: () =>
      import('./i-interface-segregation/i-interface-segregation').then(
        (m) => m.IInterfaceSegregation
      ),
  },
  {
    path: 'dip',
    loadComponent: () =>
      import('./d-dependency-inversion/d-dependency-inversion').then(
        (m) => m.DDependencyInversion
      ),
  },
  {
    path: '',
    redirectTo: 'ssr',
    pathMatch: 'full',
  },
];
