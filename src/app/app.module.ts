import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { ROUTES } from "./app.route";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CommonService } from "./shared/service.component";

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TopComponent,
        BottomComponent,
        LeftComponent,
        RightComponent,
        PagenotfoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
