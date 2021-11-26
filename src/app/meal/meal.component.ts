import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input()
  meal: any;
  ingredientList: any[] = [];
  maxInstruction = 100;
  maxIngredients = 0;
  
  constructor() { }

  ngOnInit(): void {
    if(this.meal){
      this.getIngredients()
    }
  }

  
  getIngredients(){
    let i = 0;
    while(i++ <=20 && this.meal && this.meal["strIngredient" + i]){
      let obj = {
        item: this.meal["strIngredient" + i],
        quantity: this.meal["strMeasure" + i]
      }
      this.ingredientList.push(obj);
    }
  }
}
