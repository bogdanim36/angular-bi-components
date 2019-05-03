import {Component, OnInit} from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';
import {Router} from '@angular/router';
import {MenuItem} from '@app/app.config-menu';
import {BiMenuItemsService} from './bi-menu-items.service';

@Component({
    selector: 'bi-tree-menu',
    templateUrl: './bi-tree-menu.component.html',
    styleUrls: ['./bi-tree-menu.component.scss']
})
export class BiTreeMenuComponent implements OnInit {
    menuItems: Array<MenuItem>;
    options: ITreeOptions;

    constructor(private dataSrv: BiMenuItemsService, private router: Router) {
        this.menuItems = dataSrv.data;
        this.options = {
            displayField: 'label',
            childrenField: 'items',
            levelPadding: 10,
            useVirtualScroll: true,
            animateExpand: true,
            scrollOnActivate: true,
            animateSpeed: 30,
            animateAcceleration: 1.2,
            isExpandedField: 'expanded',
            actionMapping: {
                mouse: {
                    click: (tree, node, $event) => {
                        if (!node.hasChildren) {
                            router.navigate([node.data.routerLink]);
                        }
                    }
                }
            },
        };
    }

    ngOnInit(): void {
    }

}
