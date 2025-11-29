import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-superpage.component.html',
  standalone: true,
  imports: [],
})
export class dragonballSuperPageComponent {
  characters: WritableSignal<character[]>;
  name = signal('');
  powerLevel = signal(0);

  constructor() {
    this.characters = signal([
      { id: 1, name: 'Goku', powerLevel: 9002 },
      { id: 2, name: 'Veggeta', powerLevel: 2500 },
    ]);
  }
}
