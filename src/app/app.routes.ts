import { Routes } from '@angular/router';
// Update the import path below to the correct location of CounterComponent
import { CounterComponent } from './pages/counter/cuonter.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    }
];
