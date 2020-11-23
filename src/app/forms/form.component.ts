import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListPicker } from '@nativescript/core';

@Component({
    selector: 'selector-name',
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})

export class FormsComponent {
    username = '';
    public themes: Array<string> = ["Anime", "Programming"];
    public images: Array<number> = [2, 3, 4];

    constructor(
        private _router: Router,
        private _activRoute: ActivatedRoute) { }

    public onSelectedIndexChanged(args) {
        const picker = <ListPicker>args.object;
    }

    public onSelectedIndexChangedIndex(args) {
        const picker = <ListPicker>args.object;
    }

    onClickStart() {
        this._router.navigate(
            ['/start', { user: 'wayne' }]
        );
    }

    onClickCredits() {
        this._router.navigate(
            ['/credits', { user: 'wayne' }]
        );
    }
}