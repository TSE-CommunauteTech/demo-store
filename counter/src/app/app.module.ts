import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyListenerComponent } from './my-listener/my-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyListenerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
