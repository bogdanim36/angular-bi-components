import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, withLatestFrom} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {AppService} from '@app/app-service/app.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'bi-side-menu',
    templateUrl: 'bi-side-menu.component.html',
    styleUrls: ['bi-side-menu.component.scss'],
})
export class BiSideMenuComponent implements OnDestroy, OnInit {
    @ViewChild('drawer') drawer: MatSidenav;
    isHandset$: Observable<boolean>;

    constructor(public appService: AppService,
                router: Router) {
        this.isHandset$ = appService.observableIsHandset;
        router.events.pipe(
            withLatestFrom(this.isHandset$),
            filter(([a, b]) => b && a instanceof NavigationEnd)
        ).subscribe(() => this.drawer.close());
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
