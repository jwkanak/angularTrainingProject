import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]' //square brackets identify can be placed on attributes
})

export class DropdownDirective {
   
    @HostBinding('class.open') isOpen = false;
    
    constructor(private elementRef: ElementRef, private renderer:Renderer2){}

    @HostListener('document:click', ['$event']) onButtonClick(eventData: Event){
        this.isOpen = this.elementRef.nativeElement.contains(eventData.target)? !this.isOpen: false;

    }
}