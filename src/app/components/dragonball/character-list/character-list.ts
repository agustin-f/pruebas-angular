import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  characters: any;
  powerLevel: any;
  name: any;
}
