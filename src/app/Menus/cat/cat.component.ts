import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
    currentAction;

    constructor() {
    }

    ngOnInit() {
        this.currentAction = sessionStorage.getItem("action");
    }

    getStyle(cat: string) {
        if (cat != sessionStorage.getItem('cat')) {
            return {
                'background-image': 'linear-gradient(to bottom,#3c3c3c 0,#222 100%)',
                'color': 'white',
                'font-weight': 'bold',
                'margin': '1rem 1rem 1rem 0rem'
            };
        }
        else {
            return {
                'background-image': 'linear-gradient(to bottom,#337ab7 0,#265a88 100%)',
                'color': 'white',
                'font-weight': 'bold',
                'margin': '1rem 1rem 1rem 0rem'
            };
        }

    }

}
