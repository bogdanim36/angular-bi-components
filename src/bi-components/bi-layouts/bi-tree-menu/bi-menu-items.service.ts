import {AppConfigMenu, MenuItem} from '@app/app.config-menu';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class BiMenuItemsService {
    dataChange = new BehaviorSubject<MenuItem[]>([]);

    get data(): MenuItem[] {
        return this.dataChange.value;
    }

    constructor() {
        this.initialize();
    }

    initialize() {
        // Parse the string to json object.
        const data = AppConfigMenu[0].menu;

        // Notify the change.
        this.dataChange.next(data);
    }
}
