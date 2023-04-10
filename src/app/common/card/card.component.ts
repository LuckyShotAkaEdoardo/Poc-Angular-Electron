import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';

import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  filter,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { ElectronService } from 'ngx-electron-fresh';
import { GitItemsSearch } from 'src/app/model';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [],
})
export class MyCardComponent implements OnDestroy, OnInit {
  _destroy = new Subject<boolean>();
  value: any;
  data$ = new BehaviorSubject<GitItemsSearch>({});
  @Output() download = new EventEmitter<string>();
  @Input() set data(data: GitItemsSearch) {
    if(data) {
      console.log('card Component', );
      this.data$.next(data);
    }           
  }
  constructor(private _electronService: ElectronService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this._destroy.next(true);
  }

  saveRepo(path: string) {
    this._electronService.ipcRenderer.sendSync('event', { repoPath: path });
  }
}
