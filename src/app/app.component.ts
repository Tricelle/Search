import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food we have at home';
  search = '';
  searchItems;
  foods = [
    'Skinless white meat',
    'Lean cuts of red meat',
    'Oily fish',
    'Tuna',
    'Light Tuna',
    'Salmon',
    'Mackerel',
    'Milk',
    'Eggs',
    'Cheese',
    'Yogurt',
    "Apple",
    "Water"
  ]
  constructor(){
    const items = JSON.parse(localStorage.getItem("foods"));
    if(!items){
      localStorage.setItem("foods", JSON.stringify(this.foods));
    }
  }

  searchList() {
    let foods = JSON.parse(localStorage.getItem("foods"))
    this.searchItems = foods.filter(x => {
      return x.toLowerCase().includes(this.search.toLowerCase());
    })
  }

  addItem() {
    let foods = JSON.parse(localStorage.getItem("foods"))
    foods.push(this.search);
    localStorage.setItem("foods", JSON.stringify(foods));
  }
}

