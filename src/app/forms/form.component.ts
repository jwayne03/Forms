import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListPicker } from '@nativescript/core';

@Component({
    selector: 'selector-name',
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})

export class FormsComponent {
    nomForm = '';
    public themes: Array<string> = [];
    public images: Array<string> = [];

    public onSelectedIndexChanged(args) {
        const picker = <ListPicker>args.object;
    }

    public onSelectedIndexChangedIndex(args) {
        const picker = <ListPicker>args.object;
    }
    onClickStart() {
        this._router.navigate(
            ['/start', { User: 'wayne' }]
        );
    }

    onClickCredits() {
        this._router.navigate(
            ['/credits', { User: 'wayne' }]
        );
    }

    constructor(private _router: Router,
        private _activRoute: ActivatedRoute) { }
}