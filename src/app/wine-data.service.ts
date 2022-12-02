import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Wine } from './wine-list/Wine';

const URL = 'https://63892267d94a7e5040aeb34d.mockapi.io/api/v1/wines';

@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  constructor(private http: HttpClient ) { }

  public getAll() : Observable<Wine[]>{

    return this.http.get<Wine[]>(URL)
              .pipe(
                tap((wines: Wine[])=> wines.forEach(wine =>wine.quantity = 0))
              );
  }
}
