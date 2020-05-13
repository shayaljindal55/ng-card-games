import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockCardComponent } from './games/clock-card/clock-card.component';
import { ShowCardsComponent } from './games/show-cards/show-cards.component';

const routes: Routes = [
    {
        path: '',
        component: ClockCardComponent,
    },
    {
        path: 'show-cards',
        component: ShowCardsComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
