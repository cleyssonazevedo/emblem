import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './pages/login/login.module';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        // redirectTo: 'login'
        redirectTo: 'home'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    },

    {
        path: 'character',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'register'
            },
            {
                path: 'register',
                loadChildren: './pages/character-register/character-register.module#CharacterRegisterModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        LoginModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {  }
