import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'serachBar',
  imports: [FormsModule],
  template:'<div>cerca<input type="text"  [(ngModel)]="value" (ngModelChange)="search($event)"[ngModelOptions]="{standalone: true}"/></div>'
})
export class SearchBar implements OnDestroy {
  _destroy = new Subject<boolean>();
  $event: any;
  value: any;
  @Output() update = new EventEmitter<string>();
  constructor() {}
  ngOnDestroy(): void {
    this._destroy.next(true);
  }
  search(value: any) {
    this.update.next(value);
  }

}
