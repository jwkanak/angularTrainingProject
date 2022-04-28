import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipebook/recipe/recipe.component";
import { ShoppingListComponent } from "./shoppinglist/shopping-list/shopping-list.component";

const routes: Routes=[
    {path: 'recipe', component: RecipeComponent},
    {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}