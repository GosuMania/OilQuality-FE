import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OilQualityComponent } from './pages/oil-quality/oil-quality.component';
import {AppRoutingModule} from "./app-routing.module";
import {OilQualityService} from "./services/oil-quality.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    OilQualityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [OilQualityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
