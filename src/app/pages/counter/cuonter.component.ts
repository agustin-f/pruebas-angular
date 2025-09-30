import { Component } from '@angular/core';

@Component({
templateUrl: './counter.component.html', 
styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor() {}

  title = 'Counter';
  count = 0;

  increaseBy(value: number) {
    this.count += value;
  }

  decreaseBy(value: number) {
    this.count -= value;
  }

  resetCounter() {
    this.count = 0;
  }
}
