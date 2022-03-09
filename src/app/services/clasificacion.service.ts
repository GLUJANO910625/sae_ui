import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {
  private urlEndPoint =  environment.URLPOINT + '/clasificacion';

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
