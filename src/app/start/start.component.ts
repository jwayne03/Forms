import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Start } from './start';

@Component({
    selector: "ns-app",
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.css"]
})

export class StartComponent {
    information = "Programming";
    username = "";
    theme = "";
    number = "0";
    images = []

    constructor(
        private _router: Router,
        private _activRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
        this.theme = this._activRoute.snapshot.params.theme;
        this.number = this._activRoute.snapshot.params.numberOfImages;
        this.username = this._activRoute.snapshot.params.user;
        
        if (this.theme == "Programming") {
            this.programmingImage();
        } else {
            this.animeImage();
        }
    }   

    private programmingImage() {
        this.images = [
            new Start("~/assets/c-programming.png"),
            new Start("~/assets/java.jpg"),
            new Start("~/assets/swift.png"),
            new Start("~/assets/android.png"),
        ]
    }

    private animeImage() {
        this.images = [
            new Start("~/assets/black-clover.jpg"),
            new Start("~/assets/death-note.jpg"),
            new Start("~/assets/dragon-slayer.jpg"),
            new Start("~/assets/inuyasha.jpg"),
        ]
    }
}