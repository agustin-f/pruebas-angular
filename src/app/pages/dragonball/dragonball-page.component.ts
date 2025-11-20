import { Component, signal, Signal } from "@angular/core";

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

    constructor() {
        this.characters = signal ([
            {id:1, name:'Goku', powerLevel:9002 }, 
            {id:1, name:'Veggeta', powerLevel:2500 }, 
            {id:1, name:'Piccolo', powerLevel:3000 } 
        ]);
    }
}
