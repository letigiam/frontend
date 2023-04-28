
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfermaEmailComponent } from './components/conferma-email/conferma-email.component';
import { ConfermaRegistrazioneComponent } from './components/conferma-registrazione/conferma-registrazione.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperoPswComponent } from './components/recupero-psw/recupero-psw.component';
import { RegistratiComponent } from './components/registrati/registrati.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registrer',
        component: RegistratiComponent,
    },
    {
        path: 'recovery-password', component: RecuperoPswComponent,
    },
    {
        path: 'confirmation-email', component: ConfermaEmailComponent,
    },
    {
        path: 'confirmation-register', component: ConfermaRegistrazioneComponent,
    },
    {
        path: 'message-error', component: MessageErrorComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
