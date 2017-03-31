import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { Router } from '@angular/router';


@Component({
  selector: 'createlog',
  templateUrl: './createlog.component.html',
  styleUrls: ['./createlog.component.css']
})
export class CreatelogComponent{
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, detail: string, calories: number){
    var newMeal: Meal = new Meal(name, detail, calories);
    this.newMealSender.emit(newMeal);
  }
}
