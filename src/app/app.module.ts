import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BiGridModule} from '../bi-components/bi-grid/bi-grid.module';
import {BiTableSample1Component} from './show-case/bi-table/sample1/bi-table-sample1.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BiTableSample2Component } from './show-case/bi-table/sample2/bi-table-sample2.component';

const appRoutes: Routes = [
    {path: 'bi-table/sample1', component: BiTableSample1Component},
    {path: 'bi-table/sample2', component: BiTableSample2Component},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        BiTableSample1Component,
        PageNotFoundComponent,
        BiTableSample2Component
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        BrowserModule,
        BiGridModule
    ],
    exports: [BiGridModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
