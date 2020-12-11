import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Start } from "./start";

@Component({
    selector: "ns-app",
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.css"],
})
export class StartComponent implements OnInit {
    information = "";
    username = "ii";
    theme = "";
    number = "0";
    images = [];

    constructor(private _router: Router, private _activRoute: ActivatedRoute) {}

    onBackActivity() {
        this._router.navigate(["/forms"]);
    }

    ngOnInit(): void {
        this.username = this._activRoute.snapshot.params.user;
        this.theme = this._activRoute.snapshot.params.theme;
        this.number = this._activRoute.snapshot.params.numberOfImages;
        console.log(this.theme, this.number, this.username);

        if (this.theme == "Programming") {
            this.images = [
                new Start("~/assets/c-programming.png"),
                new Start("~/assets/java.jpg"),
                new Start("~/assets/swift.png"),
                new Start("~/assets/android.png"),
            ];
        } else {
            this.images = [
                new Start("~/assets/black-clover.jpg"),
                new Start("~/assets/death-note.jpg"),
                new Start("~/assets/dragon-slayer.jpg"),
                new Start("~/assets/inuyasha.jpg"),
            ];
        }
    }
}
