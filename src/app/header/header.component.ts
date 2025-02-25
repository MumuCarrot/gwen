import { Component } from '@angular/core';
import { ChampionService } from '../champion.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(public champion: ChampionService) {}
}