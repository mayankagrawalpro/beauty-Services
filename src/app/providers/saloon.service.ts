import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import  {ENV} from '../env'
  const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class SaloonService {

  constructor(private http: HttpClient) { }
  SaloonSignup(data): Observable<any> {
    const url = `${ENV.mainApi}/saloonRegistration`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`sallon Signup`)),
        catchError(this.handleError('sallon Signup', []))
      
    );
  }
   
   SaloonUpdate(data): Observable<any> {
    const url = `${ENV.mainApi}/saloonUpdate`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`saloonUpdate`)),
        catchError(this.handleError('saloonUpdate', []))
      
    );
  }

   SaloonLogin(data): Observable<any> {
    const url = `${ENV.mainApi}/saloonLogIn`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`saloonLogIn`)),
        catchError(this.handleError('saloonLogIn', []))
      
    );
  }
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log(message)
  }
}
