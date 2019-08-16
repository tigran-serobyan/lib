import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UiKitInputComponent} from './atoms/input/input.component';
import {UiKitButtonComponent} from './atoms/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    UiKitInputComponent,
    UiKitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
