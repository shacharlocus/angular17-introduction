import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth-service';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();
};

export const hasFeatureToggleGuard: (ft: string) => CanActivateFn =
  (featureToggle: string) => () => {
    const authService = inject(AuthService);
    return authService.hasFeatureToggle(featureToggle);
  };

