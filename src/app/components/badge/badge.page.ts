import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage{
@Input() icon: string;
@Input() text: string;

}
