import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('hamburger', 1),
        new Ingredient('apple', 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        // this.ingredients = this.ingredients.concat(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }
}