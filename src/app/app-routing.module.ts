import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { FormsComponent } from "./forms/form.component";
import { CreditsComponent } from "./credits/credits.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
    { path: "", redirectTo: "/forms", pathMatch: "full" },
    { path: "forms", component: FormsComponent },
    { path: "credits/:user", component: CreditsComponent },
    { path: "credits", component: CreditsComponent },
    { path: "start", component: StartComponent },
    { path: "start/:user/:theme/:numberOfImages", component: StartComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
