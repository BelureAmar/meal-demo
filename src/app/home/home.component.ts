import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mealsList$!: Observable<any>;
  mealsList: any[] = [];
  searchMeal= "";

  constructor(private mealService: MealServiceService) { }

  ngOnInit(): void {
    this.getRandomMeal();
  }

  getRandomMeal() {
    this.mealsList$ = this.mealService.getRandomMeal()
    .pipe(
      tap((e: any) => this.mealsList = e.meals)
    )
  }

  getMealByName() {
    this.mealsList$ = this.mealService.getMealByName(this.searchMeal).pipe(
      tap((e: any) => this.mealsList = e.meals)
    )

  }

}
