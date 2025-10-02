import { Routes } from '@angular/router';
// Update the import path below to the correct location of CounterComponent
import { CounterComponent } from './pages/counter/cuonter.component';
import { heroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path: './',
        component: CounterComponent
    },
    {
       path: 'hero',
       component: heroPageComponent
    }
];
