import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from 'src/app/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {

  baseUrl = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {}

  getListCategory() {
    return this.http.get<category []>(this.baseUrl);
  }
}
