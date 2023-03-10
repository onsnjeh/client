import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { theme } from 'src/app/model/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ListThemeService {

  baseUrl = 'http://localhost:3000/theme-juridique';

  constructor(private http: HttpClient) {}

  getListTheme() {
    return this.http.get<theme []>(this.baseUrl);
  }
}
