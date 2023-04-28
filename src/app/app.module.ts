
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './services/intercept.service';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { ApplicationModule } from './modules/application/application.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    ApplicationModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'it-IT',
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
