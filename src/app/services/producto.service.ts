import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint =  environment.URLPOINT + '/producto';

  constructor(private http: HttpClient, private router: Router) {
  }
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});


  list(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint+'/list', {
        headers: {}
    }).pipe(
        catchError(e => {
            return throwError(e);
        })
    );
  }

  saveUdate(producto: any): Observable<any> {
    // tslint:disable-next-line:max-line-length jsdoc-format
    return this.http.post<any>(this.urlEndPoint + '/saveUpdate', producto, {headers: this.httpHeaders}).pipe(
        catchError(e => {
            return throwError(e);
        })
    );
}

get(id: any): Observable<any> {
  return this.http.get<any>(this.urlEndPoint+'/get/'+ id, {
      headers: {}
  }).pipe(
      catchError(e => {
          return throwError(e);
      })
  );
}

save(producto:any): Observable<any> {
  return this.http.post<any>(this.urlEndPoint+'/saveUpdate',producto, {
      headers: this.httpHeaders
  }).pipe(
      catchError(e => {
          return throwError(e);
      })
  );
}
}
