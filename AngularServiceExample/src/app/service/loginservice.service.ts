import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

 API_URL = 'http://testapi.local/';

  constructor(private http: HttpClient) { }
  Authnticate(User) {
   return this.http.post(this.API_URL + 'api/userlogin', User);
  }

}

