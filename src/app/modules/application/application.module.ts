import { ApplicationComponent } from './components/application/application.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from './application-routing.module';
import { BaseComponent } from './components/base/base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ApplicationComponent,
    BaseComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ApplicationRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class ApplicationModule { }
