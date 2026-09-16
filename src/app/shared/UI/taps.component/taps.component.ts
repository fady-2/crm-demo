import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StateOption } from '../../../features/owner-page/owner-page.component';

@Component({
  selector: 'app-taps',
  imports: [SelectButtonModule, FormsModule],
  templateUrl: './taps.component.html',
  styleUrl: './taps.component.scss',
})
export class TapsComponent {
  options = input.required<StateOption[]>();
  valueChanged = output<any>()
}
