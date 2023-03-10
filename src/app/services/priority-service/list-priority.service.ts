import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { priority } from 'src/app/model/priority.model';

@Injectable({
  providedIn: 'root'
})
export class ListPriorityService {

  baseUrl = 'http://localhost:3000/priority';

  constructor(private http: HttpClient) {}

  getListPriority() {
    return this.http.get<priority []>(this.baseUrl);
  }}
