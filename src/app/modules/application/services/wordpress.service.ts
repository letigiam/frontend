import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const wp = `${environment.api}/posts`;

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private category: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
  ) { }


  getCategories() {
    return this.category.asObservable();
  }

  setCategories(allCategories: any) {
    this.category.next(allCategories);
  }

  /**
   * 
   * @param url 
   * @returns passo l'url per prendermi le singole categorie
   */
  getAllCategory(url: any) {
    return this.http.get<any>(`${wp}/categories/index?url=${url}`);
  }

  /**
   * 
   * @param data 
   * @returns prendo tutti i post comprensivi dei dati che mi servono per la datatable con paginazione ecc..
   */
  getAllPost(data: any) {
    return this.http.get<any>(`${wp}/index?category_id=${data.category}&order_by=${data.orderBy}&order_dir=${data.orderDir}&offset=${data.offset}&page=${data.page}&status=${data.status}&per_page=${data.page_length}&filter=${data.filter}&username=${data.username}&user_id=${data.userId}`);
  }


  /**
   * 
   * @returns tutti i post senza paginazione
   */

  getAllPosts() {
    return this.http.get<any>(`${wp}/index`);
  }

  /**
   * 
   * @param body 
   * @returns creo il singolo post
   */
  createPost(body: any): Observable<any> {
    return this.http.post<any>(`${wp}/create`, body);
  }

  /**
   * 
   * @returns mi ritorna i singoli tags provenienti da wordpress
   */
  getTags(): Observable<any> {
    return this.http.get<any>(`${wp}/getTags`);
  }

  /**
   * 
   * @param id 
   * @param wp_id 
   * @returns mostra il singolo post tramite l'id e il wp_id
   */
  getSinglePost(id: any, wp_id: any): Observable<any> {
    return this.http.get<any>(`${wp}/show/${id}/${wp_id}`);
  }

  /**
   * 
   * @param body 
   * @returns mi serve per modificare il singolo post
   */
  updatePost(body: any): Observable<any> {
    return this.http.post<any>(`${wp}/update`, body);
  }

  /**
   * 
   * @param body 
   * @returns modifico il singolo post su wordpress
   */
  updateWP(body: any): Observable<any> {
    return this.http.post<any>(`${wp}/insertUpdateWP`, body);
  }


  /**
   * 
   * @param wp_id 
   * @returns passo il parametro wp_id per eliminare il singolo post
   */
  delete(wp_id: any): Observable<any> {
    return this.http.delete<any>(`${wp}/delete/${wp_id}`);
  }

  /**
   * 
   * @param user_id 
    * @param post_id 
   * @returns passo i parametri user_id e post_id per annullare l'iscrizione al corso
   */
  unsubscribe(user_id: any, post_id: any): Observable<any> {
    return this.http.delete<any>(`${wp}/unsubscribe?user_id=${user_id}&post_id=${post_id}`);
  }
}
