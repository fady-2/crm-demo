import { Component} from '@angular/core';
import { SharedSearchComponent } from "../../../../shared/UI/shared-search.component/shared-search.component";

@Component({
  selector: 'app-filteration',
  standalone: true,
  imports: [SharedSearchComponent],
  templateUrl: './filteration.component.html',
  styleUrl: './filteration.component.scss',
})
export class FilterationComponent {
  
}
