import {Component, OnInit} from '@angular/core';
import {appInfo} from '@app/app.info';
import {environment} from '../../../environments/environment';
import {MatSelectChange} from '@angular/material';
import {AppService} from '@app/app-service/app.service';

@Component({
    selector: 'bi-main-toolbar',
    templateUrl: './bi-main-toolbar.component.html',
    styleUrls: ['./bi-main-toolbar.component.scss']
})
export class BiMainToolbarComponent implements OnInit {
    appTitle: string;
    language: string;
    languages: any[];

    constructor(private appService: AppService) {
        this.appTitle = appInfo.name;
        this.language = environment.language;
        this.languages = environment.languages;
        document.title = this.appTitle;
        document.querySelector('head title').innerHTML = this.appTitle;
    }

    ngOnInit() {
    }

    languageChanged(changed: MatSelectChange) {
        environment.language = changed.value;
        this.appService.addToStorage('language', environment.language);
        window.location.reload();
    }
}
