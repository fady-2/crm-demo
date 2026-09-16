import { Component} from '@angular/core';
import { SharedSearchComponent } from "../../../../shared/UI/shared-search.component/shared-search.component";
import { SharedButtonComponent } from '../../../../shared/components/shared-button.component/shared-button.component';

@Component({
  selector: 'app-filteration',
  standalone: true,
  imports: [SharedSearchComponent, SharedButtonComponent],
  templateUrl: './filteration.component.html',
  styleUrl: './filteration.component.scss',
})
export class FilterationComponent {
  
}
