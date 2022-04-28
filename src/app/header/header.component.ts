import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output() activeTabClick = new EventEmitter<string>();
    ngOnInit(): void {
    }
    
    constructor(private router: Router){}

    onTabClick(tabName: string){
        this.router.navigate([tabName]);
        // this.activeTabClick.emit(tabName);
    }
}