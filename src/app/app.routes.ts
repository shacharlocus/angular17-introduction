import { Routes } from '@angular/router';
import {
  HasEnhancedFeatureToggle,
  HasShimonHalisFeatureToggle,
  IsAuthenticatedGuardService,
} from '../examples/guards/old-guard.service';
import {
  hasFeatureToggleGuard,
  isAuthenticatedGuard,
} from '../examples/guards/new-guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'control-flow-old',
    pathMatch: 'full',
  },
  {
    path: 'control-flow-old',
    loadComponent: async () => import('../examples/control-flow/old-syntax.component'),
    canActivate: [IsAuthenticatedGuardService],
    providers: [IsAuthenticatedGuardService],
  },
  {
    path: 'control-flow-new',
    loadComponent: async () => import('../examples/control-flow/control-flow.component'),
    canActivate: [HasEnhancedFeatureToggle],
    providers: [HasEnhancedFeatureToggle],
  },
  {
    path: 'deferrable-views-old',
    loadComponent: async () =>
      import('../examples/deferrable-views/old-way-of-loading.component'),
    canActivate: [HasShimonHalisFeatureToggle],
    providers: [HasShimonHalisFeatureToggle],
  },
  {
    path: 'deferrable-views-new',
    loadComponent: async () =>
      import('../examples/deferrable-views/deferrable-views.component'),
    canActivate: [hasFeatureToggleGuard('shimon-halis')],
  },
  {
    path: 'unsubscribing-old',
    loadComponent: async () =>
      import('../examples/unsubscribing/old-way-to-unsubscribe-on-destroy.component'),
    canActivate: [hasFeatureToggleGuard('enhanced')],
  },
  {
    path: 'unsubscribing-new',
    loadComponent: async () =>
      import('../examples/unsubscribing/new-way-to-unsubscribe-on-destroy.component'),
    canActivate: [hasFeatureToggleGuard('enhanced')],
  },
];
