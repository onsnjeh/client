import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from 'src/app/model/type.model';

@Injectable({
  providedIn: 'root'
})
export class ListTypeService {

  baseUrl = 'http://localhost:3000/type-juridique';

  constructor(private http: HttpClient) {}

  getListType() {
    return this.http.get<type []>(this.baseUrl);
  }
}
