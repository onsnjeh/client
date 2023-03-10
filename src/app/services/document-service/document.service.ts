import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { document } from 'src/app/model/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = 'http://localhost:3000/document';

  constructor(private http: HttpClient) {}

  getDocument() {
    return this.http.get<document []>(this.baseUrl);
  }
}
