"use strict";

import { Inject, Injectable  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class BeerService {

    constructor (
        private http: Http,
        @Inject(DOCUMENT) private document: any
    ) {}

    getRandomBeer() {
        const domain = this.document.location.hostname;
        const port = this.document.location.port;
        let url = (domain == "localhost") ? (domain + ":" + port) : domain;
        return this.http.get('http://' + url + '/randombeer')
                        .map((response) => response.json())
                        .toPromise();
    }

}