import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class DetailsComponent {

  constructor(public route: ActivatedRoute) {
  }

}
