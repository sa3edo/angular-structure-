import { Routes } from '@angular/router';



export const routes: Routes = [

    { path: "signUp", loadComponent: () => import('./core/auth/sign-up/sign-up.component').then(m => m.SignUpComponent) },
    { path: "signIn", loadComponent: () => import('./core/auth/sign-in/sign-in.component').then(m => m.SignInComponent) },
    { path: "home", loadComponent: () => import('./features/home/pages/home/home.component').then(m => m.HomeComponent) },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "signUp", pathMatch: "full" },

];
