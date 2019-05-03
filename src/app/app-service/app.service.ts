import {Injectable, Input} from '@angular/core';
import {BiTableColumn} from '../../bi-components/bi-grid/bi-table/models/bi-table-column';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {BiTranslation} from '../../bi-components/bi-translation';
import {environment} from '../../environments/environment';
import {appInfo} from '@app/app.info';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    data: Array<any>;
    columns: Partial<BiTableColumn>[];
    isHandset: boolean;
    observableIsHandset: Observable<boolean>;
    languageChanged: Subject<string>;
    language: string;
    languages: { id, name }[];
    appTitle: string;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.appTitle = appInfo.name;
        this.setLanguage();
        this.setHandset();
        this.data = [
            {id: 1, name: 'Test1', description: 'aafgsdhdfjdgkfkl'},
            {id: 2, name: 'Test2', description: 'sddgsdfgjgfhxdkchgfkl'},
            {id: 3, name: 'Test3', description: 'ddfsghjdgisdrtwywse'}
        ];
        this.columns = [
            {id: 1, field: 'id', headerName: new BiTranslation('Id', 'Id')},
            {id: 2, field: 'name', headerName: new BiTranslation('Name', 'Nume')},
            {id: 3, field: 'description', headerName: new BiTranslation('Description', 'Descriere')},
        ];
    }

    setHandset() {
        this.observableIsHandset = this.breakpointObserver
            .observe(['(max-width: 800px)'])
            .pipe(
                map((result: BreakpointState) => result.matches)
            );
        this.observableIsHandset.subscribe(value => {
            this.isHandset = value;
            if (this.isHandset) {
                // console.log('Viewport is  less than 500px !');
            } else {
                // console.log('Viewport is big enough !');
            }
        });
    }

    setLanguage() {
        const language = this.getStorage('language');
        if (language) {
            environment.language = language;
        }
        this.language = environment.language;
        this.languages = environment.languages;
        this.languageChanged = new Subject<string>();
        this.languageChanged.subscribe(language1 => {
            // console.log('language changed', language1);
            environment.language = language1;
            this.addToStorage('language', environment.language);
            window.location.reload();
        });
    }

    addToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
