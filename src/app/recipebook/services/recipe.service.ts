import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/common/ingredient.model";
import { Recipe } from "../recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] =   [
        new Recipe('Da Burger', 'Delicious Cheeseburger', 
        'https://p2.piqsels.com/preview/264/601/260/burger-food-meat-cheese-thumbnail.jpg', [
            new Ingredient('hamburger', 1),
            new Ingredient('bun', 4)
        ]),
        new Recipe('PIZZA', 'Chicago Deep Dish', 
        'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2014/12/best-chicago-style-pizza-recipe.jpg', [
            new Ingredient('sausage', 3),
            new Ingredient('sauce', 2),
            new Ingredient('Dough', 1)
        ]
        )
    ];
    
    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
        return this.recipes.slice();
    }
}