import { Component, signal, Signal, WritableSignal } from '@angular/core';

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
addCharacter() {
throw new Error('Method not implemented.');
}
  characters: WritableSignal<character[]>;
  name = signal('Gohan');
  powerLevel = signal(100);

  // addCharacter() {
  //   if (!this.name() || this.powerLevel() <= 0) {
  //     return;
  //   }

  //   const newCharacter: character = {
  //     id: this.characters().length + 1,
  //     name: this.name(),
  //     powerLevel: this.powerLevel(),
  //   };

  //   // update the signal immutably
  //   this.characters.set([...this.characters(), newCharacter]);
  //   this.resetForm();
  // }

  // resetForm() {
  //   this.name.set('');
  //   this.powerLevel.set(0);
  // }

  constructor() {
    this.characters = signal([
      { id: 1, name: 'Goku', powerLevel: 9002 },
      // { id: 2, name: 'Veggeta', powerLevel: 2500 },
      // { id: 3, name: 'Piccolo', powerLevel: 900 },
    ]);
  }
}
