import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  constructor(private httpClient: HttpClient) { }

  getRandomMeal(){
    return this.httpClient.get(environment.randomAPI);
  }

  getMealByName(value: string){
    return this.httpClient.get(environment.searchAPI + value);
  }
}
