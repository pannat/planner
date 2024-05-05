import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpDto } from '../libs';
import { LoginDto } from '../libs/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  httpClient = inject(HttpClient);

  signUp(body: SignUpDto) {
    return this.httpClient.put('api/auth/register', body);
  }
  login(body: LoginDto) {
    return this.httpClient.post('api/auth/login', body);
  }
}
