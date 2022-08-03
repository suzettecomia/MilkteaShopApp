import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage{
@Input() icon: string;
@Output() text: string;

}
