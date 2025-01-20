import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'http://127.0.0.1:8000'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${baseURL}/api/register`, data);
  }

  // login(email: string, password: string) {
  //   return this.http.get(`${baseURL}/api/login`, { email, password });
  // }

  // logout() {
  //   return this.http.post(`${baseURL}/api/logout`, '');
  // }

  // getUser() {
  //   return this.http.get(`${baseURL}/api/user`)
  // }
}
