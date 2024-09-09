import { Injectable } from "@angular/core";


const FEATURE_TOGGLES = [
    "enhanced",
    "shimon-halis"
]

@Injectable({providedIn: "root"})
export class AuthService {
    isAuthenticated():boolean {
        return true;
    }

    hasFeatureToggle(featureToggle: string):boolean {
        return FEATURE_TOGGLES.includes(featureToggle);
    }
}