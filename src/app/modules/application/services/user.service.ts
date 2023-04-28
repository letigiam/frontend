import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = `${environment.api}/auth`;
const post = `${environment.api}/posts`;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) {

    }

    getUser() {
        return this.userSubject.asObservable();
    }

    setUser(nameUser: any) {
        this.userSubject.next(nameUser);
    }

    me(): Observable<any> {
        return this.http.get<any>(`${AUTH_API}/me`);
    }

    update(data: any): Observable<any> {
        return this.http.put<any>(`${AUTH_API}/update`, data);
    }

    uploadFile(user_id: any, path: any, fileName: any): Observable<any> {
        return this.http.put<any>(`${post}/terneSubscribe`, { user_id, path, fileName });
    }

    getTerna(page: any, page_length: any): Observable<any> {
        return this.http.get<any>(`${post}/getPdf?page=${page}&page_length=${page_length}`);
    }

    getTerneManagement(user_id: any, action: any): Observable<any> {
        return this.http.put<any>(`${post}/terneManagement`, { user_id, action });
    }

    getDocument(type: any, dati?: any, ammin?: any, qualify?: any, period?: any, costruzioni?: any, datoreLavoro?: any, periodoLavoro?: any, tipoLavoro?: any, iscrizioneElMin?: any, dataConseguimento?: any, ente?: any, oggetto?: any, comunicazioni?: any, mailSegreteria?: any): Observable<any> {
        return this.http.get<any>(`${post}/print/pdf?type=${type}&convalida=${dati}&amminAppartenenza=${ammin}&qualifica=${qualify}&periodoDiSvolgimento=${period}&periodoSettoreCostruzioni=${costruzioni}&datoreLavoro=${datoreLavoro}&periodoLavoro=${periodoLavoro}&tipoLavoro=${tipoLavoro}&iscrizioneElMin=${iscrizioneElMin}&periodoSvolgimento=${dataConseguimento}&ente=${ente}&oggetto=${oggetto}&comunicazioni=${comunicazioni}&mailSegreteria=${mailSegreteria}`, {
            'headers': {
                'toast': 'hidden',
                'Content-Type': 'application/json', 'customHeader': 'blob'
            }, 'responseType': "blob" as "json"
        });
    }
}