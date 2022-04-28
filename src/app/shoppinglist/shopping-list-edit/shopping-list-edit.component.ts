import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  // @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<Ingredient>();
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItemClick(){
    let name =  this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;

    if(amount !== 0 && name !== '') {
        this.shoppingListService.addIngredient(new Ingredient(name, amount));
      }
  }

  onDeleteClick(){

  }

  onClearClick(){
    this.amountInput.nativeElement.value='';
    this.nameInput.nativeElement.value='';
  }

}
