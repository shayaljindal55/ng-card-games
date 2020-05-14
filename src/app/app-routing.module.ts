import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockCardComponent } from './games/clock-card/clock-card.component';
import { ShowCardsComponent } from './games/show-cards/show-cards.component';
import { CssDesignsComponent } from './features/css-designs/css-designs.component';

const routes: Routes = [
    {
        path: '',
        component: ClockCardComponent,
    },
    {
        path: 'show-cards',
        component: ShowCardsComponent,
    },
    {
        path: 'css-patterns',
        component: CssDesignsComponent,
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
