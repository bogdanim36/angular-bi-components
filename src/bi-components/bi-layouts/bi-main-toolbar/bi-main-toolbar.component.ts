import {Component, OnInit} from '@angular/core';
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
        this.appTitle = appService.appTitle;
        document.title = this.appTitle;
        document.querySelector('head title').innerHTML = this.appTitle;
        this.language = appService.language;
        this.languages = appService.languages;
    }

    ngOnInit() {
    }

    onLanguageChanged(changed: MatSelectChange) {
        this.appService.languageChanged.next(changed.value);
    }
}
