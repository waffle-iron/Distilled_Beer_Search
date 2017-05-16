"use strict";

import { Component} from '@angular/core';
import { BeerService } from './beer.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [BeerService]
})

export class AppComponent {

    message = 'This is the sample message.';
    title: string = "test";

    obj: any = {};

    constructor(private _beerService: BeerService) {}

    getRandom() {
        this._beerService.getRandomBeer()
            .then((result) => {
                    this.obj = <JSON>result.data;
                    console.log(this.obj);
            })
            .catch((error) => console.error(error));
    }

    ngOnInit() {
        this.getRandom();
        while(this.obj != {}){
            this.getRandom();
        }
    }
}