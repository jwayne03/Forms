import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    templateUrl: "./credits.component.html",
    styleUrls: ["./credits.component.css"],
})
export class CreditsComponent {
    constructor(private _router: Router, private _activRoute: ActivatedRoute) {}

    onBackActivity() {
        this._router.navigate(["/forms"]);
    }
}
