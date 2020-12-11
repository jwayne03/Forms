import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ListPicker } from "@nativescript/core";

@Component({
    selector: "selector-name",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormsComponent {
    username = "";
    themeimage = "";
    number = 0;
    public themes: Array<string> = ["Anime", "Programming"];
    public images: Array<number> = [2, 3, 4];

    constructor(private _router: Router, private _activRoute: ActivatedRoute) {}

    public onSelectedIndexChanged(args) {
        
        const picker = <ListPicker>args.object;
        this.themeimage = this.themes[picker.selectedIndex];
    
    }

    public onSelectedIndexChangedIndex(args) {
        const picker = <ListPicker>args.object;
        this.number = this.images[picker.selectedIndex];
    }

    onClickStart() {
        this._router.navigate([
            "/start",
            {
                user: this.username,
                theme: this.themeimage,
                numberOfImages: this.number,
            },
        ]);
    }

    onClickCredits() {
        this._router.navigate([
            "/credits",
            {
                user: this.username,
            },
        ]);
    }

}
