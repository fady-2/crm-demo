import { Component, Input } from '@angular/core';

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
  @Input() width: string = '38px';
@Input() borderRadius: string | null = null;  
@Input() height: string = '40px';
@Input() followup:string=''
}
