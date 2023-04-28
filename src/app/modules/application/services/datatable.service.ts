import { Injectable } from '@angular/core';
import { DataTableComponent } from 'src/app/components/dataTable/dataTable.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.api}/auth`;
const post = `${environment.api}/posts`;
// const test = `${environment.api}/posts`;

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllPosts() {
    return this.http.get<any>(`${post}/index`);
  }

  /**
   * 
   * @param user_id 
   * @param post_id 
   * @returns sottoscrive l'utente ad un determinato corso
   */
  subscription(user_id: any, post_id: any): Observable<any> {
    return this.http.post<any>(`${post}/subscribe`, { user_id, post_id });
  }

  /**
   * 
   * @param id 
   * @returns restituisce tutti gli utenti iscritti ad uno specifico corso, con paginazione
   */
  subUsers(id: any, page: any, page_length: any, search_key: any) {
    return this.http.get<any>(`${post}/indexSubs?post_id=${id}&page=${page}&page_length=${page_length}&search_key=${search_key}`);
  }

  /**
   * 
   * @param user_id 
   * @param post_id 
   * @param status 
   * @returns modifica lo stato degli iscritti ad un corso, ammessi o non ammessi
   */
  subsManagement(user_id: any, post_id: any, status: any): Observable<any> {
    return this.http.put<any>(`${post}/subsManagement`, { user_id, post_id, status });
  }

}
