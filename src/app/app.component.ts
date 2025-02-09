import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChampionService } from './champion.service';
import { ContentComponent } from './content/content.component';
import { HttpService } from 'src/http.service';
import { Champion } from './content/chapmions';
import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'gwen-app',
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ChampionService, HttpService],
    animations: [
        trigger('fadeInOutHeader', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('false => true', [
                animate('2s 0.5s ease')
            ])
        ]),
        trigger('fadeInOutBody', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('false => true', [
                animate('1s 1.5s ease-in-out'),
                query('@listAnimation', animateChild(), { optional: true })
            ])
        ])
    ]
})
export class AppComponent implements OnInit {
    constructor(public http: HttpService) {}

    championName = "Gwen";
    champ: Champion | undefined;
    loaded: boolean = false;

    ngOnInit(): void {
        this.http.getData("./character.json").
            subscribe({
                next: (data: any) => {
                    this.champ = data.characters.find((char) => char.name.toLowerCase() == this.championName.toLowerCase()) || null;
                    this.loaded = true;
                }
        });
    }
}