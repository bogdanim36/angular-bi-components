import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BiGridModule} from '../bi-components/bi-grid/bi-grid.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BiGridModule
    ],
    exports: [BiGridModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
