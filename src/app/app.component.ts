import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChampionService } from './champion.service';
import { ContentComponent } from './content/content.component';

@Component({
    selector: 'gwen-app',
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ChampionService]
})
export class AppComponent {}