import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-my-listener',
  templateUrl: './my-listener.component.html',
  styleUrls: ['./my-listener.component.css']
})
export class MyListenerComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

}
