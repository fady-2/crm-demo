import { Component, Input } from '@angular/core';
// import { FollowUpComponent } from "../../shared-followup/follow-up-component/follow-up-component";

@Component({
  selector: 'app-shared-buttons',
  imports: [],
  templateUrl: './shared-buttons.html',
  styleUrl: './shared-buttons.scss',
})
export class SharedButtons {
@Input() text:string='Button';
@Input() type:'button' |'submit'='button';
@Input() icon:string='';
@Input() backgroundColor :string='';
@Input() textColor: string='';
@Input() borderColor:string='';
@Input() className:string='';

@Input() followup:string=''
}
