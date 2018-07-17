import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './pages/home/home.module#HomeModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {  }
