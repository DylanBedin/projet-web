import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-left',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
    currentCat;

    constructor() {
    }

    ngOnInit() {
        this.currentCat = '/'+sessionStorage.getItem('cat')+'s';
    }

    getStyle(action: string) {
        if (action != sessionStorage.getItem('action')) {
            return {
                'background-image': 'linear-gradient(to bottom,#3c3c3c 0,#222 100%)',
                'color': 'white',
                'font-weight': 'bold',
                'margin': '1rem 0rem 1rem 1rem'
            };
        }
        else {
            return {
                'background-image': 'linear-gradient(to bottom,#337ab7 0,#265a88 100%)',
                'color': 'white',
                'font-weight': 'bold',
                'margin': '1rem 0rem 1rem 1rem'
            };
        }

    }

}
