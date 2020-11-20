import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'selector-name',
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})

export class FormsComponent {
    nomForm = 'Enter your name';
    constructor(private _router: Router,
        private _activRoute: ActivatedRoute) { }
    clickMe() {
        this._router.navigate(['/forms', { usuari: 'wayne' }]);
    }
}