import { Component, Input } from '@angular/core';
import { Champion } from './chapmions';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'content-comp',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('listAnimation', [
        transition(':enter', [
            query('.text-item', [
                style({ opacity: 0, transform: 'translateX(40px)' }),
                stagger(200, [
                    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0px)' }))
                ])
            ], { optional: true })
        ]),
        transition(':leave', [
            query('.text-item', [
                stagger(100, [
                    animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(40px)' }))
                ])
            ], { optional: true })
        ])
      ]
    )
  ]
})
export class ContentComponent {

    @Input champ: Champion | undefined;

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}