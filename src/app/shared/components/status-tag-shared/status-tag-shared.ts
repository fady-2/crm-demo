import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-tag-shared',
  imports: [],
  templateUrl: './status-tag-shared.html',
  styleUrl: './status-tag-shared.scss',
})
export class StatusTagShared {
@Input()label:string='';
@Input() background:string='';
@Input() color:string=''; 
}
