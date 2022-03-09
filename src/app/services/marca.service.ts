import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private urlEndPoint =  environment.URLPOINT + '/marca';

  constructor(private http: HttpClient, private router: Router) {
  }

  list(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint+'/list', {
        headers: {}
    }).pipe(
        catchError(e => {
            return throwError(e);
        })
    );
}
}
