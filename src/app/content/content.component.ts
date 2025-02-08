import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Champion } from './chapmions';

@Component({
  selector: 'content-comp',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [HttpService]
})
export class ContentComponent implements OnInit {
    constructor(public http: HttpService) {}

    championName = "Gwen";
    champ: Champion | undefined;
    loaded: boolean = false;

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

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