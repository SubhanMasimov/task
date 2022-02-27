import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataListResponse } from '../models/DataListResponse';
import { DataResponse } from '../models/DataResponse';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  private apiUrl: string

  constructor(protected httpClient: HttpClient, @Inject(String) entityUrl: string) {
    this.apiUrl = environment.baseUrl + entityUrl + "/"
  }

  getAll(): Observable<DataListResponse<T>> {
    const path = this.apiUrl
    return this.httpClient.get<DataListResponse<T>>(path);
  }

  getById(id: string): Observable<DataResponse<T>> {
    const path = this.apiUrl + id
    return this.httpClient.get<DataResponse<T>>(path);
  }

  add(entity: T): Observable<DataListResponse<T>> {
    const path = this.apiUrl
    return this.httpClient.post<DataListResponse<T>>(path, entity);
  }

  update(entity: T): Observable<DataListResponse<T>> {
    const path = this.apiUrl
    return this.httpClient.put<DataListResponse<T>>(path, entity);
  }

  delete(id: string): Observable<DataListResponse<T>> {
    const path = this.apiUrl + id
    return this.httpClient.delete<DataListResponse<T>>(path);
  }
}
