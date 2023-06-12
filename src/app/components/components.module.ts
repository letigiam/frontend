
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from '../modules/auth/components/login/login.component';
import { RegistratiComponent } from './../modules/auth/components/registrati/registrati.component';
import { RecuperoPswComponent } from './../modules/auth/components/recupero-psw/recupero-psw.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageErrorComponent } from '../modules/auth/components/message-error/message-error.component';
import { MatExpansionModule, MatExpansionPanelDescription } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeadersComponent } from './headers/headers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardComponent } from '../modules/application/prosumer/dashboard/dashboard.component';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardProducterComponent } from '../modules/application/producter/dashboard-producter/dashboard-producter.component';
import { ParametersComponent } from '../modules/application/prosumer/parameters/parameters.component';
import { NgChartsModule } from 'ng2-charts';
import { ContainerComponent } from '../modules/application/container/container.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
    declarations: [
        LoginComponent,
        RecuperoPswComponent,
        RegistratiComponent,
        LoaderComponent,
        MessageErrorComponent,
        HeadersComponent,
        DashboardComponent,
        DashboardProducterComponent,
        ParametersComponent,
        ContainerComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        NgChartsModule,
        // MatButtonModule,
        FormsModule,
        // MatSidenavModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCardModule,
        MatTabsModule,
        RouterModule,
        CurrencyMaskModule

    ],
    exports: [
        LoginComponent,
        RecuperoPswComponent,
        RegistratiComponent,
        DashboardComponent,
        LoaderComponent,
        NgChartsModule,
        MessageErrorComponent,
        HeadersComponent,
        MatPaginatorModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        DashboardProducterComponent,
        ParametersComponent,
        FiltersComponent,
        CurrencyMaskModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
