import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BiSideMenuComponent} from './bi-side-menu/bi-side-menu.component';
import {BiTreeMenuComponent} from './bi-tree-menu/bi-tree-menu.component';
import {BiMainToolbarComponent} from './bi-main-toolbar/bi-main-toolbar.component';
import {BiMenuItemsService} from './bi-tree-menu/bi-menu-items.service';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatButtonModule, MatIconModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatTreeModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TreeModule} from 'angular-tree-component';


@NgModule({
    declarations: [
        BiSideMenuComponent,
        BiTreeMenuComponent,
        BiMainToolbarComponent,
    ],
    exports: [
        BiSideMenuComponent,
    ],
    providers: [
        HttpClient,
        BiMenuItemsService
    ],
    imports: [
        BrowserModule,
         HttpClientModule,
        LayoutModule,
        RouterModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        MatTreeModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatTreeModule,
        FormsModule,
        MatSelectModule,
        TreeModule.forRoot()
    ]
})

export class BiLayoutsModule {
}
