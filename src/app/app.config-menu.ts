import {BiTranslation} from '../bi-components/bi-translation';

export const noRoleMenu: MenuItem[] = [
    {
        label: new BiTranslation('BiTable', 'BiTable'), expanded: true, items:
            [
                {label: new BiTranslation('Sample 1', 'Exemplu 1'), routerLink: 'bi-table/sample1', icon: 'fa fa-caret-right'}
                , {label: new BiTranslation('Sample 2', 'Exemplu 2'), routerLink: 'bi-table/sample2', icon: 'fa fa-caret-right'}
            ]
    }];

export const AppConfigMenu = {
    0: {
        name: 'No role',
        menu: noRoleMenu
    }
};

export class MenuItem {
    label: BiTranslation;
    expanded?: boolean;
    routerLink?: string;
    icon?: string;
    type?: any;
    items?: Array<MenuItem>;
}
