import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth-service";


@Injectable()
export class IsAuthenticatedGuardService implements CanActivate {
    constructor(private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.auth.isAuthenticated();
    }
}

@Injectable()
export class HasEnhancedFeatureToggle implements CanActivate {
    constructor(private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.auth.hasFeatureToggle("enhanced");
    }
}

@Injectable()
export class HasShimonHalisFeatureToggle implements CanActivate {
    constructor(private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.auth.hasFeatureToggle("shimon-halis");
    }
}