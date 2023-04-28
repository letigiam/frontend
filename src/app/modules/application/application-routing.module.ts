import { ContainerComponent } from './container/container.component';
import { ApplicationComponent } from './components/application/application.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './prosumer/dashboard/dashboard.component';
import { BaseComponent } from './components/base/base.component';
import { AuthGuard } from '../auth/components/auth.guard';
import { DashboardProducterComponent } from './producter/dashboard-producter/dashboard-producter.component';

const routes: Routes = [
    {
        path: '', component: ApplicationComponent, children: [
            {
                path: 'home', component: BaseComponent, canActivate: [AuthGuard], children: [
                    { path: '', canActivate: [AuthGuard], component: ContainerComponent },

                ]
            },
            {
                path: 'prosumer/dashboard', canActivate: [AuthGuard], component: BaseComponent, children: [
                    { path: '', canActivate: [AuthGuard], component: DashboardComponent },
                ]
            },
            {
                path: 'producter/dashboard', canActivate: [AuthGuard], component: BaseComponent, children: [
                    { path: '', canActivate: [AuthGuard], component: DashboardProducterComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule { }
