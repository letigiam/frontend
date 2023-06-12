import { ContainerComponent } from './container/container.component';
import { ApplicationComponent } from './components/application/application.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './prosumer/dashboard/dashboard.component';
import { AuthGuard } from '../auth/components/auth.guard';
import { ParametersComponent } from './prosumer/parameters/parameters.component';

const routes: Routes = [
    {
        path: '', component: ApplicationComponent, children: [
            { path: 'home', component: ContainerComponent, canActivate: [AuthGuard] },
            { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
            { path: 'dashboard/cer/:cer', canActivate: [AuthGuard], component: DashboardComponent },
            { path: 'dashboard/utenti/:utente', canActivate: [AuthGuard], component: DashboardComponent },
            { path: 'parametri', canActivate: [AuthGuard], component: ParametersComponent },
            { path: 'parametri/cer/:cer', canActivate: [AuthGuard], component: ParametersComponent },
            { path: 'parametri/utenti/:utente', canActivate: [AuthGuard], component: ParametersComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule { }
