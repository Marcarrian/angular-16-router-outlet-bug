import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
  ],
})
export class ListComponent {

  constructor(private _router: Router) {
  }

  public openDetails(item: string | null): void {
    this._router.navigate(['list', {outlets: {details: item === null ? null : [item]}}]);
  }

}
