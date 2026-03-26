import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Http2ServerRequest } from 'http2';
import { appUrls } from '../constants/apiUrls';
import { environment } from '../../../environments/environment.development';
import { IsignUpData } from '../auth/interfaces/IsignUpData';
import { IsignInData } from '../auth/interfaces/IsignInData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient)


  signUp(data: IsignUpData) {
    return this._HttpClient.post<any>(`${appUrls.signUp}`, data)
    }
  signIn(data: IsignInData) {
    return this._HttpClient.post<any>(`${appUrls.signIn}`, data)
  }
}
 