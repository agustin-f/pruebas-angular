import { Component, signal, Signal } from '@angular/core';

interface character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
})
export class dragonballPageComponent {
  characters: Signal<character[]>;
  name = signal('Gohan');
  powerLevel = signal(100);

  constructor() {
    this.characters = signal([
      { id: 1, name: 'Goku', powerLevel: 9002 },
      { id: 2, name: 'Veggeta', powerLevel: 2500 },
      { id: 3, name: 'Piccolo', powerLevel: 900 },
    ]);
  }
}
