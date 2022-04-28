import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {  }

  //tutorial put this into the recipe service  and had that service access the shoppingList service... Not sure why that is needed so left this here to remove a step
  toShoppingListClick(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  addIngredientsToShoppinglist(){

  }

}
